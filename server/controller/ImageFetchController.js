const ImageModel = require('../model/ImageFetch');
const path = require('path');

const InsertData = async (req, res) => {
  try {

    const { title } = req.body;
    const image = req.file.filename;
    const newData = new ImageModel({
      title,
      image
    })

    const saveData = await newData.save();
    res.status(200).send({
      message: "Save data ",
      data: saveData,
    })



  } catch (error) {
    console.log("Error is " + error)
    res.status(400).send({
      message: "Error Occur",
      error: error.message
    })
  }
}


// fetch data 

const FetchData = async (req, res) => {
  try {

    const AllData = await ImageModel.find();

    // AllData.map((ttl) => {
    //   res.status(201).send({
    //     data: ttl.title
    //   })
    // })

    res.status(200).send({
      message: "All data are - ",
      data: AllData
    })



  } catch (error) {
    console.log("Error is " + error)
    res.status(400).send({
      message: "Error Occur",
      error: error.message
    })

  }
}



// fetch image by image name
const FetchImage = async (req, res) => {
  try {

    // const image = req.body.image;
    // const imageMatch = await ImageModel.findOne({ image: image })

    const qid = req.query.id;
    const pid = req.params.id;


    const id = req.body.id || qid || pid;
    const idMatch = await ImageModel.findOne({ _id: id });

    // if (imageMatch || idMatch) {
    if (idMatch) {
      // res.status(200).sendFile

      const idImg = await idMatch.image;
      // const imgImg = imageMatch.image;
      // const ImageIs = await imageMatch.image || await idMatch.image;
      // const ImageIs = idImg || imgImg;

      const getMyImage = (imgNm) => {
        const imagePath = path.join(__dirname, '..', 'public', imgNm);

        return imagePath;

      }
      const displayImage = getMyImage(idImg);
      res.sendFile(displayImage);




      // res.sendfile()
    }

    else {
      res.status(400).json({
        message: "Id not match"
      })
    }




  } catch (error) {
    console.log("Error is " + error)
    res.status(400).send({
      message: "Error Occur",
      error: error.message
    })
  }
}


module.exports = {
  InsertData,
  FetchData,
  FetchImage
}