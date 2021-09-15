module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'es'],
      localeDetection: false,
      reloadOnPrerender: process.env.IS_DEV,
    },
    react: {
      useSuspense: false
    }
  };