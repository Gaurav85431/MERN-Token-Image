const { create_token } = require('../helper/token');
const newUserModel = require('../model/newUserModel');
const bcrypt = require('bcrypt');

const voteModel = require('../model/voteModel');




const register = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const isExist = await newUserModel.findOne({ email });
    if (isExist) {
      return res.status(400).json({
        success: false,
        message: "User already registered Please Login"
      })
    }

    const image = req.file.filename;

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new newUserModel({
      name,
      email,
      password: hashPassword,
      image

    })

    const saveUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "User Register",
      data: { saveUser }
      // If i want to send only 3 data to frontend. Password i dont want to send.
    })

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: 'Error while register',
      error: error.message
    })
  }
}

// getUser ---> check

const getUser = (req, res) => {
  res.status(200).json({
    message: "WELCOME USER"
  })
}



// Login
const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const isUser = await newUserModel.findOne({ email });
    if (!isUser) {
      return res.status(400).json({
        success: false,
        message: "User Not Register",
        data: {
          message: "UnRegister User"
        }
      })
    }

    const checkHashPassword = await bcrypt.compare(password, isUser.password);
    // console.log("password ", checkHashPassword);


    if (checkHashPassword) {

      const Token = await create_token(isUser._id);

      return res.json({
        success: true,
        // data: { token: Token }
        data: {
          message: "Logged In ",
          token: Token
        }

      })
    }




  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Error Occur while login",
      data: "Error in Catch"
    })
  }
}


const getVoterName = async (req, res) => {
  try {

    const name = req.body.name;
    const age = req.body.age;

    const voter = new voteModel({
      name,
      age
    })

    const vote = await voter.save();

    res.status(200).send({
      success: true,
      message: "VOTER info",
      data: vote

    })


    // if (age >= 18) {
    //   res.status(200).json({
    //     success: true,
    //     message: "Elegible for",
    //     data: age,
    //   })
    // }


  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  register,
  getUser,
  login,
  getVoterName
}