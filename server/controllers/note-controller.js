const { request, response } = require("express");
const Note = require("../models/Note");
const Folder = require("../models/Folder");
const File = require("../models/File");
const fs = require("fs");
const { Buffer } = require("node:buffer");
const AWS = require("aws-sdk");
const uuid = require("uuid");

const getNote = async (request, response) => {
  const title = request.params.id;

  const folder = await Folder.findOne({ where: { title } });
  Note.findAll({ where: { idFolder: folder.id } })
    .then((notes) => {
      response.status(200).send(notes);
    })
    .catch((error) => {
      console.error("Ошибка получения списка конспектов:", error);
      response.status(500).send("Ошибка получения списка конспектов");
    });
};

const getOneNote = async (request, response) => {
  const title = request.params.title;
  const obj = [];
  const note = await Note.findOne({ where: { title:title } });
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

const postNote = async (request, response) => {
  try {
    const { title, titleFolder } = request.body;
    const idFolder = await Folder.findOne({ where: { title: titleFolder } });
    const id1 = uuid.v1();
    
    console.log(request.files);
    for (const file of request.files) {
      File.create({
        id: uuid.v1(),
        data: fs.readFileSync(__basedir + "/uploads/" + file.filename),
        name: file.originalname,
        type: file.mimetype,
        idnote: id1,
      }).then((image) => {
        fs.writeFileSync(__basedir + "/uploads/" + image.name, image.data);
      });
    }
    Note.create({
      id: id1,
      title: title,
      idFolder: idFolder.id,
    });

    response.status(201).json({ message: "creating note success" });
  } catch (e) {
    console.log(e);
    response.status(400).json({ message: "creating note error" });
  }
};

const patchNote =
  (request,
  (response) => {
    const { title, idFolder } = request.body;

    Note.findOne({ where: { title: title } })
      .then((note) => {
        if (!note) {
          return response.status(404).send("папка не найдена");
        }
        note
          .update({
            title: title,
            idFolder: idFolder,
          })
          .then((updatedFolder) => {
            response.send(updatedFolder);
          })
          .catch((error) => {
            console.error("Ошибка обновления папки:", error);
            response.status(500).send("Ошибка обновления папки");
          });
        File.findAll({ where: { idnote: note.id } }).then((images) => {
          for (const image in images) {
            if (!(image in request.files)) {
              image
                .destroy()
                .then(() => {
                  response.send("пакпа успешно удалена");
                })
                .catch((error) => {
                  console.error("Ошибка удаления папки:", error);
                  response.status(500).send("Ошибка удаления папки");
                });
            }
          }
        });
      })
      .catch((error) => {
        console.error("Ошибка поиска папки для обновления:", error);
        response.status(500).send("Ошибка обновления папки");
      });
  });

const deleteNote = (request, response) => {
  const { title } = request.body;
  Note.findOne({ where: { title: title } })
    .then((note) => {
      if (!note) {
        response.status(404).send("конспект не найдена");
      } else {
        note
          .destroy()
          .then(() => {
            response.send("конспект успешно удален");
          })
          .catch((error) => {
            console.error("Ошибка удаления папки:", error);
            response.status(500).send("Ошибка удаления папки");
          });
      }
    })
    .catch((error) => {
      console.error("Ошибка поиска папки:", error);
      response.status(500).send("Ошибка удаления папки");
    });
};

module.exports = {
  getNote,
  postNote,
  getOneNote,
  patchNote,
  deleteNote,
};
