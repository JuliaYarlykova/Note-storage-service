const { request, response } = require("express");
const CommonNote = require("../models/CommonNote");

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
  const other = await CommonNote.findOne({ where: { idNote } });
  if (other){
    response
        .status(400)
        .json({ message: "note with such id already exist" });
  }
  const commonNote = CommonNote.create({
    idNote:idNote
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
