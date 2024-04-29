const imgModel = require('../model/imageModel');
const insertData = async (req, res) => {


  try {

    const { name, mobile } = req.body;
    // const image = req.file.filename;

    const isAlreadyMobile = await imgModel.findOne({ mobile });
    if (isAlreadyMobile) {
      return res.status(402).json({
        message: "Mobile No. already exist",


      })
    }

    const userData = new imgModel({
      name,
      mobile,
      // image
    })

    const saveData = await userData.save();

    res.status(200).json({
      message: "Data saved",
      data: saveData
    })



  } catch (error) {
    console.log("The error is ", error);

  }


}




const getImage = async (req, res) => {
  try {

    const data = await imgModel.find();
    res.status(200).json({
      message: "All data are ",
      data: data
    })


  } catch (error) {
    res.status(401).json({
      message: "Error occur",
      error: error.message
    })
  }
}







module.exports = {
  insertData,
  getImage
}