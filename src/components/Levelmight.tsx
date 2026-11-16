const links = [
  ['Datenschutz', '/datenschutz'],
  ['Konto & Daten löschen', '/konto-loeschen.html'],
  ['Nutzungsbedingungen', '/nutzungsbedingungen'],
  ['Community-Regeln', '/community-regeln'],
  ['Gesundheitshinweise', '/gesundheitshinweise'],
  ['Inhalt oder Problem melden', '/melden'],
  ['Impressum & Kontakt', '/impressum'],
];

export function Levelmight() {
  return (
    <section id="levelmight" aria-labelledby="levelmight-title" className="max-w-6xl mx-auto px-4 pb-16 scroll-mt-24">
      <article className="border-4 border-black bg-zinc-950 text-zinc-100 p-5 sm:p-10 neo-shadow">
        <div className="flex flex-wrap gap-3 text-xs font-mono font-bold mb-6">
          <span className="bg-emerald-200 text-zinc-950 px-3 py-2">WEBAPP VERFÜGBAR</span>
          <span className="border border-zinc-600 px-3 py-2">GOOGLE PLAY: IN VORBEREITUNG</span>
          <span className="border border-zinc-600 px-3 py-2">AB 18 JAHREN</span>
        </div>
        <h2 id="levelmight-title" className="text-3xl sm:text-5xl font-display font-black tracking-tight break-words">LEVELMIGHT</h2>
        <p className="text-emerald-200 text-lg sm:text-2xl font-bold mt-3">Dein Tag. Dein Fortschritt.</p>
        <p className="mt-5 max-w-3xl leading-relaxed text-zinc-200">Ernährung, Training und persönliche Messwerte an einem Ort dokumentieren. LEVELMIGHT verbindet deinen Alltagstracker mit einer freiwilligen Community – aus der Region Donau-Ries.</p>
        <div className="grid sm:grid-cols-2 gap-4 my-7">
          {[
            ['Ernährung', 'Mahlzeiten, Kalorien und Makros erfassen. Lebensmittelsuche, Barcode-Scanner, Rezepte und KI-gestützte Erfassung per Foto oder Text nutzen; Mengen und Ergebnisse selbst prüfen und anpassen.'],
            ['Training', 'Übungen mit Bildern und Ausführungshinweisen entdecken, Training dokumentieren und vergangene Einheiten ansehen. Wochenziele und Pausentimer unterstützen die Organisation.'],
            ['Deine Einträge', 'Trinkmenge, Schritte, Gewicht und Bauchumfang festhalten. Persönliche Tagesübersichten und Statistiken helfen beim Vergleichen deiner dokumentierten Werte.'],
            ['Community', 'Freiwillig in Gruppen und privaten Chats kommunizieren und Bilder teilen. Unangemessene Inhalte oder Nutzer melden und Nutzer blockieren.'],
          ].map(([title, text]) => <div key={title} className="border border-zinc-700 bg-zinc-900 p-5 min-w-0"><h3 className="text-emerald-200 font-bold text-lg mb-2">{title}</h3><p className="text-zinc-200 leading-relaxed text-sm">{text}</p></div>)}
        </div>
        <a href="https://www.levelmight.de/" className="inline-flex min-h-12 items-center justify-center bg-emerald-200 text-zinc-950 font-bold px-5 py-3 hover:bg-white">Webapp öffnen · www.levelmight.de</a>
        <p className="text-sm text-zinc-300 mt-3">Die Android-App ist noch nicht im Google Play Store veröffentlicht.</p>
        <div className="border-l-4 border-emerald-200 bg-zinc-900 p-5 mt-8 space-y-3">
          <h3 className="font-bold text-lg">Gesundheit & KI-Ergebnisse</h3>
          <p className="leading-relaxed text-sm">LEVELMIGHT ist kein Medizinprodukt und dient nicht der Diagnose, Behandlung, Heilung oder Vorbeugung von Krankheiten. Die App ersetzt keine ärztliche Beratung. Wende dich für medizinische Fragen, Diagnosen oder Behandlungen an qualifiziertes medizinisches Fachpersonal.</p>
          <p className="leading-relaxed text-sm text-zinc-200">KI-Ergebnisse, Portionsgrößen und Nährwerte sind Schätzungen und können falsch sein. Prüfe Lebensmittel, Mengen, Zutaten und Allergene anhand der tatsächlichen Produktinformationen. Es gibt keine Garantie für Gewichtsverlust oder andere gesundheitliche Ergebnisse.</p>
        </div>
        <div id="datenschutz-levelmight" className="mt-8 scroll-mt-24">
          <h3 className="font-bold text-lg">Deine Daten & deine Kontrolle</h3>
          <p className="text-sm text-zinc-200 leading-relaxed mt-3">LEVELMIGHT ist ein kontobasiertes Online-Angebot. Konto- und Profildaten, Ernährungs- und Trainingseinträge, Messwerte sowie freiwillige Fotos und Community-Inhalte werden abhängig von der verwendeten Funktion verarbeitet und auch auf Servern gespeichert. Bei KI-Funktionen können eingegebene Texte und Bilder zur Analyse an einen Dienstleister übertragen werden. LEVELMIGHT speichert daher nicht ausschließlich lokal auf deinem Gerät.</p>
          <p className="text-sm text-zinc-200 leading-relaxed mt-3">Die vollständigen Datenschutzhinweise erläutern Zwecke, Empfänger und Rechte. Die öffentliche Löschanleitung beschreibt die Kontolöschung und den Kontaktweg. Das Deinstallieren der Android-App allein löscht dein serverseitiges Konto nicht.</p>
          <nav aria-label="LEVELMIGHT Informationen" className="grid sm:grid-cols-2 gap-3 mt-5">
            {links.map(([label, path]) => <a key={path} href={`https://www.levelmight.de${path}`} className="border border-zinc-600 px-4 py-3 min-h-12 text-sm text-emerald-200 underline underline-offset-4 hover:bg-zinc-800">{label}</a>)}
          </nav>
        </div>
      </article>
    </section>
  );
}
