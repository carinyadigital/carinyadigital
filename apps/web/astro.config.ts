import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sentry from '@sentry/astro';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://carinyadigital.com',
  redirects: {
    '/resources': '/agent-resources',
    '/resources/financial-planners': '/financial-planners',
    '/resources/waratah': '/waratah',
    '/resources/agent-plugins': '/agent-plugins',
  },
  integrations: [
    sentry({
      project: 'carinyadigital',
      org: 'carinyaparc',
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    ssr: {
      noExternal: ['@carinya-digital/ui'],
    },
  },
});
