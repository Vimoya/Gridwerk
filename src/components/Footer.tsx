/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompanyInfo, PrivacyPolicyConfig } from '../types';
import { Mail, Phone, MapPin, Building2, User, HelpCircle, FileText, Check, Copy, ChevronDown, ChevronUp, Scale } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FooterProps {
  company: CompanyInfo;
  privacy: PrivacyPolicyConfig;
}

export function Footer({ company, privacy }: FooterProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showFullPrivacy, setShowFullPrivacy] = useState(false);
  const [showMacherwerkPrivacy, setShowMacherwerkPrivacy] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#datenschutz-macherwerk') {
        setShowMacherwerkPrivacy(true);
        setTimeout(() => {
          document.getElementById('macherwerk-privacy-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={() => setShowFullPrivacy(!showFullPrivacy)}
                className="w-full text-center bg-zinc-900 border-2 border-vibrant-yellow hover:bg-vibrant-yellow hover:text-black text-vibrant-yellow font-bold uppercase text-[11px] tracking-wider py-2 px-3 transition-all flex items-center justify-center gap-1.5 shadow-[3px_3px_0px_0px_rgba(255,221,0,0.15)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 cursor-pointer select-none shrink-0"
              >
                {showFullPrivacy ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Zuklappen (Studio DSGVO)
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Studio DSGVO-Text
                  </>
                )}
              </button>

              <button
                type="button"
                id="btn-toggle-macherwerk-datenschutz"
                onClick={() => {
                  setShowMacherwerkPrivacy(!showMacherwerkPrivacy);
                  if(!showMacherwerkPrivacy) {
                    setTimeout(() => {
                      document.getElementById('macherwerk-privacy-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="w-full text-center bg-zinc-900 border-2 border-vibrant-cyan hover:bg-vibrant-cyan hover:text-black text-vibrant-cyan font-bold uppercase text-[11px] tracking-wider py-2 px-3 transition-all flex items-center justify-center gap-1.5 shadow-[3px_3px_0px_0px_rgba(0,240,255,0.15)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 cursor-pointer select-none shrink-0"
              >
                {showMacherwerkPrivacy ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Macherwerk App-Datenschutz zuklappen
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    App-Datenschutzerklärung (Macherwerk)
                  </>
                )}
              </button>
            </div>

            <div className="pt-4 border-t border-zinc-900 text-[10px] text-zinc-550 flex flex-col sm:flex-row justify-between gap-1 select-none">
              <span>Gridwerk © 2026</span>
              <span className="font-mono text-zinc-500">Google Play Verify Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded long-form DSGVO Statement */}
      {showFullPrivacy && (
        <div className="border-t-2 border-zinc-850 bg-zinc-950 pb-16 px-4 md:px-8 transition-all duration-300">
          <div className="max-w-6xl mx-auto mt-12 border-3 border-vibrant-yellow bg-zinc-900 p-6 md:p-8 space-y-8 shadow-[8px_8px_0px_0px_rgba(255,221,0,0.9)] text-zinc-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-zinc-800 pb-4 gap-4">
              <div>
                <h4 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight uppercase flex items-center gap-2">
                  <Scale className="w-6 h-6 text-vibrant-yellow shrink-0" />
                  Vollständige Datenschutzerklärung (DSGVO)
                </h4>
                <p className="text-[10px] sm:text-xs text-zinc-500 font-mono mt-1">Konform mit Art. 13 & 14 DSGVO für Web, Google Play Store & Mobile Apps</p>
              </div>
              <button 
                type="button"
                onClick={() => setShowFullPrivacy(false)}
                className="bg-vibrant-red hover:bg-black border-2 border-black hover:border-vibrant-red hover:text-vibrant-red text-white px-4 py-1.5 font-bold uppercase text-xs tracking-wider transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(255,0,0,1)] shrink-0 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
              >
                Schließen [X]
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs sm:text-sm">
              {/* Section 1 */}
              <div className="space-y-4">
                <div className="border-l-4 border-vibrant-cyan pl-3 space-y-1">
                  <h5 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wider">1. Allgemeine Hinweise & Pflichtinformationen</h5>
                  <p className="text-zinc-500 text-[11px]">Schutz personenbezogener Daten nach gesetzlichen Vorgaben</p>
                </div>
                <div className="space-y-3 font-sans text-xs text-zinc-400 leading-relaxed">
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung.
                  </p>
                  <p>
                    Wenn Sie diese Website nutzen oder unsere Mobile-Apps verwenden, werden verschiedene personenbezogene Daten verarbeitet. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Diese Erklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
                  </p>
                  <p>
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist technisch nicht möglich.
                  </p>
                  <div className="bg-zinc-950 p-4 border border-zinc-800 space-y-1 text-[11px]">
                    <span className="font-mono text-zinc-400 font-bold uppercase text-[10px] block mb-1">Verantwortliche Stelle:</span>
                    <p className="text-white font-bold">{company.ownerName}</p>
                    <p>{company.name} ({company.legalForm})</p>
                    <p>{company.street}, {company.zipCode} {company.city}, {company.country}</p>
                    <p>E-Mail: <span className="text-vibrant-cyan select-all">{company.email}</span></p>
                    {company.phone && <p>Telefon: {company.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <div className="border-l-4 border-vibrant-yellow pl-3 space-y-1">
                  <h5 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wider">2. Datenerfassung auf dieser Website</h5>
                  <p className="text-zinc-500 text-[11px]">Infrastruktur-Hosting & Logfiles</p>
                </div>
                <div className="space-y-3 font-sans text-xs text-zinc-400 leading-relaxed">
                  <p>
                    <strong className="text-white">Server-Logfiles:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp/Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und die IP-Adresse.
                  </p>
                  <p>
                    Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Stabilitätsoptimierung seiner Website.
                  </p>
                  <p>
                    <strong className="text-white">Ausschließliche Verweigerung von Tracking & Cookies:</strong> Diese Web-Repräsentanz verzichtet vollständig auf HTTP-Cookies sowie auf Tracking-Tools (wie Google Analytics, Matomo etc.). Es findet absolut kein Tracking Ihres Verhaltens statt.
                  </p>
                  <p>
                    <strong className="text-white">Kontaktaufnahme per E-Mail:</strong> Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben aus der E-Mail inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert (Art. 6 Abs. 1 lit. b DSGVO).
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4 lg:col-span-2 border-t border-zinc-800 pt-6">
                <div className="border-l-4 border-vibrant-red pl-3 space-y-1">
                  <h5 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wider">3. Spezifischer Datenschutz der Mobil-Anwendung "Macherwerk"</h5>
                  <p className="text-zinc-500 text-[11px]">Berechtigungen, KI-Einsatz und Verarbeitung der Ernährungstagebuch-App</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0 text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed">
                  <div className="space-y-3">
                    <p>
                      <span className="text-vibrant-yellow font-bold uppercase font-mono text-xs block mb-1">A. Lokaler Datenspeicher (100% Offline-Betrieb):</span>
                      Die Anwendung <strong>Macherwerk</strong> wurde als restriktiv privatsphärenfreundliche "Offline-First"-Anwendung konzipiert. Alle eingetragenen Fitnesswerte, Mahlzeiten, Gewichtseinträge, Kalorienaufzeichnungen und Nährwerte verbleiben und speichern sich ausschließlich in einer lokalen SQLite-Datenbank auf Ihrem Android-Handy. Es erfolgt keine automatische Speicherung Ihrer Profildaten auf Cloud-Servern.
                    </p>
                    <p>
                      <span className="text-vibrant-cyan font-bold uppercase font-mono text-xs block mb-1">B. Integration der OpenAI API für KI-gestützte Analysen:</span>
                      Zur intelligenten Erkennung und Schätzung von Freitexteingaben oder Nahrungsmittelbeschreibungen nutzt die App eine datenschutzkonforme Netzanbindung an die offizielle OpenAI API (Schnittstelle).
                    </p>
                    <p>
                      Hierbei werden <strong>ausschließlich die reinen Beschreibungen der Lebensmittel und Mengenangaben</strong> übertragen, die für das Ernährungstagebuch analysiert werden sollen. Es werden <strong>keine personenbezogenen Daten</strong> wie E-Mail-Adresse, Name, Geräte-IDs, IP-Adressen oder Standortsdaten an OpenAI gesendet. Alle Abfragen an die OpenAI API erfolgen anonymisiert. OpenAI verwendet API-Anfragen gemäß eigenen Richtlinien nicht für das Training von KI-Modellen.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p>
                      <span className="text-vibrant-red font-bold uppercase font-mono text-xs block mb-1">C. Kamera-Berechtigungen (Foto-Erkennung):</span>
                      Zur optionalen intelligenten Foto-Erkennung von Mahlzeiten fordert die App Zugriff auf die Kamera des Geräts an. Das aufgenommene Foto wird temporär on-device verarbeitet oder rein zur Lebensmittel- und Mengenschätzung im Rahmen des oben beschriebenen anonymisierten API-Schnittstellenzugriffs an OpenAI übermittelt. Es werden keine Profilbilder, persönliche Metadaten oder Gesichter gespeichert. Das Foto wird nach der Analyse sofort wieder gelöscht bzw. verworfen.
                    </p>
                    <p>
                      <span className="text-emerald-400 font-bold uppercase font-mono text-xs block mb-1">D. Konsequenter Ausschluss von Werbe- & Analyse-Trackern:</span>
                      Wir binden keine kommerziellen Trackingsysteme oder Verhaltens-SDKs in unsere App ein. Wir verzichten vollständig auf Werbe-Netzwerke (wie Google AdMob) oder unautorisierte Nutzungsanalysen (wie Firebase Analytics, Segment, Flurry). Somit werden auch keine Mobile-Advertising-IDs an Datenbroker weitergegeben.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4 lg:col-span-2 border-t border-zinc-800 pt-6">
                <div className="border-l-4 border-emerald-500 pl-3 space-y-1">
                  <h5 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wider">4. Ihre gesetzlichen Rechte als betroffene Person (DSGVO)</h5>
                  <p className="text-zinc-500 text-[11px]">Recht auf Auskunft, Löschung und datenschutzrechtliche Absicherung</p>
                </div>
                <div className="space-y-3 font-sans text-xs text-zinc-400 leading-relaxed">
                  <p>
                    Sie haben das gesetzliche Recht auf unentgeltliche <strong>Auskunft (Art. 15 DSGVO)</strong> über Ihre personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf <strong>Berichtigung (Art. 16 DSGVO)</strong>, Sperrung oder <strong>Löschung (Art. 17 DSGVO)</strong> dieser Daten.
                  </p>
                  <p>
                    Da die App "Macherwerk" keinerlei Daten an uns übermittelt und alle Werte rein lokal hält, können Sie die gespeicherten Einträge jederzeit selbständig und unwiderruflich löschen: Löschen Sie dazu einfach den Speicher bzw. die App-Daten in den Einstellungen Ihres Smartphones oder deinstallieren Sie die App vollständig.
                  </p>
                  <p>
                    Sollten Sie der Meinung sein, dass die Verarbeitung Ihrer Daten gegen gesetzliche Vorschriften verstößt, steht Ihnen ein <strong>Beschwerderecht bei einer Aufsichtsbehörde</strong> zu (Art. 77 DSGVO). Die für uns zuständige Landesbehörde ist: <em>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, Deutschland</em>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-zinc-850 text-center select-none text-xs text-zinc-550">
              {company.name} Softwareentwicklung • {company.street} • {company.zipCode} {company.city} • {company.country}
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Macherwerk App-Specific Privacy Section */}
      {showMacherwerkPrivacy && (
        <div id="macherwerk-privacy-section" className="border-t-2 border-zinc-850 bg-zinc-950 pb-16 px-4 md:px-8 transition-all duration-300">
          <div className="max-w-6xl mx-auto mt-12 border-3 border-vibrant-cyan bg-zinc-900 p-6 md:p-8 space-y-8 shadow-[8px_8px_0px_0px_rgba(0,240,255,1)] text-zinc-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-zinc-800 pb-4 gap-4">
              <div>
                <h4 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight uppercase flex items-center gap-2">
                  <Scale className="w-6 h-6 text-vibrant-cyan shrink-0" />
                  Datenschutzerklärung: App "Macherwerk"
                </h4>
                <p className="text-[10px] sm:text-xs text-zinc-500 font-mono mt-1">
                  Direkt-Link für Google Play Console: <span className="text-vibrant-cyan underline break-all font-bold">https://remarkable-kleicha-c89014.netlify.app/#datenschutz-macherwerk</span>
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button 
                  type="button"
                  onClick={() => setShowMacherwerkPrivacy(false)}
                  className="bg-vibrant-red hover:bg-black border-2 border-black hover:border-vibrant-red hover:text-vibrant-red text-white px-4 py-1.5 font-bold uppercase text-xs tracking-wider transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none shrink-0 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                >
                  [X] CLOSE
                </button>
              </div>
            </div>

            {/* Render formatted preview block */}
            <div className="bg-zinc-950 p-4 font-mono text-xs text-zinc-400 border-2 border-black max-h-[350px] overflow-y-auto leading-relaxed whitespace-pre-wrap select-all">
{`Datenschutzerklärung für die Android-App "Macherwerk"
(Package-ID: de.gridwerk.macherwerk)

1. Präambel & Verantwortliche Stelle
Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang und die Zwecke der Erhebung und Verwendung personenbezogener Daten durch den verantwortlichen Entwickler auf:

Entwickler & Verantwortliche Stelle:
Özgür Kilincer
Gridwerk Softwareentwicklung
Am Birket 1, 86650 Wemding, Deutschland
E-Mail: Kilincer@outlook.com
Tel: 01718484211
Umsatzsteuer-Identifikationsnummer: DE268563088

2. Grundprinzipien: Offline-First & Datensparsamkeit
Die App "Macherwerk" ist als reine Offline-Anwendung konzipiert.
- Lokalität: Alle von Ihnen erfassten Nahrungsmittel, Mahlzeiten, Kalorien, Nährwertprofile, Gewichtseinträge sowie freie Texteinträge werden ausschließlich auf Ihrem eigenen Speicherplatz in einer lokalen SQLite-Datenbank Ihres Android-Smartphones abgespeichert.
- Keine Server-Übertragung der Profildaten: Es findet keine automatische Übertragung oder Synchronisation Ihrer persönlichen Profildaten (wie Name, Gewichtshistorie oder Benutzerprofil) auf Cloud-Hoster, Webserver oder externe Netzwerke statt.
- Kein Account-Zwang: Sie können die App verwenden, ohne ein Benutzerkonto anzulegen.

3. Integration der OpenAI API für KI-gestützte Analysen
Zur intelligenten Erkennung und Schätzung von Freitexteingaben oder Nahrungsmittelbeschreibungen nutzt die App eine datenschutzkonforme Netzanbindung an die offizielle OpenAI API (Schnittstelle).
- Welche Daten werden übertragen?
  Übertragen werden ausschließlich die von Ihnen manuell eingetragenen Beschreibungen der Mahlzeiten (Textbeschreibungen der Lebensmittel, Mengen und Zutaten).
- Strikter Schutz personenbezogener Daten (Keine PII-Übertragung):
  Es werden ABSOLUT KEINE personenbezogenen, sensiblen oder identifizierbaren Daten (wie Ihr Name, Ihre E-Mail-Adresse, Ihre physische Wohnadresse, Ihr Standort/GPS, IP-Adressen oder Geräte-IDs) an OpenAI übermittelt oder gesendet. Die Anfragen an die OpenAI API erfolgen vollkommen anonymisiert und ohne jeglichen Bezug zu Ihrer Identität oder Ihrem Gerät.
- Datenverwendung durch OpenAI:
  Gemäß den Richtlinien von OpenAI werden Daten, die über die offizielle API (Schnittstelle) übermittelt werden, nicht zum Training von OpenAI-Modellen verwendet und nach den geltenden Sicherheitsstandards von OpenAI verarbeitet.

4. Kamera-Berechtigung (Foto-Erkennung)
Zur optionalen intelligenten Foto-Erkennung von Mahlzeiten fordert die App Zugriff auf die Kamera des Geräts an. Das aufgenommene Foto wird temporär on-device verarbeitet oder rein zur Lebensmittel- und Mengenschätzung im Rahmen des oben beschriebenen anonymisierten API-Schnittstellenzugriffs an OpenAI übermittelt. Es werden keine Profilbilder, persönliche Metadaten oder Gesichter gespeichert oder übertragen. Das Foto wird nach der Analyse sofort wieder gelöscht bzw. verworfen.

5. Keine Weitergabe an sonstige Dritte & Keine Werbe- oder Analyse-Tracker
- Abgesehen von der oben beschriebenen anonymisierten Lebensmittel-Nährwertanalyse über die Schnittstelle von OpenAI findet keinerlei Weitergabe von Daten an sonstige Dritte statt.
- Die App bindet keinerlei kommerzielle Werbenetzwerke (wie Google AdMob) oder unautorisierte Analyse-Werkzeuge (wie Firebase Analytics, Segment, Flurry) ein.
- Ihre Mobile-Advertising-ID (AAID) oder anderweitige Nutzungskennungen werden weder erfasst noch verarbeitet.

6. Ausschluss medizinischer Beratung & KI-Unterstützung
- Kein medizinischer Ratgeber: Die App "Macherwerk" dient ausschließlich der Dokumentation im Rahmen eines Ernährungstagebuchs. Sie bietet keinerlei medizinische Beratung, therapeutische Ratschläge, Diagnosen oder Behandlungsempfehlungen an. Die App ist kein Medizinprodukt und hat keinen medizinischen Hintergrund. Suchen Sie bei gesundheitlichen Beeinträchtigungen oder Fragen zu Diäten und Ernährungstherapien stets qualifizierten medizinischen Rat bei einem Arzt oder Ernährungsberater.
- KI als Erfassungshilfe: Die integrierten Künstliche-Intelligenz-Funktionen (z. B. Texterkennung über die OpenAI API) dienen ausschließlich als technische Hilfestellung (Erfassungshilfe und Orientierung) bei der Protokollierung. Die Ergebnisse basieren auf Schätzwerten und sind unverbindlich. Sie sollten für keine medizinischen Entscheidungen (z. B. Medikamentendosierungen) herangezogen werden.

7. Rechte des Nutzers (Auskunft und vollständige Löschung)
Sie haben das Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten.
- Datenlöschung: Da wir Ihre Daten nicht auf unseren Servern speichern, können Sie alle in der App abgelegten Daten jederzeit unwiderruflich selbst löschen. Dies geschieht durch Löschen der App-Daten in den Android-Systemeinstellungen oder durch die vollständige Deinstallation der App.

8. Version und Stand der Erklärung
Stand: 13. Juni 2026 / Version 1.1.0`}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm col-span-2">
              <div className="space-y-3">
                <span className="font-display font-bold uppercase text-white tracking-widest text-[11px] block border-b border-zinc-800 pb-1 text-vibrant-cyan">Play Store URL</span>
                <p className="text-zinc-400 leading-relaxed font-sans">
                  Diese Datenschutzerklärung ist direkt über die folgende Adresse öffentlich erreichbar und für das Google Play Console Formular einsatzbereit:
                </p>
                <div className="bg-zinc-950 p-2.5 text-xs font-mono select-all text-white border border-zinc-805 border-zinc-800 font-bold truncate">
                  https://remarkable-kleicha-c89014.netlify.app/#datenschutz-macherwerk
                </div>
              </div>

              <div className="space-y-3">
                <span className="font-display font-bold uppercase text-white tracking-widest text-[11px] block border-b border-zinc-800 pb-1 text-vibrant-yellow font-sans">Sicherheitsversprechen</span>
                <p className="text-zinc-400 leading-relaxed font-sans">
                  Durch den konsequenten Schutz personenbezogener Daten und den transparenten Ausschluss der Speicherung persönlicher Identifikationsdaten erfüllt diese Formulierung alle Google-Richtlinien für gesundheitsrelevante Apps im Google Play Store.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
