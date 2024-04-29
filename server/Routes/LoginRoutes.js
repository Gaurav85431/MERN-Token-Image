const LoginRoutes = require('express').Router();

const LoginCntrl = require('../controller/LoginController');

LoginRoutes.post('/SignUp', LoginCntrl.register);
LoginRoutes.post('/SignIn', LoginCntrl.login);


//  With Token::---
const LoginCtrlToken = require('../controller/LoginTokenController');
LoginRoutes.post('/SignUpT', LoginCtrlToken.register)
LoginRoutes.post('/SignInT', LoginCtrlToken.login)
LoginRoutes.post('/SignInTT', LoginCtrlToken.loggedIn)



// TOken ko save karne ka (SaveToken.js)
const SaveToken = require('../controller/SaveToKEN');
LoginRoutes.post('/registerToken', SaveToken.register);
LoginRoutes.post('/loginToken', SaveToken.login);


module.exports = LoginRoutes;