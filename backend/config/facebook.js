const Facebook = require('facebook-node');

// Initialize Facebook SDK
const fb = new Facebook({
  app_id: process.env.FACEBOOK_APP_ID,
  app_secret: process.env.FACEBOOK_APP_SECRET
});

module.exports = fb;
