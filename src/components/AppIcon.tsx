/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LayoutGrid, Cpu, Compass, Mail, Phone, MapPin, ShieldAlert, FileText, CheckCircle2, Apple, Sparkles, Brain, Shield, Globe, Lock, Camera, Languages, Navigation, Car, DollarSign } from 'lucide-react';

interface AppIconProps {
  name: string;
  className?: string;
}

export function AppIcon({ name, className = "w-6 h-6" }: AppIconProps) {
  switch (name) {
    case 'Shield':
      return <Shield className={className} id="icon-shield" />;
    case 'Globe':
      return <Globe className={className} id="icon-globe" />;
    case 'Lock':
      return <Lock className={className} id="icon-lock" />;
    case 'Camera':
      return <Camera className={className} id="icon-camera" />;
    case 'Languages':
      return <Languages className={className} id="icon-languages" />;
    case 'Navigation':
      return <Navigation className={className} id="icon-navigation" />;
    case 'Car':
      return <Car className={className} id="icon-car" />;
    case 'DollarSign':
      return <DollarSign className={className} id="icon-dollarsign" />;
    case 'LayoutGrid': 
      return <LayoutGrid className={className} id="icon-layout-grid" />;
    case 'Cpu': 
      return <Cpu className={className} id="icon-cpu" />;
    case 'Compass': 
      return <Compass className={className} id="icon-compass" />;
    case 'Apple':
      return <Apple className={className} id="icon-apple" />;
    case 'Sparkles':
      return <Sparkles className={className} id="icon-sparkles" />;
    case 'Brain':
      return <Brain className={className} id="icon-brain" />;
    case 'Mail': 
      return <Mail className={className} id="icon-mail" />;
    case 'Phone': 
      return <Phone className={className} id="icon-phone" />;
    case 'MapPin': 
      return <MapPin className={className} id="icon-map-pin" />;
    case 'ShieldAlert': 
      return <ShieldAlert className={className} id="icon-shield-alert" />;
    case 'FileText': 
      return <FileText className={className} id="icon-file-text" />;
    case 'CheckCircle2': 
      return <CheckCircle2 className={className} id="icon-check-circle" />;
    default: 
      return <Shield className={className} id="icon-default" />;
  }
}
