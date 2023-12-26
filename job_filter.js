```javascript
const { getJobs } = require('./mturk_api');

// Define profitability criteria
const MIN_PAYMENT = 0.5; // Minimum acceptable payment for a job
const MAX_TIME = 30; // Maximum acceptable time for a job (in minutes)

// Function to evaluate the profitability of a job
function isJobProfitable(job) {
  const payment = parseFloat(job.Reward);
  const time = parseFloat(job.AssignmentDurationInSeconds) / 60;

  // A job is considered profitable if it meets the minimum payment and maximum time criteria
  return payment >= MIN_PAYMENT && time <= MAX_TIME;
}

// Function to filter profitable jobs
async function filterJobs() {
  try {
    const jobs = await getJobs();

    // Filter jobs based on profitability
    const profitableJobs = jobs.filter(isJobProfitable);

    if (profitableJobs.length > 0) {
      console.log(`Found ${profitableJobs.length} profitable jobs`);
      return profitableJobs;
    } else {
      console.log('No profitable jobs found');
      return [];
    }
  } catch (error) {
    console.error('Error filtering jobs:', error);
    return [];
  }
}

module.exports = {
  filterJobs
};
```
