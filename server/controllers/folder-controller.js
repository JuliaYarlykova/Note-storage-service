const { response } = require("express");
const Folder = require("../models/Folder");

const getFolder = (request, response) => {
  const id  = request.params.id;
  console.log(id)
  Folder.findAll({ where: { idUser: id } })
    .then((folder) => {
      response.status(200).send(folder);
    })
    .catch((error) => {
      console.error("Ошибка получения списка папок:", error);
      response.status(500).send("Ошибка получения списка папок");
    });
};

module.exports = {
  getFolder,
};
