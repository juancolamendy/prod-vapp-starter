const API_BASE = "/api/v1";

export default {
  // client routes
  RTE_INDEX:                   '/',
  RTE_LOGIN:                   '/login',

  // auth API
  API_AUTH_LOGIN: API_BASE +  '/login',
  API_AUTH_LOGOUT: API_BASE + '/logout',

  REQUEST_DELAY: 300,

  POLLING_DELAY: 10000,

  // Auth
  X_ACCESS_TOKEN: 'X_ACCESS_TOKEN',

  PAGING_DEFAULT_PAGE: 1,
  PAGING_DEFAULT_PAGE_SIZE: 10,

  // Defaults
  DEFAULT_ACTION_COL_WIDTH: 80,
  DEFAULT_FILTER_LOGIC: 'and',
  DEFAULT_FILTER_OPERATOR: 'eq',
  DEFAULT_SORT_DIR: 'asc',

  // Recaptcha
  RECAPTCHA_PUBLIC_API_KEY: '',

  // Locales
  LANG_EN_US: 'en_us',

  // mode
  isDevMode: () => {
    return (import.meta.env.VITE_MODE === 'dev');
  },

  // Stripe
  getStripePublicApiKey: () => {
    const apiKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
    console.log('stripe api key:', apiKey);
    return apiKey;
  },

  // GA
  GA_ID: 'G-XXX',
  
};
