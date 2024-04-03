
const { response } = require("express");
const Folder = require("../models/Folder");


const getFolder = (request, response) => {
    Folder.findAll({ raw: true })
    .then((folder) => {
      response.status(200).send(folder);
    })
    .catch((error) => {
      console.error("Ошибка получения списка папок:", error);
      response.status(500).send("Ошибка получения списка папок");
    });
}


module.exports = {
    getFolder,
}