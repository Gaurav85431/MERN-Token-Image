/*
// const appRoute = require('express').Router();  // in 1 line
// in 2 line
const express = require('express');
const appRoute = express.Router();

const Post = require('../model/TitleImageModel')

const multer = require('multer');
const uploadMiddleware = multer({ dest: 'public/' });
const fs = require('fs');

appRoute.use('/public', express.static(__dirname + '/public'));

appRoute.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path + '.' + ext;
  fs.renameSync(path, newPath);

  const { title } = req.body;
  const postDoc = await Post.create({
    title,
    image: newPath,

  });
  res.json(postDoc);
});





appRoute.get('/post', async (req, res) => {
  res.json(
    await Post.find()

  );
});



appRoute.get('/post/:id', async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id);
  res.json(postDoc);
})

module.exports = appRoute;
*/


// See my way 
const TitleImageModel = require('../model/TitleImageModel');
const Insert = async (req, res) => {
  try {

    const { title } = req.body;
    console.log("title is " + title);
    const image = req.file.filename;
    console.log("image is " + image)

    const newData = new TitleImageModel({
      title,
      image
    })
    console.log("w92382")
    const SaveNewData = await newData.save();
    res.status(200).send({
      message: "all data are",
      data: SaveNewData
    })

  } catch (error) {
    res.status(400).json({
      msg: "Error occured",
      error: error.message
    })
  }
}


const GetAllData = async (req, res) => {
  try {

    const allData = await TitleImageModel.find();
    // res.json(allData);
    res.status(200).json({
      message: "Data",
      data: allData
    })

  } catch (error) {
    res.status(400).send({
      message: "error occur",
      error: error.message
    })
  }
}

module.exports = {
  Insert,
  GetAllData
}