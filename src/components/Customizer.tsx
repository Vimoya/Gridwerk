/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CompanyInfo, AppInfo, PrivacyPolicyConfig } from '../types';
import { Settings, X, Save, RotateCcw, Copy, Check, Info } from 'lucide-react';

interface CustomizerProps {
  company: CompanyInfo;
  onUpdateCompany: (info: CompanyInfo) => void;
  privacy: PrivacyPolicyConfig;
  onUpdatePrivacy: (config: PrivacyPolicyConfig) => void;
  apps: AppInfo[];
  onReset: () => void;
}

export function Customizer({
  company,
  onUpdateCompany,
  privacy,
  onUpdatePrivacy,
  apps,
  onReset
}: CustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'company' | 'content' | 'export'>('company');
  const [copied, setCopied] = useState(false);

  const handleCompanyChange = (key: keyof CompanyInfo, value: string) => {
    onUpdateCompany({
      ...company,
      [key]: value
    });
  };

  const handlePrivacyChange = (key: keyof PrivacyPolicyConfig, value: boolean | string) => {
    onUpdatePrivacy({
      ...privacy,
      [key]: value
    });
  };

  const generateStandaloneHTML = () => {
    // Generiert ein schönes, eigenständiges Neo-Brutalist HTML Dokument mit Tailwind CDN
    const appsHTML = apps.map(app => `
      <!-- App Card: ${app.name} -->
      <div class="bg-white border-3 border-black p-6 rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div>
          <div class="flex items-start justify-between mb-4">
            <div class="bg-amber-400 border-3 border-black p-3 inline-block">
              <!-- Inline Icon Simulation -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-black"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
            </div>
            <span class="border-2 border-black px-2.5 py-1 text-xs font-mono font-bold bg-[#E0E7FF] text-black">
              ${app.status}
            </span>
          </div>
          <h3 class="text-2xl font-display font-bold text-black mb-1">${app.name}</h3>
          <p class="text-xs font-mono text-zinc-500 mb-3">${app.packageName}</p>
          <p class="text-zinc-700 font-sans text-sm mb-4 leading-relaxed">${app.description}</p>
          
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${app.tags.map(t => `<span class="bg-zinc-100 border-2 border-black text-black px-2 py-0.5 text-xs font-mono font-medium">${t}</span>`).join('')}
          </div>
        </div>

        <div class="border-t-2 border-black pt-4 mt-2">
          <div class="grid grid-cols-2 gap-y-1 gap-x-2 text-xs font-mono text-zinc-600 mb-4">
            <div>Kategorie:</div><div class="font-bold text-black">${app.category}</div>
            <div>Version:</div><div class="font-bold text-black">${app.version}</div>
            <div>Größe:</div><div class="font-bold text-black">${app.fileSize}</div>
            <div>Min. OS:</div><div class="font-bold text-black shrink-0 truncate">${app.minAndroidVersion.split(' ')[0]} ${app.minAndroidVersion.split(' ')[1] || ''}</div>
          </div>
          <a href="#" class="w-full text-center block bg-amber-400 hover:bg-amber-300 active:translate-y-0.5 border-2 border-black py-2 px-3 text-sm font-mono font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            Im Play Store ansehen
          </a>
        </div>
      </div>
    `).join('');

    return `<!DOCTYPE html>
<html lang="de" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${company.name} - Offizielle Website & Apps</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            display: ['"Space Grotesk"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    }
  </script>
  <style>
    .neo-border { border: 3px solid #000000; }
    .neo-shadow { box-shadow: 6px 6px 0px 0px #000000; }
    .neo-shadow-sm { box-shadow: 3px 3px 0px 0px #000000; }
    .neo-shadow-lg { box-shadow: 10px 10px 0px 0px #000000; }
    .neo-grid-pattern {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    }
  </style>
</head>
<body class="bg-[#F8F9FA] text-black font-sans min-h-screen neo-grid-pattern antialiased">

  <!-- Header Nav -->
  <header class="sticky top-0 bg-[#F8F9FA] border-b-3 border-black z-40 px-4 py-3 sm:px-8">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <a href="#" class="text-3xl font-display font-black tracking-tight border-3 border-black bg-emerald-400 py-1.5 px-3 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all">
        ${company.name.toUpperCase()}
      </a>
      <nav class="flex items-center gap-3">
        <a href="#apps" class="border-2 border-black bg-white px-4 py-1.5 font-mono font-bold text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 transition-all">Apps</a>
        <a href="#impressum" class="border-2 border-black bg-white px-4 py-1.5 font-mono font-bold text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 transition-all">Impressum</a>
        <a href="#datenschutz" class="border-2 border-black bg-white px-4 py-1.5 font-mono font-bold text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 transition-all">Datenschutz</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-6xl mx-auto px-4 py-12 sm:py-20">
    <div class="bg-sky-400 border-3 border-black p-8 sm:p-12 neo-shadow relative overflow-hidden">
      <div class="absolute -right-12 -bottom-12 w-48 h-48 bg-sky-200 border-3 border-black rounded-full opacity-45 pointer-events-none"></div>
      <div class="relative z-10 max-w-4xl">
        <span class="bg-black text-white font-mono text-xs uppercase px-2.5 py-1 font-bold inline-block mb-4">
          Google Play Developer Presence
        </span>
        <h1 class="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-black mb-6 leading-none">
          ${company.visionTitle}
        </h1>
        <p class="text-lg sm:text-xl font-sans text-zinc-900 border-l-4 border-black pl-5 mb-8 leading-relaxed max-w-3xl">
          ${company.visionSubtitle}
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#apps" class="bg-black text-white hover:bg-zinc-800 border-3 border-black py-3 px-6 text-base font-mono font-bold shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(251,191,36,1)] transition-all">
            Unsere Apps ansehen (${apps.length})
          </a>
          <a href="#kontakt" class="bg-white text-black hover:bg-zinc-100 border-3 border-black py-3 px-6 text-base font-mono font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
            Direkt-Kontakt
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Apps Grid Section -->
  <section id="apps" class="max-w-6xl mx-auto px-4 py-12 border-t-3 border-black">
    <div class="mb-10">
      <span class="inline-block bg-[#F472B6] border-2 border-black text-black text-xs font-mono font-bold uppercase px-2.5 py-1 mb-2">
        App-Portfolio
      </span>
      <h2 class="text-4xl font-display font-black text-black">Veröffentlichte Anwendungen</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${appsHTML}
    </div>
  </section>

  <!-- Legal & Impressum, Contact, Privacy Sections -->
  <footer id="datenschutz" class="bg-zinc-900 text-white mt-16 border-t-3 border-black py-16 px-4">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      <!-- Info block -->
      <div class="lg:col-span-4">
        <div class="border-3 border-white bg-black p-6 inline-block neo-shadow-sm mb-6">
          <span class="text-3xl font-display font-black text-[#60A5FA] tracking-tight">
            ${company.name.toUpperCase()}
          </span>
        </div>
        <p class="text-zinc-400 font-sans text-sm mb-6 leading-relaxed">
          ${company.description}
        </p>
        <div class="space-y-3 font-mono text-xs">
          <div class="flex items-center gap-3">
            <span class="bg-[#27272A] border border-zinc-700 p-2 text-white">@</span>
            <span>${company.email}</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-[#27272A] border border-zinc-700 p-2 text-white">#</span>
            <span>${company.phone}</span>
          </div>
        </div>
      </div>

      <!-- Impressum Block -->
      <div id="impressum" class="lg:col-span-4 border-l-0 lg:border-l-2 lg:border-zinc-800 lg:pl-10 space-y-6">
        <h3 class="text-xl font-display font-bold text-emerald-400 border-b border-zinc-700 pb-2 flex items-center gap-2">
          Impressum
        </h3>
        <div class="space-y-4 font-sans text-sm text-zinc-300">
          <div>
            <p class="font-bold text-white mb-1">Angaben gemäß § 5 TMG:</p>
            <p>${company.ownerName}</p>
            <p>${company.name}</p>
            <p>${company.street}</p>
            <p>${company.zipCode} ${company.city}</p>
            <p>${company.country}</p>
          </div>
          <div>
            <p class="font-bold text-white mb-1">Kontakt:</p>
            <p>E-Mail: <span class="font-mono text-white select-all text-xs border-b border-zinc-700">${company.email}</span></p>
            <p>Telefon: <span class="font-mono text-zinc-300">${company.phone}</span></p>
          </div>
          ${company.vatId && company.vatId !== 'N/A' ? `
          <div>
            <p class="font-bold text-white mb-1">Umsatzsteuer-Identifikationalnummer:</p>
            <p class="font-mono text-xs text-zinc-300">USt-IdNr. gemäß § 27 a Umsatzsteuergesetz: ${company.vatId}</p>
          </div>
          ` : ''}
          ${company.registerNumber && company.registerNumber !== 'N/A' ? `
          <div>
            <p class="font-bold text-white mb-1">Handelsregister:</p>
            <p class="text-zinc-300">${company.registerCourt}</p>
            <p class="font-mono text-xs text-zinc-300">Registernummer: ${company.registerNumber}</p>
          </div>
          ` : ''}
          <div class="pt-2 text-xs text-zinc-500">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: ${company.ownerName}, Anschrift wie oben.
          </div>
        </div>
      </div>

      <!-- Privacy policy Block -->
      <div class="lg:col-span-4 border-l-0 lg:border-l-2 lg:border-zinc-800 lg:pl-10 space-y-6">
        <h3 class="text-xl font-display font-bold text-[#F472B6] border-b border-zinc-700 pb-2">
          Datenschutzerklärung
        </h3>
        <div class="space-y-3 font-sans text-xs text-zinc-400 leading-relaxed">
          <p class="font-bold text-zinc-200">letzte Aktualisierung: ${privacy.lastUpdated}</p>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p class="font-semibold text-zinc-200">1. Datenerfassung auf unserer Website</p>
          <p>
            ${privacy.collectsPersonalData 
              ? 'Auf dieser Website werden personenbezogene Daten (z. B. via Kontaktformular) erfasst. Diese dienen der Kontaktaufnahme.' 
              : 'Diese Webseite dient lediglich als passive Informations- und Entwicklerpräsenz. Es werden durch uns keinerlei personenbezogene Daten erhoben.'}
          </p>
          <p class="font-semibold text-zinc-200">2. Cookies und Tracking</p>
          <p>
            ${privacy.usesCookies 
              ? 'Wir verwenden Cookies, um die Benutzerfreundlichkeit zu erhöhen.' 
              : 'Wir verzichten auf dieser Webseite gänzlich auf Cookies und Tracking-Tools. Ihre Privatsphäre wird maximal geschützt.'}
          </p>
          <p class="font-semibold text-zinc-200">3. Google Play Store & Apps Datenerfassung</p>
          <p>
            Unsere veröffentlichten Anwendungen im Google Play Store respektieren Ihre Privatsphäre. Etwaige anwendungsbezogene Berechtigungen werden separat in der Datenschutzerklärung jeder einzelnen App erläutert und erst bei Notwendigkeit angefordert.
          </p>
          <p class="text-[10px] text-zinc-600 mt-4 border-t border-zinc-800 pt-3">
            Erstellt für Google Play Console Verifizierungszwecke. Gridwerk © 2026.
          </p>
        </div>
      </div>
    </div>
  </footer>

</body>
</html>`;
  };

  const handleCopyCode = () => {
    const code = generateStandaloneHTML();
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error("Copy failed", err);
      });
  };

  return (
    <>
      {/* Floating Config Trigger Button */}
      <button
        id="btn-toggle-customizer"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-vibrant-yellow hover:bg-white font-mono font-bold text-xs sm:text-sm border-4 border-black py-3 px-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer select-none"
        title="Unternehmen-Daten bearbeiten"
      >
        <Settings className="w-5 h-5 animate-spin-slow text-black" id="icon-customizer-gear" />
        <span>DATEN EDITIEREN</span>
      </button>

      {/* Slide-over panel */}
      {isOpen && (
        <div id="customizer-overlay" className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div
            id="customizer-panel"
            className="w-full max-w-xl bg-white border-l-4 border-black h-full flex flex-col justify-between shadow-2xl relative"
          >
            {/* Header */}
            <div className="bg-vibrant-cyan px-6 py-4 border-b-4 border-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-black" id="panel-settings-icon" />
                <h3 className="text-xl font-display font-black text-black uppercase tracking-tight">
                  Unternehmens-Editor
                </h3>
              </div>
              <button
                id="btn-close-customizer"
                onClick={() => setIsOpen(false)}
                className="bg-black text-white hover:bg-vibrant-red border-2 border-black p-1 cursor-pointer"
              >
                <X className="w-5 h-5" id="panel-close-icon" />
              </button>
            </div>

            {/* Editor Tabs Nav */}
            <div className="flex border-b-4 border-black font-mono text-xs">
              <button
                id="tab-company"
                onClick={() => setActiveTab('company')}
                className={`flex-1 py-3 text-center border-r-4 border-black font-bold outline-none uppercase transition-colors ${
                  activeTab === 'company' ? 'bg-black text-vibrant-yellow font-extrabold' : 'bg-white text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                1. Firmendaten
              </button>
              <button
                id="tab-content"
                onClick={() => setActiveTab('content')}
                className={`flex-1 py-3 text-center border-r-3 border-black font-bold outline-none uppercase transition-colors ${
                  activeTab === 'content' ? 'bg-black text-vibrant-cyan font-extrabold' : 'bg-white text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                2. Texte & Vision
              </button>
              <button
                id="tab-export"
                onClick={() => setActiveTab('export')}
                className={`flex-1 py-3 text-center font-bold outline-none uppercase transition-colors ${
                  activeTab === 'export' ? 'bg-vibrant-red text-white border-l-0' : 'bg-white text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                ★ HTML export
              </button>
            </div>

            {/* Scrollable Content Fields */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {activeTab === 'company' && (
                <div id="tab-content-company" className="space-y-4">
                  <div className="bg-vibrant-cyan/20 border-2 border-black p-3.5 mb-4 text-xs font-mono leading-relaxed text-zinc-900 font-bold">
                    <div className="font-black flex items-center gap-1.5 mb-1 text-black">
                      <Info className="w-4 h-4 shrink-0 text-vibrant-red" id="info-verify-icon" />
                      Google Play Verifizierung:
                    </div>
                    Die Kontaktdaten hier müssen exakt mit den Angaben in Ihrer Google Play Console (Entwicklerprofil) übereinstimmen. Google prüft diese Übereinstimmung beim Einreichen!
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-bold uppercase text-black">Unternehmensname (oder Name des Inhabers):</label>
                    <input
                      type="text"
                      value={company.name}
                      onChange={(e) => handleCompanyChange('name', e.target.value)}
                      className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                    />
                  </div>

                  {/* Owner (Inhaber) */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-bold uppercase text-black">Inhaber / Vertreten durch:</label>
                    <input
                      type="text"
                      value={company.ownerName}
                      onChange={(e) => handleCompanyChange('ownerName', e.target.value)}
                      className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                    />
                  </div>

                  {/* Legal Form */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-bold uppercase text-black">Rechtsform:</label>
                    <select
                      value={company.legalForm}
                      onChange={(e) => handleCompanyChange('legalForm', e.target.value)}
                      className="w-full font-mono text-sm bg-white border-2 border-black p-2.5 outline-none font-bold"
                    >
                      <option value="Einzelunternehmen">Einzelunternehmen</option>
                      <option value="GmbH">GmbH (Gesellschaft mit beschränkter Haftung)</option>
                      <option value="UG (haftungsbeschränkt)">UG (haftungsbeschränkt)</option>
                      <option value="GbR">GbR (Gesellschaft bürgerlichen Rechts)</option>
                      <option value="AG">AG (Aktiengesellschaft)</option>
                    </select>
                  </div>

                  {/* Address Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-mono font-bold uppercase text-black">Straße & Hausnummer:</label>
                      <input
                        type="text"
                        value={company.street}
                        onChange={(e) => handleCompanyChange('street', e.target.value)}
                        className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-mono font-bold uppercase text-black">Postleitzahl:</label>
                      <input
                        type="text"
                        value={company.zipCode}
                        onChange={(e) => handleCompanyChange('zipCode', e.target.value)}
                        className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-mono font-bold uppercase text-black">Stadt:</label>
                      <input
                        type="text"
                        value={company.city}
                        onChange={(e) => handleCompanyChange('city', e.target.value)}
                        className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-mono font-bold uppercase text-black">Land:</label>
                      <input
                        type="text"
                        value={company.country}
                        onChange={(e) => handleCompanyChange('country', e.target.value)}
                        className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                      />
                    </div>
                  </div>

                  {/* Support Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-mono font-bold uppercase text-black">E-Mail (Google Play Support):</label>
                      <input
                        type="email"
                        value={company.email}
                        onChange={(e) => handleCompanyChange('email', e.target.value)}
                        className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-mono font-bold uppercase text-black">Telefonnummer:</label>
                      <input
                        type="text"
                        value={company.phone}
                        onChange={(e) => handleCompanyChange('phone', e.target.value)}
                        className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                      />
                    </div>
                  </div>

                  {/* USt-ID Nr */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-bold uppercase text-black">Umsatzsteuer-ID (USt-IdNr.) (Optional):</label>
                    <input
                      type="text"
                      value={company.vatId}
                      onChange={(e) => handleCompanyChange('vatId', e.target.value)}
                      placeholder="e.g. DE123456789 (falls nicht vorhanden, freilassen)"
                      className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                    />
                  </div>

                  {/* Register court */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-mono font-bold uppercase text-black">Registergericht (Optional):</label>
                      <input
                        type="text"
                        value={company.registerCourt}
                        onChange={(e) => handleCompanyChange('registerCourt', e.target.value)}
                        placeholder="Amtsgericht Musterstadt"
                        className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-mono font-bold uppercase text-black">Registernummer (Optional):</label>
                      <input
                        type="text"
                        value={company.registerNumber}
                        onChange={(e) => handleCompanyChange('registerNumber', e.target.value)}
                        placeholder="HRB 12345"
                        className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'content' && (
                <div id="tab-content-text" className="space-y-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-bold uppercase text-black">Hero Slogan / Vision:</label>
                    <textarea
                      rows={3}
                      value={company.visionTitle}
                      onChange={(e) => handleCompanyChange('visionTitle', e.target.value)}
                      className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold resize-y"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-bold uppercase text-black">Vision Untertitel:</label>
                    <textarea
                      rows={4}
                      value={company.visionSubtitle}
                      onChange={(e) => handleCompanyChange('visionSubtitle', e.target.value)}
                      className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold resize-y"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-bold uppercase text-black">Studio-Beschreibung (Footerbereich):</label>
                    <textarea
                      rows={4}
                      value={company.description}
                      onChange={(e) => handleCompanyChange('description', e.target.value)}
                      className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none focus:bg-vibrant-cyan/20 font-semibold resize-y"
                    />
                  </div>

                  {/* Privacy settings */}
                  <div className="border-t-2 border-dashed border-zinc-400 pt-4 space-y-3">
                    <h4 className="text-sm font-display font-bold text-black uppercase tracking-tight">
                      Datenschutz Einstellungen (Generator)
                    </h4>
                    <div className="space-y-2 text-xs font-mono">
                      <label className="flex items-center gap-3 bg-white p-2 border-2 border-black cursor-pointer">
                        <input
                          type="checkbox"
                          checked={privacy.collectsPersonalData}
                          onChange={(e) => handlePrivacyChange('collectsPersonalData', e.target.checked)}
                          className="accent-black w-4 h-4 border-2 border-black"
                        />
                        <span className="font-bold text-black">Website sammelt persönliche Daten (Kontaktformulare, etc.)</span>
                      </label>

                      <label className="flex items-center gap-3 bg-white p-2 border-2 border-black cursor-pointer">
                        <input
                          type="checkbox"
                          checked={privacy.usesCookies}
                          onChange={(e) => handlePrivacyChange('usesCookies', e.target.checked)}
                          className="accent-black w-4 h-4"
                        />
                        <span className="font-bold text-black">Website nutzt Cookies & Tracking-Skripte</span>
                      </label>
                    </div>

                    <div className="space-y-1 pt-1">
                      <label className="block text-xs font-mono font-bold uppercase text-black">Stand der Datenschutzerklärung:</label>
                      <input
                        type="text"
                        value={privacy.lastUpdated}
                        onChange={(e) => handlePrivacyChange('lastUpdated', e.target.value)}
                        className="w-full font-sans text-sm bg-white border-2 border-black p-2.5 outline-none font-semibold"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'export' && (
                <div id="tab-content-export" className="space-y-4">
                  <div className="bg-vibrant-cyan/25 border-2 border-black p-4 text-xs font-mono leading-relaxed text-zinc-900 font-bold">
                    <div className="font-black uppercase text-sm mb-1 text-black">
                      HTML-Generator für Ihren Webspace!
                    </div>
                    Sind Sie bereit für Ihre Web-Veröffentlichung? Klicken Sie auf den Button unten, um den kompletten, einsatzbereiten Brutalist-HTML-Code zu generieren und zu kopieren. 
                    <br/><br/>
                    Diesen Code können Sie direkt als <code className="bg-vibrant-yellow border border-black px-1.5 py-0.5 font-black text-black">index.html</code> auf Ihrem Server ablegen, um die Google Play Verifizierung zu bestehen!
                  </div>

                  <button
                    id="btn-copy-html-export"
                    onClick={handleCopyCode}
                    className="w-full text-center bg-vibrant-cyan hover:bg-vibrant-yellow border-4 border-black text-black font-mono font-black py-3.5 px-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copied ? <Check className="w-5 h-5 text-black" id="icon-check-copied" /> : <Copy className="w-5 h-5 text-black" id="icon-copy-html" />}
                    <span>{copied ? "CODE IN ZWISCHENABLAGE KOPIERT!" : "VOLLSTÄNDIGES HTML KOPIEREN"}</span>
                  </button>

                  <div className="space-y-1.5 pt-2">
                    <label className="block text-xs font-mono font-bold uppercase text-black">HTML-Vorschau (erste 50 Zeilen):</label>
                    <textarea
                      readOnly
                      rows={12}
                      value={generateStandaloneHTML()}
                      className="w-full font-mono text-[10px] text-zinc-400 bg-zinc-950 border-2 border-black p-3.5 outline-none select-all"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Panel Actions */}
            <div className="bg-white p-4 border-t-4 border-black flex gap-3">
              <button
                id="btn-reset-customizer"
                onClick={onReset}
                className="flex-1 whitespace-nowrap bg-vibrant-gray-light hover:bg-vibrant-gray-dark border-2 border-black font-mono font-bold py-2.5 px-3 text-xs sm:text-sm text-zinc-900 flex items-center justify-center gap-1.5 transition-all outline-none cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" id="icon-reset-data" />
                <span>ZURÜCKSETZEN</span>
              </button>
              <button
                id="btn-save-customizer"
                onClick={() => setIsOpen(false)}
                className="flex-[2] bg-vibrant-yellow hover:bg-vibrant-cyan border-2 border-black font-mono font-bold py-2.5 px-3 text-xs sm:text-sm text-black flex items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all outline-none cursor-pointer"
              >
                <Save className="w-4 h-4 text-black" id="icon-save-data" />
                <span>SPEICHERN & SCHLIESSEN</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
