const express = require('express');
const fetch = require('node-fetch');
const app = express();
// const userDatas = require('./userService');
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


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

// module to handle get request on localhost:3000 and load the registration form
exports.santaForm = (req, res) =>
{  
    res.sendFile('views/index.html', { root: '.' })
}  

// module to handle post request on localhost:3000 when user submits the registration form
// form data is captured and sent back as a response
exports.santaFormProcess = async (req, res) =>
{  
   console.log(req.body);
   const { name, wish } = req.body;
   const username = req.body.userid;
   console.log('server data', req.body.userid)
 

    const usersData = await getUsersData();
    const user = usersData.find(user => user.username === username);
 
     if (!user) {
       console.log('User not registered')
       return res.redirect('error');
     }
 
     const userProfilesData = await getUserProfilesData();
     const userProfile = userProfilesData.find(profile => profile.userUid === user.uid);
 
     console.log('useprof', userProfile);
 
     const birthYear  = new Date(userProfile.birthdate).getFullYear();
     const age = new Date().getFullYear() - birthYear ;
 
     console.log('agess  ', age);
     if (age >= 10) {
       console.log('User is older than 10 years')
       return res.redirect('oldError');
     }
     res.redirect('../views/pages/success.ejs');
   res.end();
}  