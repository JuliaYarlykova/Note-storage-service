const { request, response } = require('express')
const Note = require('../models/Note')

const getNote = (request, response) => {
    const id  = request.params.id;
    Note.findAll({ where: { idFolder: id } })
    .then((notes) => {
      response.status(200).send(notes);
    })
    .catch((error) => {
      console.error("Ошибка получения списка конспектов:", error);
      response.status(500).send("Ошибка получения списка конспектов");
    });
}

const postNote = (request, response) =>{
  try{
    const {title, idFolder, file} = request.body
    const note = Note.create({
      title: title,
      idFolder:idFolder,
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
    postNote
}