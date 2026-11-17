import React from 'react';
import { Link } from '@/i18n/routing';
import { Home } from 'lucide-react';

export default function LocaleNotFound() {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="text-7xl font-extrabold text-[#00E5F0] drop-shadow-[0_0_25px_rgba(0,229,240,0.5)]">
          404
        </div>
        <h1 className="text-2xl font-bold">Opportunity or Page Not Found</h1>
        <p className="text-sm text-[#AEB8C2]">
          The page or recruitment resource you requested could not be located.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-colors"
          >
            <Home className="w-4 h-4 text-black" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

