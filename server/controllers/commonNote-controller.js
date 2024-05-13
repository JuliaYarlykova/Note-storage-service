const { request, response } = require("express");
const CommonNote = require("../models/CommonNote");
const Note = require('../models/Note')
const User = require('../models/User')
const File =  require('../models/File')
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
const getOneNote = async (request, response) => {
  const title = request.params.title;
  const obj = [];
  const note = await CommonNote.findOne({ where: { title:title } });
  console.log(note.id)
  await File.findAll({ where: { idnote: note.id } })
    .then((notes) => {
      for (const note of notes) {
        const encode = (data) => {
          let buf = Buffer.from(data);
          let base64 = buf.toString("base64");
          return base64;
        };
        const html = `data:${note.type};base64,${encode(note.data)}`;
        obj.push(html);
      }
    })
    .catch((error) => {
      console.error("Ошибка получения  конспекта:", error);
      response.status(500).send("Ошибка получения конспекта");
    });
    console.log(obj)
  response.status(200).send({ note, obj });
};

module.exports = {
  getCommonNote,
  postCommonNote,
  getOneNote
};
