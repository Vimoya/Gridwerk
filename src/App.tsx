/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { CompanyInfo, AppInfo, PrivacyPolicyConfig } from './types';
import { defaultCompanyInfo, defaultApps, defaultPrivacyConfig } from './data';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AppsGrid } from './components/AppsGrid';
import { Footer } from './components/Footer';
import { Customizer } from './components/Customizer';

export default function App() {
  const [company, setCompany] = useState<CompanyInfo>(defaultCompanyInfo);
  const [privacy, setPrivacy] = useState<PrivacyPolicyConfig>(defaultPrivacyConfig);
  const [apps] = useState<AppInfo[]>(defaultApps);

  // Load custom user configurations from localStorage if they exist
  useEffect(() => {
    try {
      const savedCompany = localStorage.getItem('gridwerk_company');
      const savedPrivacy = localStorage.getItem('gridwerk_privacy');
      
      if (savedCompany) {
        setCompany(JSON.parse(savedCompany));
      }
      if (savedPrivacy) {
        setPrivacy(JSON.parse(savedPrivacy));
      }
    } catch (e) {
      console.warn("Could not load stored profile configurations", e);
    }
  }, []);

  // Save changes to localStorage whenever company details or privacy parameters are updated
  const handleUpdateCompany = (newCompany: CompanyInfo) => {
    setCompany(newCompany);
    try {
      localStorage.setItem('gridwerk_company', JSON.stringify(newCompany));
    } catch (e) {
      console.warn("Could not persist company profile updates", e);
    }
  };

  const handleUpdatePrivacy = (newPrivacy: PrivacyPolicyConfig) => {
    setPrivacy(newPrivacy);
    try {
      localStorage.setItem('gridwerk_privacy', JSON.stringify(newPrivacy));
    } catch (e) {
      console.warn("Could not persist privacy policy updates", e);
    }
  };

  const handleResetProfile = () => {
    if (confirm("Möchten Sie alle geänderten Profildaten wirklich auf die Gridwerk-Standardwerte zurücksetzen?")) {
      setCompany(defaultCompanyInfo);
      setPrivacy(defaultPrivacyConfig);
      try {
        localStorage.removeItem('gridwerk_company');
        localStorage.removeItem('gridwerk_privacy');
      } catch (e) {
        console.warn("Could not clear persisted profile configurations", e);
      }
    }
  };

  return (
    <div id="gridwerk-viewport" className="bg-vibrant-gray-dark font-sans text-black min-h-screen neo-grid-pattern selection:bg-vibrant-yellow antialiased selection:text-black">
      {/* 1. Sticky Navigation Bar */}
      <Header company={company} />

      {/* 2. Visual Hero Grid Box */}
      <Hero company={company} appCount={apps.length} />

      {/* 3. Interactive Web & App Portfolio */}
      <AppsGrid apps={apps} />

      {/* 4. Contact, Impressum & Datenschutz Footer (Play Store compliant) */}
      <Footer company={company} privacy={privacy} />

      {/* 5. In-Browser Live Developer Control Suite */}
      <Customizer 
        company={company} 
        onUpdateCompany={handleUpdateCompany} 
        privacy={privacy} 
        onUpdatePrivacy={handleUpdatePrivacy} 
        apps={apps}
        onReset={handleResetProfile}
      />
    </div>
  );
}

