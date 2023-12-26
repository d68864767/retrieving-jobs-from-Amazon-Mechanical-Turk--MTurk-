```javascript
// Import the necessary libraries
const winston = require('winston');

// Define the log format
const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(
    info => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

// Create a logger
const logger = winston.createLogger({
  format: logFormat,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log' })
  ]
});

// Function to log errors
function logError(error) {
  logger.error(error);
}

// Function to handle errors
function handleError(error) {
  console.error('An error occurred:', error);
  logError(error);
}

module.exports = {
  handleError
};
```
