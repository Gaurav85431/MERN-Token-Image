const NameModel = require('../model/NameEmail');
const setValue = async (req, res) => {
  try {
    const { name, email } = req.body;

    const data = new NameModel({
      name,
      email
    })
    const saveData = await data.save();
    res.status(200).json({
      message: "Data saved",
      data: saveData
    })


  } catch (error) {

    res.status(400).json({
      message: "ERROR",
      error: error.message
    })

  }
}


const getValue = async (req, res) => {
  try {

    const AllData = await NameModel.find();
    return res.status(200).json({
      message: "All data are",
      data: AllData
    })

  } catch (error) {
    return res.status(400).json({
      message: "Error occured",
      error: error.message
    })
  }
}
module.exports = {
  setValue,
  getValue
}