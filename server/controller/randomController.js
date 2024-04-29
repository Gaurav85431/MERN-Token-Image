const RandomModel = require('../model/randomModel');
const path = require('path');

const Insertion = async (req, res) => {
  try {

    const { title, description } = req.body;
    const image = req.file.filename;

    const myData = new RandomModel({
      title,
      description,
      image: image
    })
    const saveData = await myData.save();
    res.status(200).json({
      message: "Data Save Successfully",
      data: saveData
    })


  } catch (error) {
    res.status(400).json({
      message: "An Error occur",
      error: error.message
    })

  }
}

const showData = async (req, res) => {
  try {

    const AllData = await RandomModel.find();
    const dispData = AllData.map((itm) => ({
      title: itm.title,
      description: itm.description,
      image: itm.image,
      id: itm._id
    }))

    res.status(200).json({
      message: "All Data are ",
      data: dispData
    })


  } catch (error) {
    res.status(400).json({
      message: "An Error Occured",
      error: error.message
    })

  }
}

const showImage = async (req, res) => {
  try {

    const id = req.params.id;
    const isValidId = await RandomModel.findOne({ _id: id });

    if (!isValidId) {
      return res.status(400).json({
        message: "This ID is not valid"
      })
    }

    const ImageName = await isValidId.image;
    console.log("img nam ", ImageName)

    // function defination
    const getMyImg = (imgnm) => {

      const imagePath = path.join(__dirname, '..', 'public', imgnm);
      return imagePath;

    }

    // function call
    const dispImg = getMyImg(ImageName);
    console.log("display img is ", dispImg);

    res.sendFile(dispImg);




  } catch (error) {
    console.log("Error is ---------------->", error)
  }
}

module.exports = {
  Insertion,
  showData,
  showImage
}