/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppInfo, CompanyInfo, PrivacyPolicyConfig } from './types';

/**
 * EDIT THIS FILE to easily customize the content of the Gridwerk Landing Page.
 * You can change all company texts, legal info, and published apps here, 
 * which will automatically update the entire landing page.
 */

export const defaultCompanyInfo: CompanyInfo = {
  name: "Gridwerk",
  legalForm: "Einzelunternehmen", // e.g. "GmbH", "UG (haftungsbeschränkt)", "Einzelunternehmen"
  ownerName: "Özgür Kilincer", // Representative / Vertreten durch
  street: "Am Birket 1",     // Your street and number
  zipCode: "86650",          // Your postal code
  city: "Wemding",           // Your city
  country: "Deutschland",    // Your country
  email: "Kilincer@outlook.com", // Official developer support email
  phone: "01718484211",   // Contact phone number
  vatId: "DE268563088",      // Umsatzsteuer-Identifikationsnummer as per official document
  registerCourt: "",         // If registered, otherwise leave empty or "N/A"
  registerNumber: "",        // If registered, otherwise leave empty or "N/A"
  
  // Vision statement on the Hero Section
  visionTitle: "Türkei-Reise & Transit. Devisen-Monitore. Maximale Sicherheit.",
  visionSubtitle: "Gridwerk ist Ihr Partner für professionelle und kostengünstige App-Entwicklung aus Deutschland. Mit unserem aktuellen Highlight 'SilaGuard Pro' bieten wir den unentbehrlichen Begleiter für Reisen in die Türkei und den Balkan-Transit: Devisen- & Zoll-Check, Live Grenz-Cams, KI-Sprachübersetzer und lokaler Sila-Tresor.",
  description: "Gridwerk ist ein deutsches Softwareentwicklungs-Studio unter der Leitung von Özgür Kilincer. Wir spezialisieren uns auf die kostengünstige Erstellung von datensparsamen High-Performance-Lösungen für Mobilgeräte (Android/iOS) und das Web. Unser Flaggschiff 'SilaGuard' schützt Reisende auf der Sıla Yolu und bei Türkei-Reisen vor Zollstrafen, Wartezeiten und Orientierungsverlust."
};

export const defaultApps: AppInfo[] = [
  {
    id: "silaguard",
    name: "SilaGuard Pro",
    tagline: "Türkei-Reisebegleiter: Devisen, Zoll, Grenz-Cams & Translator",
    description: "Der ultimative All-in-One Reisebegleiter für die Fahrt in die Türkei (Sıla Yolu) und den Balkan-Transit. Ausgestattet mit Devisen- & Gold-Monitor mit 10.000 € Limitprüfer, GPS-Routenplaner, Live-Grenzkameras, KI-Sprachübersetzer und sicherem Sila-Tresor für Ihre Reisedokumente — 100% datensparsam.",
    category: "Reisen & Lokales",
    tags: ["Sıla Yolu", "Türkei Reise", "Devisen & Gold", "Zoll-Helfer", "Grenz-Cams", "Sprachübersetzer", "Tresor"],
    version: "2.1.0-stable",
    fileSize: "18.4 MB",
    minAndroidVersion: "Android 8.0 (Oreo) oder höher",
    releaseDate: "2026",
    iconName: "Shield",
    status: "Published",
    packageName: "de.gridwerk.silaguard",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=de.gridwerk.silaguard",
    features: [
      "Barmittel- & Devisen-Monitor: Bargeld- & Goldrechner mit Zoll-Freimengenwarnung (10.000 € Regel EU/Türkei)",
      "Live Grenz-Cams: Videostreams der offiziellen Behörden (AMSS, MUP, MK) für Hinfahrt & Rückfahrt",
      "Integrierter KI-Sprachübersetzer: Sprachausgabe (Speech-to-Text & TTS) für Türkisch, Serbisch, Bulgarisch uvm.",
      "GPS Routen-Planer: Optimierte Balkan-Transitrouten (Ungarn, Kroatien, Nordmazedonien) mit Distanz- & Maut-Check",
      "Sila-Tresor Pro: Verschlüsseltes lokales Archiv für Passdaten, Kennzeichen, ADR & Barmittel mit PDF-Export",
      "Zoll-Kompass: Übersicht über Freimengen, Erlaubtes & Verbotenes (Lebensmittel, Zigaretten, Pflanzenschutz)"
    ]
  }
];

export const defaultPrivacyConfig: PrivacyPolicyConfig = {
  lastUpdated: "2026",
  collectsPersonalData: false,
  usesCookies: false,
  usesAdmob: false,
  usesAnalytics: false
};
