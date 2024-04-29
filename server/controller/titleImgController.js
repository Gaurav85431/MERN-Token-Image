const myModel = require('../model/TitleImgModel');
const path = require('path');

const insertData = async (req, res) => {
  try {

    const title = req.body.title;
    const image = req.file.filename;

    const mydata = new myModel({
      title,
      image
    });
    const savedData = await mydata.save();

    res.status(200).json({
      success: true,
      message: "save data",
      data: savedData
    })


  } catch (error) {

    res.status(400).json({
      success: false,
      message: "error occur",
      error: error.message
    })

  }
}


const getData = async (req, res) => {
  try {
    const allData = await myModel.find();


    // 

    // const alldata = allData.map(item => ({

    //   // imagePath: path.join(__dirname, '..', 'public', item.image),
    //   title: item.title,
    //   // image: imagePath
    //   image: item.image
    // }));

    // console.log("all data from get and post wla --****" +  alldata)
    // 


    // *****

    const getImagePath = (imageName) => {

      const imagePath = path.join(__dirname, '..', 'public/');
      // console.log("my path in func is " + imagePath);
      return imagePath;
    };

    // const imageName = alldata.image;
    const imageName = allData.image;
    // const imagePath = getImagePath("imageName");
    const imagePath = getImagePath("imageName");

    res.sendFile(imagePath);


    const MyTitle = allData.title;

    console.log("all data aare" + allData)

    console.log("Title and Image is " + MyTitle + " and " + imagePath);

    allData.map((itm) => {  //savi data per hmne path lagana thha to hmne path lagaya map ka use krke
      itm.image = imagePath + itm.image
    })

    // *****


    res.status(200).json({
      success: true,
      message: "all data",
      data: allData
      //data: alldata
      // data: {
      //   title: MyTitle,
      //   image: imagePath
      // }
    })


  } catch (error) {
    res.status(400).json({
      success: true,
      message: "an error occur",
      error: error.message
    })

  }
}




const updateData = async (req, res) => {
  try {

    const userId = req.body.userId;
    const newTitle = req.body.title; //title variable me body se data come
    const newImage = req.file.filename; // routes me upload.single('image') hai to image variable me image aayega  body se.

    const isValidTitle = await myModel.findOne({ _id: userId });


    if (!isValidTitle) {

      res.status(400).json({
        success: false,
        message: "Invalid id",

      })

    }


    // update data by  findone se hi
    isValidTitle.title = newTitle,
      isValidTitle.image = newImage

    const updatedData = await isValidTitle.save();



    // by updateONe
    // const updatedData = await myModel.updateOne({ _id: userId }, {
    //   $set: {
    //     title: newTitle,
    //     image: newImage
    //   }
    // })

    res.status(200).json({
      success: true,
      message: "data updated",
      data: { updatedData }
    })

  } catch (error) {

    res.status(400).json({
      success: false,
      message: "error occur",
      error: error.message
    })

  }
}




const deleteData = async (req, res) => {
  try {

    const _id = req.body.userId;

    const isValidTitle = await myModel.deleteOne({ _id });
    if (!isValidTitle) {
      res.status(400).json({
        success: false,
        message: "Error occur",

      })
    }

    res.status(200).send({
      success: true,
      message: "data deleted successfully",

    })

    // const deletedData = await myModel.deleteOne({ _id });

    // res.status(200).json({
    //   success: true,
    //   message: "data deleted",
    //   data: deletedData
    // })


  } catch (error) {
    console.log("error is --------" + error)
    console.log("error is --------" + error.message)
    res.status(400).json({
      success: false,
      message: "Error occured",
      error: error.message
    })
  }
}



module.exports = {
  insertData,
  getData,
  updateData,
  deleteData

}