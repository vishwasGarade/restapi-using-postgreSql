const fs = require('fs');
const https = require('https');

const req = https.request(
  {
    hostname: 'localhost',
    port: 8080,
    path: '/api/material/',
    method: 'GET',
    cert: fs.readFileSync('./certificates/client.crt'),
    key: fs.readFileSync('./certificates/client.key'),
    ca: fs.readFileSync('root.crt')
  },
  resp => {
    let data = "";

    // A chunk of data has been received.
    resp.on("data", chunk => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      console.log(data);  // Log the raw data to the console
    });
  }
);

// req.write();
req.end();