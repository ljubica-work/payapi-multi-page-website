const pricingData = [
  {
    plan: 'free',
    title: 'Free Plan',
    text: 'Build and test using our core set of products with up to 100 API requests',
    price: '$0.00',
    products: [
      {
        name: 'transactions',
        checked: true,
      },
      {
        name: 'auth',
        checked: true,
      },
      {
        name: 'identity',
        checked: true,
      },
      {
        name: 'investments',
        checked: false,
      },
      {
        name: 'assets',
        checked: false,
      },
      {
        name: 'liabilities',
        checked: false,
      },
      {
        name: 'income',
        checked: false,
      },
    ],
  },
  {
    plan: 'basic',
    title: 'Basic Plan',
    text: 'Launch your project with unlimited requests and no contractual minimums',
    price: '$249.00',
    products: [
      {
        name: 'transactions',
        checked: true,
      },
      {
        name: 'auth',
        checked: true,
      },
      {
        name: 'identity',
        checked: true,
      },
      {
        name: 'investments',
        checked: true,
      },
      {
        name: 'assets',
        checked: true,
      },
      {
        name: 'liabilities',
        checked: false,
      },
      {
        name: 'income',
        checked: false,
      },
    ],
  },
  {
    plan: 'premium',
    title: 'Premium Plan',
    text: 'Get tailored solutions, volume pricing, and dedicated support for your team',
    price: '$499.00',
    products: [
      {
        name: 'transactions',
        checked: true,
      },
      {
        name: 'auth',
        checked: true,
      },
      {
        name: 'identity',
        checked: true,
      },
      {
        name: 'investments',
        checked: true,
      },
      {
        name: 'assets',
        checked: true,
      },
      {
        name: 'liabilities',
        checked: true,
      },
      {
        name: 'income',
        checked: true,
      },
    ],
  },
];

export default pricingData;
