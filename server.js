// server.js
// where your node app starts

// init project
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
// const router = express.Router();
const routes = require('./routes/route');

app.use(bodyParser());
app.use(morgan());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// MY CODE

// using routes middleware
app.use('/', routes);

const getUsersData = async () => {
  const users = await fetch('https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json');
  const usersData = await users.json();
  return usersData;
};

const getUserProfilesData = async () => {
  const profiles = await fetch('https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json');
  const profilesData = await profiles.json();
  return profilesData;
};

app.post('/santaData', async (req, res) => {
  // const userId = req.body.id;
  const { name, wish } = req.body;
  const data = { name, wish };
  console.log('server data', data)

  // try {
    const usersData = await getUsersData();
    const user = usersData.find(user => user.username === name);
    // console.log('userdata', usersData);

    if (!user) {
      console.log('User not registered')
      return res.redirect('views/pages/error.ejs');
    }

    const userProfilesData = await getUserProfilesData();
    const userProfile = userProfilesData.find(profile => profile.userUid === user.uid);
    // console.log('useprof', userProfilesData);


    const dateOfBirth = new Date(userProfile.birthday);
    const ageInMs = Date.now() - dateOfBirth.getTime();
    const ageInYears = new Date(ageInMs).getUTCFullYear();

    if (ageInYears >= 10) {
      console.log('User is older than 10 years')
      throw new Error('User is older than 10 years');
    }
    res.redirect('views/pages/success.ejs');

});
