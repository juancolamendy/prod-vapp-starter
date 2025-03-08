//const API_BASE = "/api/v1";
export default {
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
  GA_ID: () => {
    const apiKey = import.meta.env.VITE_GA_ID || 'GA-230202';
    console.log('ga id:', apiKey);
    return apiKey;
  },

  // Recaptcha
  RECAPTCHA_PUBLIC_API_KEY: () => {
    const apiKey = import.meta.env.VITE_RECAPTCHA_PUBLIC_API_KEY;
    console.log('recaptcha api key:', apiKey);
    return apiKey;
  },  
  
};
