const LoginModel = require('../model/LoginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Token
const GeneratejwtToken = async ({ id }) => {
  const SecretKey = "Thisismysecretkey";
  // const payload   = hm payload ko lenge id se login me
  const Token = await jwt.sign(id, SecretKey, { expiresIn: '7d' })
  return Token;

}



const register = async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;
    const ExistingUser = await LoginModel.findOne({ email });

    // bcrypt pw
    const bcryptPw = await bcrypt.hash(password, 10)




    if (ExistingUser) {
      res.status(400).json({
        message: "Email already exist"
      })
    }
    const NewUser = new LoginModel({
      name, email, password: bcryptPw, contact
    })



    const SaveNewUser = await NewUser.save();
    res.status(200).json({
      message: "New user registered",
      data: SaveNewUser

    })

  } catch (error) {
    console.log("Error is " + error);
    res.status(500).json({
      message: error.message
    })
  }
}

const login = async (req, res) => {
  try {

    const { email, password } = req.body;
    const ValidEmail = await LoginModel.findOne({ email: email });

    const ValidBcryptedPassword = await LoginModel.findOne({ password });

    // compare password with db:
    const CorrectPassword = await bcrypt.compare(password, ValidBcryptedPassword);
    console.log("psw" + password)
    console.log("password is " + CorrectPassword)
    // Token generate------
    const userID = ValidEmail._id;
    console.log("User id i " + userID);
    // const Token = await GeneratejwtToken({ id: userID })
    // console.log("toekn is " + Token)



    // if (!ValidEmail || !CorrectPassword) {
    //   res.status(400).json({
    //     message: "Invalid Credential"
    //   })
    // }
    // else {
    //   res.status(200).json({
    //     message: "Login ",
    //     data: {
    //       name: ValidEmail.name,
    //       email: ValidEmail.email,
    //       contact: ValidEmail.contact,
    //       Token: Token

    //     }

    if (ValidEmail && CorrectPassword) {
      res.status(200).json({
        message: "Login ",
        data: {
          name: ValidEmail.name,
          email: ValidEmail.email,
          contact: ValidEmail.contact,
          // Token: Token

        }


      })


    }
    else if (!CorrectPassword || ValidEmail) {
      res.status(400).json({
        message: "Invalid Credential"
      })


    }
    else {

      res.status(400).json({
        message: "Invalid Credential"
      })


    }

  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}

const loggedIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const ValidEmail = await LoginModel.findOne({ email });
    if (!ValidEmail) {
      res.status(400).json({
        message: "Invalid mail"
      })
    }


    const ValidPassword = await bcrypt.compare(password, ValidEmail.password);

    // const Token = await GeneratejwtToken({ id: userID })

    if (ValidPassword) {
      res.status(200).json({
        message: "login success",
        data: {
          name: ValidEmail.name,
          email: ValidEmail.email,
          contact: ValidEmail.contact,
          // Token: Token
        }
      })
    }


  } catch (error) {
    res.status(400).json({
      message: "error occur while logging"
    })
  }
}

module.exports = {
  register,
  login,
  loggedIn
}