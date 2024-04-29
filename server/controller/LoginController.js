const LoginModel = require('../model/LoginModel');
const register = async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;
    const ExistingUser = await LoginModel.findOne({ email });
    if (ExistingUser) {
      res.status(400).json({
        message: "Email already exist"
      })
    }
    const NewUser = new LoginModel({
      name, email, password, contact
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
    const ValidPassword = await LoginModel.findOne({ password });
    if (!ValidEmail || !ValidPassword) {
      res.status(400).json({
        message: "Invalid Credential"
      })
    }
    else {
      res.status(200).json({
        message: "Login ",
        data: {
          name: ValidEmail.name,
          email: ValidEmail.email,
          contact: ValidEmail.contact

        }
      })
    }

  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}


module.exports = {
  register,
  login
}