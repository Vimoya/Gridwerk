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
  visionTitle: "Ernährungstracking. Intelligente Analysen. Perfekte Performance.",
  visionSubtitle: "Macherwerk revolutioniert das mobile Tracken Ihrer Fitness- und Gesundheitsziele durch innovative, datensparsame KI. Erfassen Sie Mahlzeiten in Rekordzeit und erhalten Sie sofortige Nährwert-Einblicke.",
  description: "Gridwerk ist ein deutsches Softwareentwicklungs-Studio unter der Leitung von Özgür Kilincer. Wir spezialisieren uns auf datensparsame High-Performance-Lösungen für Mobilgeräte und Web. Unser aktuelles Flaggschiff 'Macherwerk' bietet ein minimalistisches, datensicheres Ernährungstagebuch mit lokaler KI-Verarbeitung."
};

export const defaultApps: AppInfo[] = [
  {
    id: "macher-werk",
    name: "Macherwerk",
    tagline: "Intelligentes Ernährungstagebuch mit KI",
    description: "Das ultimative mobile Ernährungstagebuch mit intelligenter Foto- und Texterkennung. Erfassen Sie Mahlzeiten in Rekordzeit, tracken Sie Nährwerte automatisch durch lokale KI-Analysen und erhalten Sie personalisierte Coaching-Tipps — 100% offline und datensparsam.",
    category: "Gesundheit & Fitness",
    tags: ["Ernährungstagebuch", "Künstliche Intelligenz", "Offline-Tracker", "Nährwert-Analyse"],
    version: "1.0.0-stable",
    fileSize: "7.2 MB",
    minAndroidVersion: "Android 8.0 (Oreo) oder höher",
    releaseDate: "05.06.2026",
    iconName: "Apple",
    status: "Published",
    packageName: "de.gridwerk.macherwerk",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=de.gridwerk.macherwerk",
    features: [
      "Automatische Mahlzeitenerfassung per intelligenter Freitexteingabe",
      "Lokale, blitzschnelle KI-Nährwertschätzung ohne Daten-Upload",
      "Analysen für Kalorien, Makronährstoffe (Eiweiß, Kohlenhydrate, Fette) & Vitamine",
      "Vollständiger Offline-Betrieb für maximale Privatsphäre ohne Tracker"
    ]
  }
];

export const defaultPrivacyConfig: PrivacyPolicyConfig = {
  lastUpdated: "05. Juni 2026",
  collectsPersonalData: false,
  usesCookies: false,
  usesAdmob: false,
  usesAnalytics: false
};
