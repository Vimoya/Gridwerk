/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AppInfo } from '../types';
import { AppIcon } from './AppIcon';
import { ChevronDown, ChevronUp, ExternalLink, ShieldCheck, Download, Code } from 'lucide-react';

interface AppsGridProps {
  apps: AppInfo[];
}

export function AppsGrid({ apps }: AppsGridProps) {
  const [expandedAppId, setExpandedAppId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedAppId === id) {
      setExpandedAppId(null);
    } else {
      setExpandedAppId(id);
    }
  };

  return (
    <section id="apps" className="max-w-6xl mx-auto px-4 py-16 border-t-4 border-black">
      {/* Brutalist Section Header */}
      <div className="mb-12">
        <span className="inline-block bg-vibrant-red border-2 border-black text-white text-xs font-mono font-bold uppercase px-3 py-1 mb-3.5 shadow-sm">
          Produkt-Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-black tracking-tight leading-none uppercase">
          Unsere Apps im Google Play Store
        </h2>
        <div className="h-1 w-32 bg-black mt-4 mb-4"></div>
        <p className="font-sans text-zinc-800 text-sm sm:text-base max-w-2xl leading-relaxed">
          Klicken Sie auf eine beliebige Kachel, um die detaillierten App-Features, Release-Logs und Systemspezifikationen anzuzeigen.
        </p>
      </div>

      {/* Grid Layout with Vibrant alternate backgrounds */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app, index) => {
          const isExpanded = expandedAppId === app.id;
          
          // Mimic alternate style from theme:
          // Index 1 (2nd card) = yellow bg; Index 0 / 2 = white bg
          const isYellowCard = index % 3 === 1;
          const bgClass = isYellowCard ? 'bg-vibrant-yellow' : 'bg-white';
          const iconBgClass = isYellowCard ? 'bg-white' : index % 3 === 0 ? 'bg-vibrant-red text-white' : 'bg-black text-white';

          return (
            <div 
              key={app.id} 
              id={`app-card-${app.id}`}
              className={`${bgClass} border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 flex flex-col justify-between`}
            >
              <div>
                {/* Card Top: Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`${iconBgClass} border-2 border-black p-3.5 inline-block text-black`}>
                    <AppIcon name={app.iconName} className="w-7 h-7 text-current" />
                  </div>
                  
                  <span className="border-2 border-black bg-white px-2.5 py-1 text-xs font-mono font-bold text-black shadow-sm">
                    {app.status}
                  </span>
                </div>

                {/* Card Brand Header */}
                <h3 className="text-2xl font-display font-black text-black mb-1.5 uppercase tracking-tight">{app.name}</h3>
                
                {/* Dev Package Identifier */}
                <div className="flex items-center gap-1 bg-white border-2 border-black py-1 px-2 mb-4 max-w-max select-all cursor-pointer shadow-sm">
                  <Code className="w-3.5 h-3.5 text-zinc-950" id={`code-icon-${app.id}`} />
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-zinc-950 truncate max-w-[200px]" title="Packet-ID für Google Console">
                    {app.packageName}
                  </span>
                </div>

                <p className="text-zinc-900 font-sans text-sm mb-4 leading-relaxed font-semibold">
                  {app.description}
                </p>

                {/* Sub-tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {app.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-white border-2 border-black text-black px-2 py-0.5 text-[10px] sm:text-xs font-mono font-bold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom detail action block */}
              <div className="border-t-2 border-black pt-4">
                {/* Technical Meta metrics */}
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 text-[11px] sm:text-xs font-mono text-zinc-900 mb-4 bg-white border-2 border-black p-2.5">
                  <div className="text-zinc-600 font-bold">Kategorie:</div>
                  <div className="font-extrabold text-black text-right">{app.category}</div>
                  
                  <div className="text-zinc-600 font-bold">Version:</div>
                  <div className="font-extrabold text-black text-right">{app.version}</div>
                  
                  <div className="text-zinc-600 font-bold">Paketgröße:</div>
                  <div className="font-extrabold text-black text-right">{app.fileSize}</div>
                  
                  <div className="text-zinc-600 font-bold">Mind. OS:</div>
                  <div className="font-extrabold text-black text-right truncate" title={app.minAndroidVersion}>
                    {app.minAndroidVersion.split(' ')[0]} {app.minAndroidVersion.split(' ')[1] || ''}
                  </div>
                </div>

                {/* Extra Expandable Panel for Features */}
                {isExpanded && (
                  <div id={`features-panel-${app.id}`} className="mb-4 bg-white border-2 border-black p-3 shadow-sm">
                    <p className="text-[10px] font-mono font-bold uppercase text-zinc-900 mb-2 border-b border-black/20 pb-1 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-vibrant-red" id={`feature-shield-${app.id}`} />
                      Zertifiziertes Feature-Verzeichnis
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-950 font-sans font-bold">
                      {app.features.map((feat, i) => (
                        <li key={i} className="leading-tight pl-0.5">
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Google Play Compliance link */}
                    <div className="mt-3.5 pt-2.5 border-t-2 border-dashed border-black/30 flex flex-col gap-1.5 bg-zinc-50 p-2 border border-black/15">
                      <span className="text-[10px] font-mono font-bold uppercase text-zinc-500">Google Play Console Link:</span>
                      <a
                        href="#datenschutz-macherwerk"
                        onClick={() => {
                          window.location.hash = '';
                          setTimeout(() => {
                            window.location.hash = '#datenschutz-macherwerk';
                          }, 10);
                        }}
                        className="bg-vibrant-cyan hover:bg-black border-2 border-black text-black hover:text-vibrant-cyan px-2.5 py-1.5 text-center font-mono font-black text-[11px] uppercase tracking-wider cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                      >
                        App-Datenschutz (DSGVO)
                      </a>
                    </div>
                  </div>
                )}

                {/* Inline Interaction Block */}
                <div className="flex gap-2">
                  <button
                    id={`btn-expand-${app.id}`}
                    onClick={() => toggleExpand(app.id)}
                    className="flex-1 border-2 border-black bg-white hover:bg-zinc-200 py-2.5 px-3 font-mono font-bold text-xs text-black cursor-pointer flex items-center justify-center gap-1 transition-all"
                  >
                    <span>{isExpanded ? 'SCHLIESSEN' : 'FEATURES'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-black" id={`chevron-up-${app.id}`} /> : <ChevronDown className="w-4 h-4 text-black" id={`chevron-down-${app.id}`} />}
                  </button>

                  <a 
                    href="#impressum"
                    className="flex-1 text-center bg-vibrant-red text-white hover:bg-black hover:text-white border-2 border-black py-2.5 px-2 font-mono font-bold text-xs shadow-sm active:translate-y-0.5 transition-all flex items-center justify-center gap-1"
                  >
                    <span>PLAY STORE</span>
                    <ExternalLink className="w-3.5 h-3.5 text-current shrink-0" id={`play-link-${app.id}`} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
