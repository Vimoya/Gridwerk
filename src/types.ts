/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AppInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  version: string;
  fileSize: string;
  minAndroidVersion: string;
  releaseDate: string;
  iconName: string; // From lucide-react, rendered dynamically
  status: 'Published' | 'Beta' | 'In Development';
  googlePlayUrl?: string;
  packageName: string;
  features: string[];
}

export interface CompanyInfo {
  name: string;
  legalForm: string;
  ownerName: string;
  street: string;
  zipCode: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  vatId: string;
  registerCourt: string;
  registerNumber: string;
  visionTitle: string;
  visionSubtitle: string;
  description: string;
}

export interface PrivacyPolicyConfig {
  lastUpdated: string;
  collectsPersonalData: boolean;
  usesCookies: boolean;
  usesAdmob: boolean;
  usesAnalytics: boolean;
}
