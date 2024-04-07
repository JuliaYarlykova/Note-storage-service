const { response, request } = require("express");
const Folder = require("../models/Folder");

const getFolder = (request, response) => {
  const id = request.params.id;
  Folder.findAll({ where: { idUser: id } })
    .then((folder) => {
      response.status(200).send(folder);
    })
    .catch((error) => {
      console.error("Ошибка получения списка папок:", error);
      response.status(500).send("Ошибка получения списка папок");
    });
};

const postFolder = (request, response)=>{
  try{
    const {title, idUser} = request.body
    const folder = Folder.create({
      title: title,
      idUser: idUser
    })
    response.status(200).json({folder})
  } catch (e){
    console.log(e)
    response.status(400).json({message: 'creating folder error'})
  }
}

module.exports = {
  getFolder,
  postFolder
};
