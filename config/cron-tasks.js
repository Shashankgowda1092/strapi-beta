// @ts-nocheck
const axios = require('axios');

module.exports = {
  myJob: {
    task: async () => {
      try {
        const response = await axios.get('https://simple-one-id45.onrender.com/api/products/1'); // Replace with your desired URL
        console.log('HTTP GET request successful:', response.data);
      } catch (error) {
        console.error('Error making HTTP GET request:', error);
      }
    },
    options: {
      cronTime: '0 */5 * * * *', // Run every 5 minutes
    },
  },
};
