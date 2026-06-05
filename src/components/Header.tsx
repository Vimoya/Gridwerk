/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompanyInfo } from '../types';
import { AppIcon } from './AppIcon';
import { Layers } from 'lucide-react';

interface HeaderProps {
  company: CompanyInfo;
}

export function Header({ company }: HeaderProps) {
  return (
    <header className="sticky top-0 bg-white border-b-4 border-black z-40 px-3 py-3 sm:px-8 sm:py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        {/* Responsive Logo Badge in italic black bold */}
        <a 
          href="#" 
          className="text-2xl sm:text-3xl md:text-4xl font-display font-black tracking-tighter uppercase italic text-black hover:text-vibrant-red transition-all select-none"
        >
          {company.name.toUpperCase()}
        </a>

        {/* Navigation block - optimized flex wrap and spacing */}
        <nav className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-1.5 xs:gap-2 sm:gap-4 font-bold uppercase text-xs sm:text-sm md:text-base">
          <a 
            href="#apps" 
            className="hover:bg-vibrant-red hover:text-white px-2.5 py-1 sm:px-3 sm:py-1 border-2 border-transparent hover:border-black transition-all text-black whitespace-nowrap"
          >
            Start & Apps
          </a>
          <span className="text-zinc-300 md:hidden select-none">|</span>
          <a 
            href="#impressum" 
            className="hover:bg-vibrant-red hover:text-white px-2.5 py-1 sm:px-3 sm:py-1 border-2 border-transparent hover:border-black transition-all text-black whitespace-nowrap"
          >
            Impressum
          </a>
          <span className="text-zinc-300 md:hidden select-none">|</span>
          <a 
            href="#datenschutz" 
            className="hover:bg-vibrant-red hover:text-white px-2.5 py-1 sm:px-3 sm:py-1 border-2 border-transparent hover:border-black transition-all text-black whitespace-nowrap"
          >
            Datenschutz
          </a>
        </nav>
      </div>
    </header>
  );
}
