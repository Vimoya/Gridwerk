/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompanyInfo, AppInfo, PrivacyPolicyConfig } from './types';
import { defaultCompanyInfo, defaultApps, defaultPrivacyConfig } from './data';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AppsGrid } from './components/AppsGrid';
import { Footer } from './components/Footer';

export default function App() {
  const company: CompanyInfo = defaultCompanyInfo;
  const privacy: PrivacyPolicyConfig = defaultPrivacyConfig;
  const apps: AppInfo[] = defaultApps;

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
    </div>
  );
}


