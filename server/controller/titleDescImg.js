const myModel = require('../model/titleDescImg');
const path = require('path');

const insertData = async (req, res) => {
  try {

    const { title, description } = req.body;
    const image = req.file.filename;

    const myData = new myModel({
      title,
      description,
      image
    })

    const saveData = await myData.save();
    return res.status(200).send({
      message: "Registered",
      data: saveData
    })



  } catch (error) {

    return res.status(400).send({
      message: "Error",
      error: error.message
    })


  }
}

const showData = async (req, res) => {
  try {

    const mydatas = await myModel.find();
    // const mydata = await myModel.find();

    // const myalldata = mydata.map((val) => {

    //   title: val.title;
    //   description: val.description;
    //   image: val.image;
    // })

    console.log("all datas are " + mydatas);
    // console.log("myarray me all datas are " + myalldata);

    /*
    res.status(200).json({
      success: true,
      message: "All datas are",
      // data: myalldata
      data: { mydata }
    })
    */



    //  GET all data with images;::::-
    const mydata = mydatas.map(item => ({

      imagePath: path.join(__dirname, '..', 'public', item.image),

      title: item.title,
      description: item.description,
      // image: imagePath
      image: item.image

    }));

    res.status(200).json({
      success: true,
      message: "All data are",
      data: { mydata }
    });


    console.log("my data is " + mydata);
    console.log("my title data is " + mydata.title);
    console.log("my desc data is " + mydata.description);




  } catch (error) {


    return res.status(400).send({
      message: "Error",
      error: error.message
    })


  }
}


// --------
// get image by image name
const get_image = async (req, res) => {

  try {
    const image = req.params.images;

    const getMyImages = (imageName) => {

      const imagePath = path.join(__dirname, '..', 'images', imageName);
      return imagePath;

    };

    const imageName = image;
    const displayImage = getMyImages(imageName);
    res.sendFile(displayImage);
  }
  catch (error) {
    res.send(error.message);
  }


}



module.exports = {
  insertData,
  showData
}