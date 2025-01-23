# Unhandled Promise Rejection in Express.js Server

This repository demonstrates a common error in Node.js Express.js servers: unhandled promise rejections.  The server includes an asynchronous operation that randomly throws an error, leading to an unhandled rejection and unexpected server crashes.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file provides a solution by implementing proper error handling using try...catch blocks within the asynchronous operation and a global error handler for Express.js.