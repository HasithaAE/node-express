const express = require('express');
const userDatas = require('./userService');

// module to handle get request on localhost:3000 and load the registration form
exports.santaForm = (req, res) =>
{  
    res.sendFile('views/index.html', { root: '.' })
}  

// module to handle post request on localhost:3000 when user submits the registration form
// form data is captured and sent back as a response
exports.santaFormProcess = (req, res) =>
{  
   console.log(req.body);
   res.write('<h1> Registration Successfull :-) </h1>');
   res.write('<p> Name : </h1>'+ req.body.userid);
   res.write('<p> Username : </h1>'+ req.body.wish);
   const { name, wish } = req.body;
   const data = { name, wish };
   console.log('server data', data)
 
   // try {
     const usersData = userDatas.getUsersData();
     const user = usersData.find(user => user.username === name);
     console.log('userdata', usersData);
 
     if (!user) {
       console.log('User not registered')
       return res.redirect('views/pages/error.ejs');
     }
 
     const userProfilesData =  getUserProfilesData();
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
   res.end();
}  