const { response, request } = require("express");
const Folder = require("../models/Folder");
const { where } = require("sequelize");

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

const deleteFolder = (request, response) => {
  const {title, idUser} = request.body
  Folder.findOne({ where: {title: title, idUser: idUser}}).then((folder)=>{
  if (!folder) {
    response.status(404).send("папка не найдена");
  } else {
    folder.destroy().then(() => {
      response.send("пакпа успешно удалена");
    }).catch(error => {
      console.error('Ошибка удаления папки:', error);
      response.status(500).send("Ошибка удаления папки");
    });
  }
}).catch(error => {
  console.error('Ошибка поиска папки:', error);
  response.status(500).send("Ошибка удаления папки");
})
}

const patchFolder = (request, response) =>{
  const {titleold, title, idUser} = request.body

  Folder.findOne({where: {title:titleold, idUser:idUser}}).then((folder)=>{
    if (!folder) {
      return response.status(404).send("папка не найдена");
    }
    folder.update({
      title:title,
      idUser:idUser
    }).then(updatedFolder => {
      response.send(updatedFolder);
    }).catch(error => {
      console.error('Ошибка обновления папки:', error);
      response.status(500).send("Ошибка обновления папки");
    });
  }).catch(error => {
    console.error('Ошибка поиска папки для обновления:', error);
    response.status(500).send("Ошибка обновления папки");
  })

}



module.exports = {
  getFolder,
  postFolder,
  deleteFolder,
  patchFolder
};
