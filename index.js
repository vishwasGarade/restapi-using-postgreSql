const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const https = require("https") ;
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', eventRoutes.routes);

// app.get('/', function(req, res){
//   res.send('Rest Endpoints are live');
// })

// app.listen(config.port, () => console.log('Server is listening on http://localhost:' + config.port));
// function authentication(req, res, next) {
//   const auth = req.headers;
//   const user = auth.user;
//   const pass = auth.pass;
//   console.log(user, pass);
//   if (!auth) {
//       let err = new Error('You are not authenticated!');
//       res.setHeader('WWW-Authenticate', 'Basic');
//       err.status = 401;
//       return next(err)
//     }
//   if (user == 'admin' && pass == 'password') {
//       // If Authorized user
//       next();
//   } else {
//       let err = new Error('You are not authenticated!');
//       console.log(err);
//       res.setHeader('WWW-Authenticate', 'Basic');
//       err.status = 401;
//       return next(err);
//   }
// }

// // First step is the authentication of the client
// app.use(authentication)

app.get('/', (req, res) => {
    if (!req.client.authorized) {
        return res.status(401).send('Invalid client certificate authentication.');
      }
    return res.send('Rest api is live');
  });

https.createServer({
        cert: fs.readFileSync('server.crt'),
        key: fs.readFileSync('server.key'),
        requestCert: true,
        rejectUnauthorized: true,
        ca: fs.readFileSync('root.crt')
      },
      app
).listen(8080);