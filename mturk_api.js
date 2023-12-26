```javascript
const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'YourAccessKeyId',
  secretAccessKey: 'YourSecretAccessKey'
});

// Create an Amazon Mechanical Turk client
const mturk = new AWS.MTurk({apiVersion: '2017-01-17'});

// Function to get available jobs from MTurk
async function getJobs() {
  try {
    const params = {
      // Add any parameters you need
    };

    const data = await mturk.listHITs(params).promise();

    if (data.HITs) {
      return data.HITs;
    } else {
      console.log('No jobs available');
      return [];
    }
  } catch (error) {
    console.error('Error retrieving jobs from MTurk:', error);
    return [];
  }
}

module.exports = {
  getJobs
};
```
