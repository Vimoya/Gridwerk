/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompanyInfo, PrivacyPolicyConfig } from '../types';
import { Mail, Phone, MapPin, Building2, User, HelpCircle, FileText, Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  company: CompanyInfo;
  privacy: PrivacyPolicyConfig;
}

export function Footer({ company, privacy }: FooterProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(company.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="bg-zinc-950 text-white border-t-4 border-black font-sans relative">
      {/* Visual Accent Strip */}
      <div className="h-3 bg-vibrant-red border-b-2 border-black"></div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Column 1: Studio Description */}
        <div className="lg:col-span-4 space-y-6" id="footer-studio-info">
          {/* Logo Badge */}
          <div className="border-3 border-white bg-black p-4.5 inline-block shadow-[6px_6px_0px_0px_rgba(0,240,255,1)]">
            <span className="text-2xl sm:text-3xl font-display font-black text-vibrant-cyan tracking-tighter uppercase italic select-none">
              {company.name.toUpperCase()}
            </span>
          </div>

          <p className="text-zinc-300 font-sans text-sm leading-relaxed">
            {company.description}
          </p>

          {/* Quick Support Widget */}
          <div className="border-3 border-black bg-zinc-900 p-4 space-y-3.5 shadow-sm">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 border-b border-zinc-800 pb-1.5">
              <HelpCircle className="w-4 h-4 text-vibrant-cyan" id="icon-footer-info" />
              Direkter Entwickler-Kontakt
            </h4>
            
            <div className="space-y-3 font-mono text-xs text-zinc-350">
              <div className="flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-vibrant-red" id="icon-footer-mail" />
                  <span className="truncate max-w-[200px] select-all font-bold">{company.email}</span>
                </div>
                <button
                  id="btn-copy-footer-email"
                  onClick={copyEmail}
                  className="bg-black hover:bg-zinc-800 border border-zinc-700 p-1 text-zinc-400 hover:text-white cursor-pointer"
                  title="E-Mail kopieren"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-vibrant-cyan" id="icon-verify-copied-email" /> : <Copy className="w-3.5 h-3.5" id="icon-copy-footer-email" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-vibrant-cyan" id="icon-footer-phone" />
                <span>{company.phone}</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-vibrant-yellow shrink-0 mt-0.5" id="icon-footer-map-pin" />
                <span>{company.street}, {company.zipCode} {company.city}, {company.country}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Legal Impressum § 5 TMG */}
        <div id="impressum" className="lg:col-span-4 border-t-2 md:border-t-0 lg:border-l-2 lg:border-zinc-800 lg:pl-10 space-y-6">
          <h3 className="text-xl font-display font-black text-vibrant-cyan border-b-2 border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-wide">
            <Building2 className="w-5 h-5 text-vibrant-cyan" id="icon-footer-building" />
            Impressum
          </h3>

          <div className="space-y-4 font-sans text-sm text-zinc-300">
            <div>
              <p className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Angaben gemäß § 5 TMG:</p>
              <p className="text-lg font-bold text-white leading-tight">{company.ownerName}</p>
              <p className="text-sm text-zinc-455 text-zinc-400">{company.name} ({company.legalForm})</p>
            </div>

            <div>
              <p className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Postanschrift:</p>
              <p className="underline decoration-2 decoration-vibrant-yellow underline-offset-4 inline-block">{company.street}</p>
              <p>{company.zipCode} {company.city}</p>
              <p className="font-semibold text-zinc-400">{company.country}</p>
            </div>

            <div>
              <p className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Rechtlicher Kontakt:</p>
              <p className="flex items-center gap-1.5 flex-wrap">
                E-Mail: 
                <span className="font-mono text-white text-xs select-all bg-zinc-900 border border-zinc-800 px-1.5 py-0.5">
                  {company.email}
                </span>
              </p>
              <p className="pt-0.5">Telefon: {company.phone}</p>
            </div>

            {company.vatId && company.vatId !== '' && company.vatId !== 'N/A' && (
              <div>
                <p className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Umsatzsteuer-ID:</p>
                <p className="font-mono text-xs text-zinc-350 bg-zinc-900/50 border border-zinc-850 p-2.5 leading-snug">
                  USt-IdNr. gemäß § 27a Gesetz: <span className="font-bold text-vibrant-cyan font-mono select-all">{company.vatId}</span>
                </p>
              </div>
            )}

            {company.registerNumber && company.registerNumber !== '' && company.registerNumber !== 'N/A' && (
              <div>
                <p className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Handelsregister:</p>
                <p className="text-sm text-zinc-300">{company.registerCourt}</p>
                <p className="font-mono text-xs text-zinc-400">Registernummer: {company.registerNumber}</p>
              </div>
            )}

            <div className="pt-2 text-[11px] text-zinc-500 border-t border-zinc-800 leading-snug">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: 
              <span className="text-zinc-450 font-semibold text-zinc-400"> {company.ownerName}</span>, Anschrift wie oben angegeben.
            </div>
          </div>
        </div>

        {/* Column 3: Privacy Regulation Datenschutzerklärung */}
        <div id="datenschutz" className="lg:col-span-4 border-t-2 lg:border-t-0 lg:border-l-2 lg:border-zinc-800 lg:pl-10 space-y-6">
          <h3 className="text-xl font-display font-black text-vibrant-yellow border-b-2 border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-wide">
            <FileText className="w-5 h-5 text-vibrant-yellow" id="icon-footer-privacy" />
            Datenschutz
          </h3>

          <div className="space-y-4 font-sans text-xs text-zinc-400 leading-relaxed">
            <div className="flex items-center justify-between border-2 border-zinc-800 pb-2 bg-zinc-900 p-2 shadow-sm">
              <span className="font-mono font-bold text-zinc-400">DSGVO-Status:</span>
              <span className="bg-emerald-950 border border-emerald-900 text-vibrant-cyan font-mono font-bold px-2 py-0.5 rounded-sm">
                AKTIV & PASSIV
              </span>
            </div>

            <p className="text-[11px]">
              <strong className="text-zinc-100 uppercase font-mono tracking-wider">letzte Aktualisierung:</strong> {privacy.lastUpdated}
            </p>

            <p>
              Als Entwicklerstudio legen wir höchsten Wert auf Datenschutz. Diese Datenschutzerklärung soll Sie über die Art, den Umfang und den Zweck der Erfassung personenbezogener Daten aufklären.
            </p>

            <p>
              <strong className="text-vibrant-cyan uppercase font-mono text-[10px] block mb-1">1. Datenerhebung der Webseite:</strong>
              {privacy.collectsPersonalData 
                ? "Bei Kontaktaufnahme (z.B. per E-Mail) werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen lokal verarbeitet." 
                : "Dieses Webportal dient rein der passiven Präsentation unseres Studios und des Verzeichnisses unserer Mobile-Anwendungen. Es werden beim Aufrufen dieses Portals keinerlei personenbezogenen Daten von uns erfasst."}
            </p>

            <p>
              <strong className="text-vibrant-yellow uppercase font-mono text-[10px] block mb-1">2. Cookies und Analyse-Tools:</strong>
              {privacy.usesCookies 
                ? "Wir setzen zur Gewährleistung der Barrierefreiheit und Analyse kleine Browser-Cookies ein. Es findet kein Profiling statt." 
                : "Wir verzichten auf dieser Repräsentationsseite vollständig auf HTTP-Cookies sowie auf Tracking-Tools. Es findet absolut kein Tracking Ihres Surfverhaltens statt."}
            </p>

            <p>
              <strong className="text-vibrant-red uppercase font-mono text-[10px] block mb-1">3. Google Play Store & Android SDKs:</strong>
              Die von uns im Google Play Store bereitgestellten mobilen Apps erheben im Regelfall keinerlei verhaltensbezogenen Analysedaten im Hintergrund. Sollte eine App zur Erfüllung ihrer Kernfunktionen systemspezifische Sensortaten oder Standortdienste benötigen, fragen wir dies explizit ab.
            </p>

            <div className="pt-4 border-t border-zinc-900 text-[10px] text-zinc-550 flex flex-col sm:flex-row justify-between gap-1 select-none">
              <span>Gridwerk © 2026</span>
              <span className="font-mono text-zinc-500">Google Play Verify Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
