'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Environmental & Performance Gate Checks
    if (typeof window === 'undefined' || !containerRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check WebGL availability
    const canvasTest = document.createElement('canvas');
    const gl = canvasTest.getContext('webgl') || canvasTest.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not supported, omitting 3D canvas enhancement.');
      return;
    }

    const container = containerRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 2. Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 72);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Master group for interactive parallax and positioning
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Check if initial theme is dark
    let isDark = document.documentElement.classList.contains('dark');

    // ========================================================
    // 3. LAYER 1: 3D ANIMATED PARTICLE WAVE (The Stellagent Fabric)
    // ========================================================
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    
    const cols = isMobile ? 38 : isTablet ? 60 : 88;
    const rows = isMobile ? 26 : isTablet ? 42 : 56;
    const numParticles = cols * rows;

    const waveWidth = isMobile ? 70 : 110;
    const waveDepth = isMobile ? 50 : 75;

    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);
    const opacities = new Float32Array(numParticles);

    // Brand Palette Definition
    const colorPrimaryBlue = new THREE.Color('#2878D4');
    const colorCyan = new THREE.Color('#00D5E8');
    const colorLightCyan = new THREE.Color('#7DEBF2');
    const colorSilver = new THREE.Color('#DCE7F5');
    const colorWhite = new THREE.Color('#FFFFFF');

    let idx = 0;
    for (let i = 0; i < cols; i++) {
      const u = i / (cols - 1); // 0 -> 1 across X
      const x = (u - 0.5) * waveWidth;

      for (let j = 0; j < rows; j++) {
        const v = j / (rows - 1); // 0 -> 1 across Z
        const z = (v - 0.5) * waveDepth;
        const y = 0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        // Color interpolation based on spatial coordinate and diagonal gradient
        const tColor = (u * 0.6 + v * 0.4);
        let pColor: THREE.Color;

        if (Math.random() > 0.94) {
          // Occasional bright highlight spark
          pColor = colorWhite.clone();
        } else if (tColor < 0.35) {
          pColor = colorPrimaryBlue.clone().lerp(colorCyan, tColor / 0.35);
        } else if (tColor < 0.7) {
          pColor = colorCyan.clone().lerp(colorLightCyan, (tColor - 0.35) / 0.35);
        } else {
          pColor = colorLightCyan.clone().lerp(colorSilver, (tColor - 0.7) / 0.3);
        }

        colors[idx * 3] = pColor.r;
        colors[idx * 3 + 1] = pColor.g;
        colors[idx * 3 + 2] = pColor.b;

        // Size variation
        scales[idx] = Math.random() > 0.92 ? 3.8 : 1.8 + Math.random() * 1.6;

        // Edge fade out to prevent hard cutoffs
        const edgeX = Math.sin(u * Math.PI);
        const edgeZ = Math.sin(v * Math.PI);
        // Fade out left edge more so the headline text stays unobstructed
        const leftFade = Math.pow(u, 0.7);
        opacities[idx] = edgeX * edgeZ * leftFade;

        idx++;
      }
    }

    const waveGeometry = new THREE.BufferGeometry();
    waveGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    waveGeometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    waveGeometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
    waveGeometry.setAttribute('aOpacity', new THREE.BufferAttribute(opacities, 1));

    // Custom WebGL Shader for smooth 60fps wave undulation
    const waveUniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.75) },
      uIsDark: { value: isDark ? 1.0 : 0.0 }
    };

    const waveVertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uPixelRatio;
      attribute vec3 aColor;
      attribute float aScale;
      attribute float aOpacity;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vColor = aColor;
        vec3 pos = position;

        // Multi-frequency harmonic 3D wave undulation
        float w1 = sin(pos.x * 0.075 + uTime * 0.75) * cos(pos.z * 0.055 + uTime * 0.6) * 7.5;
        float w2 = sin(pos.x * 0.14 - uTime * 0.5 + pos.z * 0.09) * 3.8;
        float w3 = cos(length(pos.xz) * 0.045 - uTime * 0.65) * 5.0;

        // Subtle interactive mouse displacement
        float distToMouse = length(pos.xz - uMouse * 35.0);
        float mouseWave = smoothstep(45.0, 0.0, distToMouse) * 6.5;

        pos.y += w1 + w2 + w3 + mouseWave;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = aScale * uPixelRatio * (160.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;

        // Depth perspective alpha attenuation
        float depthAlpha = smoothstep(160.0, 45.0, -mvPosition.z);
        vAlpha = aOpacity * depthAlpha;
      }
    `;

    const waveFragmentShader = `
      uniform float uIsDark;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        // Anti-aliased circular particle with soft exponential glow
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) discard;

        float glow = exp(-dist * 4.2);
        float alpha = vAlpha * glow;

        // In light mode, slightly boost particle visibility and richness
        vec3 finalColor = vColor;
        if (uIsDark < 0.5) {
          finalColor = mix(vColor, vec3(0.03, 0.45, 0.75), 0.25);
          alpha = alpha * 1.15;
        }

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const waveMaterial = new THREE.ShaderMaterial({
      uniforms: waveUniforms,
      vertexShader: waveVertexShader,
      fragmentShader: waveFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending
    });

    const wavePoints = new THREE.Points(waveGeometry, waveMaterial);
    
    // Position the wave gracefully at the right and bottom, wrapping around the visual
    const waveGroup = new THREE.Group();
    waveGroup.position.set(isMobile ? 10 : 22, isMobile ? -14 : -18, -12);
    waveGroup.rotation.set(-Math.PI * 0.32, Math.PI * 0.16, -Math.PI * 0.08);
    waveGroup.add(wavePoints);
    masterGroup.add(waveGroup);

    // ========================================================
    // 4. LAYER 2: FUTURISTIC ORBITAL RINGS & SATELLITE LIGHT TRAILS
    // ========================================================
    const orbitalGroup = new THREE.Group();
    orbitalGroup.position.set(isMobile ? 8 : 18, isMobile ? 2 : 4, -4);
    masterGroup.add(orbitalGroup);

    // Orbit 1: Inner Luminous Ring
    const orbit1Curve = new THREE.EllipseCurve(
      0, 0,
      isMobile ? 16 : 24, isMobile ? 11 : 16,
      0, 2 * Math.PI,
      false,
      0
    );
    const orbit1Points = orbit1Curve.getPoints(128);
    const orbit1Geometry = new THREE.BufferGeometry().setFromPoints(
      orbit1Points.map(p => new THREE.Vector3(p.x, p.y, 0))
    );
    const orbit1Material = new THREE.LineBasicMaterial({
      color: 0x00D5E8,
      transparent: true,
      opacity: isDark ? 0.32 : 0.42,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending
    });
    const orbit1Line = new THREE.Line(orbit1Geometry, orbit1Material);
    orbit1Line.rotation.set(1.15, 0.38, -0.22);
    orbitalGroup.add(orbit1Line);

    // Orbit 2: Outer Luminous Ring
    const orbit2Curve = new THREE.EllipseCurve(
      0, 0,
      isMobile ? 22 : 34, isMobile ? 15 : 23,
      0, 2 * Math.PI,
      false,
      0
    );
    const orbit2Points = orbit2Curve.getPoints(128);
    const orbit2Geometry = new THREE.BufferGeometry().setFromPoints(
      orbit2Points.map(p => new THREE.Vector3(p.x, p.y, 0))
    );
    const orbit2Material = new THREE.LineBasicMaterial({
      color: 0x2878D4,
      transparent: true,
      opacity: isDark ? 0.22 : 0.35,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending
    });
    const orbit2Line = new THREE.Line(orbit2Geometry, orbit2Material);
    orbit2Line.rotation.set(0.85, -0.45, 0.32);
    orbitalGroup.add(orbit2Line);

    // Satellite Light Points (4 Glowing Travelers on the Orbits)
    const numSatellites = isMobile ? 2 : 4;
    const satelliteGeo = new THREE.BufferGeometry();
    const satPos = new Float32Array(numSatellites * 3);
    const satCols = new Float32Array(numSatellites * 3);

    for (let s = 0; s < numSatellites; s++) {
      satPos[s * 3] = 0;
      satPos[s * 3 + 1] = 0;
      satPos[s * 3 + 2] = 0;

      const satColor = s % 2 === 0 ? colorCyan : colorLightCyan;
      satCols[s * 3] = satColor.r;
      satCols[s * 3 + 1] = satColor.g;
      satCols[s * 3 + 2] = satColor.b;
    }

    satelliteGeo.setAttribute('position', new THREE.BufferAttribute(satPos, 3));
    satelliteGeo.setAttribute('color', new THREE.BufferAttribute(satCols, 3));

    // Particle sprite texture generated procedurally for glowing spheres
    const createGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.25, 'rgba(0,213,232,0.85)');
        gradient.addColorStop(0.6, 'rgba(40,120,212,0.3)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const glowTexture = createGlowTexture();
    const satelliteMat = new THREE.PointsMaterial({
      size: isMobile ? 4.5 : 6.5,
      map: glowTexture,
      transparent: true,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexColors: true,
      depthWrite: false
    });

    const satellites = new THREE.Points(satelliteGeo, satelliteMat);
    orbitalGroup.add(satellites);

    // ========================================================
    // 5. LAYER 3: ATMOSPHERIC AMBIENT FLOATING DUST
    // ========================================================
    const dustCount = isMobile ? 45 : 110;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);

    for (let d = 0; d < dustCount; d++) {
      // Clustered around the right-hand visual focal area
      dustPositions[d * 3] = (Math.random() - 0.25) * (isMobile ? 50 : 85);
      dustPositions[d * 3 + 1] = (Math.random() - 0.45) * (isMobile ? 40 : 65);
      dustPositions[d * 3 + 2] = (Math.random() - 0.5) * 45;

      const dColor = Math.random() > 0.5 ? colorCyan : colorSilver;
      dustColors[d * 3] = dColor.r;
      dustColors[d * 3 + 1] = dColor.g;
      dustColors[d * 3 + 2] = dColor.b;
    }

    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 2.2,
      map: glowTexture,
      transparent: true,
      opacity: isDark ? 0.45 : 0.6,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexColors: true,
      depthWrite: false
    });

    const dustPoints = new THREE.Points(dustGeo, dustMat);
    masterGroup.add(dustPoints);

    // ========================================================
    // 6. INTERACTION & ANIMATION LOOP
    // ========================================================
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized between -1 and 1
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Watch for Theme changes (dark/light mode)
    const observer = new MutationObserver(() => {
      const currentDark = document.documentElement.classList.contains('dark');
      if (currentDark !== isDark) {
        isDark = currentDark;
        waveUniforms.uIsDark.value = isDark ? 1.0 : 0.0;
        waveMaterial.blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
        orbit1Material.blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
        orbit2Material.blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
        satelliteMat.blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
        dustMat.blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
        orbit1Material.opacity = isDark ? 0.32 : 0.42;
        orbit2Material.opacity = isDark ? 0.22 : 0.35;
        dustMat.opacity = isDark ? 0.45 : 0.6;
        waveMaterial.needsUpdate = true;
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Viewport IntersectionObserver to pause when hero is offscreen
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(container);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      waveUniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 1.75);
    };
    window.addEventListener('resize', handleResize);

    // Clock & RAF Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return; // 0% CPU consumption when user is scrolled away!

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth lerp mouse tracking for fluid organic parallax
        targetMouse.x += (mouse.x - targetMouse.x) * 0.045;
        targetMouse.y += (mouse.y - targetMouse.y) * 0.045;
        targetScrollY += (scrollY - targetScrollY) * 0.06;

        // Wave uniform updates
        waveUniforms.uTime.value = elapsedTime;
        waveUniforms.uMouse.value.set(targetMouse.x, targetMouse.y);

        // Subtle gentle tilt on master group with mouse
        masterGroup.rotation.y = targetMouse.x * 0.06;
        masterGroup.rotation.x = -targetMouse.y * 0.04;
        // Subtle depth transition on scroll
        masterGroup.position.y = -targetScrollY * 0.025;

        // Animate Orbiting Satellites along curves
        const satArray = satelliteGeo.attributes.position.array as Float32Array;
        
        // Satellite 1 on Orbit 1
        const t1 = (elapsedTime * 0.22) % 1;
        const p1 = orbit1Curve.getPoint(t1);
        const v1 = new THREE.Vector3(p1.x, p1.y, 0).applyEuler(orbit1Line.rotation);
        satArray[0] = v1.x;
        satArray[1] = v1.y;
        satArray[2] = v1.z;

        // Satellite 2 on Orbit 1 (opposite phase)
        const t2 = (elapsedTime * 0.22 + 0.5) % 1;
        const p2 = orbit1Curve.getPoint(t2);
        const v2 = new THREE.Vector3(p2.x, p2.y, 0).applyEuler(orbit1Line.rotation);
        satArray[3] = v2.x;
        satArray[4] = v2.y;
        satArray[5] = v2.z;

        if (numSatellites > 2) {
          // Satellite 3 on Orbit 2
          const t3 = (elapsedTime * 0.16 + 0.25) % 1;
          const p3 = orbit2Curve.getPoint(t3);
          const v3 = new THREE.Vector3(p3.x, p3.y, 0).applyEuler(orbit2Line.rotation);
          satArray[6] = v3.x;
          satArray[7] = v3.y;
          satArray[8] = v3.z;

          // Satellite 4 on Orbit 2 (harmonic)
          const t4 = (elapsedTime * 0.16 + 0.75) % 1;
          const p4 = orbit2Curve.getPoint(t4);
          const v4 = new THREE.Vector3(p4.x, p4.y, 0).applyEuler(orbit2Line.rotation);
          satArray[9] = v4.x;
          satArray[10] = v4.y;
          satArray[11] = v4.z;
        }

        satelliteGeo.attributes.position.needsUpdate = true;

        // Ambient dust gentle drift
        const dustArr = dustGeo.attributes.position.array as Float32Array;
        for (let d = 0; d < dustCount; d++) {
          dustArr[d * 3 + 1] += Math.sin(elapsedTime * 0.4 + d) * 0.02;
          dustArr[d * 3] += Math.cos(elapsedTime * 0.3 + d) * 0.015;
        }
        dustGeo.attributes.position.needsUpdate = true;

        // Orbital rings slow cosmic rotation
        orbit1Line.rotation.z += 0.001;
        orbit2Line.rotation.z -= 0.0008;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Complete Teardown & Resource Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      visibilityObserver.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Memory leak prevention
      waveGeometry.dispose();
      waveMaterial.dispose();
      orbit1Geometry.dispose();
      orbit1Material.dispose();
      orbit2Geometry.dispose();
      orbit2Material.dispose();
      satelliteGeo.dispose();
      satelliteMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      glowTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-[5] overflow-hidden"
    />
  );
}
