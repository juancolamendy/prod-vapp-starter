const API_BASE = "/api/v1";

export default {
  // client routes
  RTE_INDEX:                   '/',
  RTE_LOGIN:                   '/login',

  // auth API
  API_AUTH_LOGIN: API_BASE +  '/login',
  API_AUTH_LOGOUT: API_BASE + '/logout',

  // HTTP
  GET_METHOD: 'GET',
  POST_METHOD: 'POST',
  PUT_METHOD: 'PUT',
  DELETE_METHOD: 'DELETE',

  REQUEST_DELAY: 300,

  POLLING_DELAY: 10000,

  CONTENT_TYPE_JSON: 'application/json',

  HTTP_STATUS_OK: 200,
  HTTP_STATUS_UNAUTHORIZED: 403,

  // Auth
  X_ACCESS_TOKEN: 'X_ACCESS_TOKEN',

  PAGING_DEFAULT_PAGE: 1,
  PAGING_DEFAULT_PAGE_SIZE: 10,

  EMPTY_STRING: '',
  
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
    let apiKey = '';
    return apiKey;
  },  

  // GA
  GA_ID: 'G-XXX',
  
};
