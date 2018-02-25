const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_TD7PSmc2ZyJSJtLyMXuDpWJg'
  : 'pk_test_MY_PUBLISHABLE_KEY';

export default STRIPE_PUBLISHABLE;