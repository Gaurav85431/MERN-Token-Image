const myModel = require('../model/nameEmlCntcModel');

const setInfo = async (req, res) => {
  try {

    const { name, contact, email } = req.body;

    const isExist = await myModel.findOne({ email });
    if (isExist) {
      res.status(400).json({
        success: false,
        message: "Email already exist"
      })
    }

    const mydata = new myModel({
      name,
      email,
      contact
    });
    const saveData = await mydata.save();
    res.status(200).json({
      success: true,
      message: "Data entered",
      // data: saveData //dono case me data aata hai
      data: mydata //dono case me data aata hai
    })

  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error occur",
      error: error.message
    })
  }
}

const getInfo = async (req, res) => {
  try {

    const AllData = await myModel.find();

    res.status(200).json({
      success: true,
      message: "All data are",
      data: AllData
    })



  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error occur",
      error: error.message
    })

  }
}

module.exports = {
  setInfo,
  getInfo
}