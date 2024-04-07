const { request, response } = require("express");
const CommonNote = require("../models/CommonNote");
const Note = require('../models/Note')
const User = require('../models/User')
const Folder = require('../models/Folder')

const getCommonNote = (request, response) => {
  CommonNote.findAll({ raw: true })
    .then((notes) => {
      response.status(200).send(notes);
    })
    .catch((error) => {
      console.error("Ошибка получения списка конспектов", error);
      response.status(500).send("Ошибка получения списка конспектов");
    });
};

const postCommonNote = async (request,response)=>{
  try {const { idNote } = request.body
  const note = await Note.findByPK(idNote);
  const folder = await Folder.findByPK(note.idFolder)
  const user = await User.findByPK(folder.idUser)
  const commonNote = CommonNote.create({
    title:note.title,
    author:user.username
  })
  response.status(201).json({commonNote})}
  catch {
    console.log(e);
    response.status(400).json({ message: "postCommonNote error" });
  }
}

module.exports = {
  getCommonNote,
  postCommonNote
};
