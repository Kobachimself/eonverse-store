// Load environment variables
const stripeApiKey = process.env.STRIPE_API_KEY;
const discordWebhookPayments = process.env.DISCORD_WEBHOOK_URL_PAYMENTS;
const discordWebhookSubscriptions = process.env.DISCORD_WEBHOOK_URL_SUBSCRIPTIONS;
const cleverCloudMysqlHost = process.env.CLEVER_CLOUD_MYSQL_HOST;
const cleverCloudMysqlUser = process.env.CLEVER_CLOUD_MYSQL_USER;
const cleverCloudMysqlPassword = process.env.CLEVER_CLOUD_MYSQL_PASSWORD;
const cleverCloudMysqlDatabase = process.env.CLEVER_CLOUD_MYSQL_DATABASE;

// Use these variables in your application logic
// For example, initialize Stripe with the API key
const stripe = require('stripe')(stripeApiKey);

// Connect to the MySQL database
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: cleverCloudMysqlHost,
  user: cleverCloudMysqlUser,
  password: cleverCloudMysqlPassword,
  database: cleverCloudMysqlDatabase
});
