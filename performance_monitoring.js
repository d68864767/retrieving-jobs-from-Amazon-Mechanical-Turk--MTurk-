```javascript
// Import the necessary libraries
const os = require('os');
const { performance } = require('perf_hooks');

// Function to get system information
function getSystemInfo() {
  return {
    arch: os.arch(),
    cpu: os.cpus(),
    freemem: os.freemem(),
    totalmem: os.totalmem(),
    uptime: os.uptime()
  };
}

// Function to measure execution time of a function
function measureExecutionTime(fn) {
  const startTime = performance.now();

  // Execute the function
  const result = fn();

  const endTime = performance.now();

  return {
    executionTime: endTime - startTime,
    result
  };
}

// Function to monitor performance
async function monitorPerformance(fn) {
  try {
    console.log('System Info:', getSystemInfo());

    const { executionTime, result } = measureExecutionTime(fn);

    console.log(`Execution Time: ${executionTime}ms`);

    return result;
  } catch (error) {
    console.error('Error monitoring performance:', error);
    return null;
  }
}

module.exports = {
  monitorPerformance
};
```
