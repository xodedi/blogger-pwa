import { defineConfig } from '@/types/config';

export default defineConfig({
  manifest: {
    id: '/',
    name: 'Nota Generate App',
    short_name: 'NotGen',
    description: 'Nota Generator for Jastar Admin',
    dir: 'auto',
    lang: 'en-ID',
    background_color: '#fff',
    theme_color: '#fff',
    display: 'standalone',
    orientation: 'natural',
    scope: '/',
    start_url: '/',
    prefer_related_applications: false,
    shortcuts: [
      {
        name: 'Shortcut 1',
        short_name: 'Shortcut 1',
        description: 'Shortcut 1 description goes here...',
        url: '/',
      },
      {
        name: 'Shortcut 2',
        short_name: 'Shortcut 2',
        description: 'Shortcut 2 description goes here...',
        url: '/',
      },
    ],
  },

  pwa: {
    logs: true,
  },

  // OneSignal is only available if you are using cloudflare workers
  oneSignal: {
    enabled: false, // To enable OneSignal, set this to true
    appId: '********-****-****-****-************', // Replace with your OneSignal App Id
    allowLocalhostAsSecureOrigin: true,
  },

  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://app.jastar.id',
});
