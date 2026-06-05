/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompanyInfo } from '../types';
import { ArrowDown, CheckCircle2, Shield } from 'lucide-react';

interface HeroProps {
  company: CompanyInfo;
  appCount: number;
}

export function Hero({ company, appCount }: HeroProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <div className="bg-vibrant-cyan border-4 border-black p-8 sm:p-12 md:p-16 neo-shadow relative overflow-hidden">
        
        {/* Dynamic rotated neo-brutalist shapes from the design system */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-vibrant-yellow border-4 border-black rotate-12 pointer-events-none"></div>
        <div className="absolute left-1/2 bottom-0 w-24 h-24 bg-black opacity-10 pointer-events-none rotate-45"></div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-black text-white font-mono text-[10px] sm:text-xs uppercase px-3 py-1.5 font-bold mb-6 border-b-2 border-r-2 border-vibrant-yellow">
            <Shield className="w-4.5 h-4.5 text-vibrant-yellow" id="icon-shield-verified" />
            <span>Google Play Offizieller Entwickler-Verify</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-tight text-black mb-6 uppercase tracking-tight">
            {company.visionTitle}
          </h2>

          <p className="text-sm sm:text-lg font-mono font-bold uppercase tracking-wider bg-white inline-block px-2 py-1 border-2 border-black mb-8 select-all text-black">
            Präzision. Struktur. Innovation.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-sans text-zinc-950 font-medium mb-10 leading-relaxed max-w-3xl">
            {company.visionSubtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#apps" 
              className="bg-vibrant-red text-white hover:bg-black border-4 border-black py-3 px-6 text-sm sm:text-base font-mono font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 shrink-0"
            >
              <span>APPLICATIONS ANSEHEN ({appCount})</span>
              <ArrowDown className="w-5 h-5 text-white" id="hero-arrow" />
            </a>
            <a 
              href="#impressum" 
              className="bg-white text-black hover:bg-zinc-100 border-4 border-black py-3 px-6 text-sm sm:text-base font-mono font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              KONTAKTDATEN (FOOTER)
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t-2 border-black/30 flex flex-col md:flex-row gap-6 md:gap-12 text-xs sm:text-sm text-zinc-950 font-mono">
            <div className="flex items-center gap-2.5 font-bold">
              <CheckCircle2 className="w-5 h-5 text-black shrink-0" id="hero-check-1" />
              <span>100% Offline-Betrieb & Datensparsamkeit</span>
            </div>
            <div className="flex items-center gap-2.5 font-bold">
              <CheckCircle2 className="w-5 h-5 text-black shrink-0" id="hero-check-2" />
              <span>Zertifiziert & entwickelt in {company.country}</span>
            </div>
            <div className="flex items-center gap-2.5 font-bold">
              <CheckCircle2 className="w-5 h-5 text-black shrink-0" id="hero-check-3" />
              <span>Konform mit Google Play Richtlinien</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
