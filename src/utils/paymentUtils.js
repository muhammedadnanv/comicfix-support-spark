export const processPayment = async (amount, method, donorInfo) => {
  // This is a mock function. In a real-world scenario, you would integrate with a payment gateway API.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% success rate for demo purposes
        console.log('Payment processed:', { amount, method, donorInfo });
        resolve('Payment successful');
      } else {
        reject(new Error('Payment failed'));
      }
    }, 2000); // Simulate network delay
  });
};