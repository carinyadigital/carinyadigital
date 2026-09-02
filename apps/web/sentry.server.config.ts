import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: 'https://5b9322e4aac57a701a3c48f736a2b4f0@o4510428796682240.ingest.us.sentry.io/4512016879517696',
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
  // Define how likely traces are sampled. Adjust this value in production,
  // or use tracesSampler for greater control.
  tracesSampleRate: 1.0,
});
