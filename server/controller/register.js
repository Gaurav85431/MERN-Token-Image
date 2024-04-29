const express = require('express')
const router = express.Router();

// const router =require('express').Router();

const user = require('../model/userModel');

router.post('/register', async (req, res) => {

  try {

    // const { name, email, password } = req.body;//
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new user({
      name,
      email,
      password
    });
    const saveUser = await newUser.save();

    res.status(200).json({
      success: true,
      data: saveUser,
      message: "Register success"
    })





  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Error ",
      data: error.message
    })
  }


})


router.post('/login', async (req, res) => {


  try {

    const email = req.body.email;
    const isExist = await user.findOne({ email });

    if (!isExist) {
      return res.status(400).send({
        message: 'User not exist',
        success: false
      })
    }

    else {
      const password = req.body.password;

      const CorrectPassword = await user.findOne({ password });

      //  const data= isExist.name; // Check it   => name print of corrosponding email

      return res.status(200).send({
        success: true,
        message: "Login successfully",
        // data: { CorrectPassword }  //agar kuch hi data ko show krna hia
        data: { name: isExist.name, id: isExist._id }

      })


    }


  } catch (error) {
    console.log("error", error.message);
    return res.status(400).send({
      success: false,
      message: "Error"

    })
  }

})


module.exports = router;