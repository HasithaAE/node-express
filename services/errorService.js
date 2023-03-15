const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


exports.unregisteredForm = (req, res) =>
{  
    res.status(400).send(`
    <html>
      <body>
        <h1>Error</h1>
        <p>The provided ID is not registered.</p>
      </body>
    </html>
  `);
}  

exports.olderErrorFOrm = (req, res) =>
{  
    res.status(400).send(`
    <html>
    <body>
      <h1>Error</h1>
      <p>The provided ID belongs to a child who is over 10 years old.</p>
    </body>
  </html>
  `);
}  