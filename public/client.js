import fetch from "node-fetch"
// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');


// define variables that reference elements on our page
// const santaForm = document.forms[0];
const form = document.getElementById('santaForm');

// listen for the form to be submitted and add a new dream when it is
// santaForm.onsubmit = function (event) {
  // TODO: check the text isn't more than 100chars before submitting
  // event.preventDefault();
// };

// form.addEventListener('submit', async event => {
//   event.preventDefault();
//   const name = document.getElementById('userid').value;
//   const wish = document.getElementById('wish').value;


//   if (wish.length > 100) {
//     res.send('Error: Text must be no more than 100 characters!');
//   } else {
//     const response = await fetch('/santaData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, wish }),
//     });
//     const data = await response.json();
//     console.log(data);
//   }
// });