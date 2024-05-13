const { request, response } = require('express')
const Note = require('../models/Note')
const Folder = require('../models/Folder')

const getNote = async (request, response) => {
    const title  = request.params.id;
    
    const folder = await Folder.findOne({ where: { title } })
    Note.findAll({where: {idFolder: folder.id}})
    .then((notes) => {
      response.status(200).send(notes);
    })
    .catch((error) => {
      console.error("Ошибка получения списка конспектов:", error);
      response.status(500).send("Ошибка получения списка конспектов");
    });
}

const getOneNote = async (request, response) => {
  const title  = request.params.title;
  console.log(title)
  Note.findOne({where: {title}})
    .then((note) => {
      response.status(200).send(note);
    })
    .catch((error) => {
      console.error("Ошибка получения  конспекта:", error);
      response.status(500).send("Ошибка получения конспекта");
    });
}

const postNote = async (request, response) =>{

  try{
    const {title, titleFolder, file} = request.body
    console.log(titleFolder)
    const idFolder = await Folder.findOne({where: {title: titleFolder}})
    const note = Note.create({
      title: title,
      idFolder:idFolder.id,
      file:file
    })
    response.status(201).json({note})
  } catch(e){
    console.log(e)
    response.status(400).json({message: 'creating note error'})
  }
}

module.exports = {
    getNote,
    postNote,
    getOneNote
}