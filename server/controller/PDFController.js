const pdfModel = require('../model/PDFModel');

const setData = async (req, res) => {
  try {

    const name = req.body.name;
    const email = req.body.email;
    const image = req.file.fileName;


    const newData = new pdfModel({
      name,
      email,
      image
    })

    const saveData = await newData.save();

    res.status(200).send({
      message: "Data save",
      data: saveData
    })



  } catch (error) {
    return res.status(400).send({

      message: "Error while set data",
      error: error.message

    })
  }
}


const getData = async (req, res) => {
  try {

  } catch (error) {

  }
}


module.exports = {
  setData,
  getData
}