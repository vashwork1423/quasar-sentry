import { boot } from 'quasar/wrappers';
import * as Sentry from '@sentry/vue';

export default boot(async ({ app }) => {
  Sentry.init({
    app,
    dsn: '',
    integrations: [
      // new Integrations.BrowserTracing({
      //   tracingOrigins: ['*'],
      // }),
    ],
    tracesSampleRate: 1.0,
  });
});
