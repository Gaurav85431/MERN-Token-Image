const NotesModel = require('../model/NotesModel');

const createNotes = async (req, res) => {
  try {

    const { title, notes } = req.body;
    const myNotes = new NotesModel({
      title,
      notes
    });
    const saveNote = await myNotes.save();

    res.status(200).send({  //send= all fromat me ; json = sirf json me 
      success: true,
      message: "Notes Save",
      data: saveNote

    })

  } catch (error) {


    res.status(400).json({
      success: false,
      message: "An error occur",
      error: error.message
    })
  }
}


const getNotes = async (req, res) => {
  try {

    const allData = await NotesModel.find();
    res.status(200).json({
      success: true,
      message: "All Notes are",
      data: {
        allData,
      }
    })


  } catch (error) {
    res.status(400).json({
      success: false,
      message: "An Error occur",
      error: error.message
    })

  }

}



module.exports = { createNotes, getNotes };