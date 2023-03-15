const express = require('express');
const router = express.Router();
const controller = require('../services/appService');
const errorController = require('../services/errorService');

router.get('/', controller.santaForm);
router.post('/', controller.santaFormProcess);
router.get('/error', errorController.unregisteredForm);
router.get('/oldError', errorController.olderErrorFOrm);

module.exports = router;

// router.post('/submit', (req, res) => {
//     const { userid, wish } = req.body;
//     // Handle the form data here
//     console.log('route', req.body)
//     res.send(`Name: ${userid}, Wish: ${wish}`,req.body );
//   });

//   // GET request for success page
//   router.get('/success', (req, res) => {
//     res.render('/views/pages/success.ejs');
//   });

//   // POST request for success page
// router.post('/success', (req, res) => {
//     res.redirect('/views/pages/success.ejs');
//   });

//   // router.get('/error', (req, res) => {
//   //   console.log('route error')
//   //   res.render('/views/pages/error.ejs');
//   // });

//   // POST request for error page
// router.post('/error', (req, res) => {
//     // do something with the POST data
//     res.redirect('/views/pages/error.ejs');
//   });
