const TokenModel = require('../model/TokenModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const isExistingUser = await TokenModel.findOne({ email });
    if (isExistingUser) {
      console.log("Existing User ");
      res.status(400).json({
        message: "Existing user log in ",

      })
    }

    const sPassword = await bcrypt.hash(password, 10);

    const newUser = new TokenModel({
      name,
      email,
      password: sPassword
    })

    const SaveNewUser = await newUser.save();
    res.status(200).json({
      message: "Registered Successful",
      data: SaveNewUser
    })


  } catch (error) {
    console.log("error is ", error);
    res.status(400).json({
      message: "Error occured",
      error: error.message
    })
  }
}

const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const ExistingUser = await TokenModel.findOne({ email });
    if (!ExistingUser) {
      res.status(400).json({
        message: "Not existing User first register then login",
      })
    }

    if (!password) {
      res.status(400).json({
        message: "Enter Password",
      })
    }


    // Check for Password
    const HashedPassword = await ExistingUser.password;

    const TruePassword = await bcrypt.compare(password, HashedPassword);

    const myId = await ExistingUser._id;
    const myEmail = await ExistingUser.email;

    // TOken  --------------1
    // const SECRET_KEY="ThisISmyScretkey";
    // const token = await jwt.sign({ _id: myId, email: myEmail },SECRET_KEY)


    // TOken ------------------2
    const SECRET_KEY = "ThisISmyScretkey";
    const payLoad = { _id: myId, email: myEmail }
    const token = await jwt.sign(payLoad, SECRET_KEY)





    if (TruePassword) {
      res.status(200).send({
        success: true,
        message: "Login successful",
        data: ExistingUser,
        token: token

      })
    }



  } catch (error) {
    console.log("error is ", error);
    res.status(400).json({
      message: "Error occured",
      error: error.message
    })
  }
}

module.exports = {
  register,
  login
}