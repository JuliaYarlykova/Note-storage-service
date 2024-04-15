const { request, response } = require('express')
const Note = require('../models/Note')
const Folder = require('../models/Folder')
const fs = require("fs");
const { Buffer } = require('node:buffer');
const AWS = require('aws-sdk')

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
      const s3 = new AWS.S3({
        accessKeyId: '################',
        secretAccessKey: '###############################',
        region: '###########'
      })
    
      const params = {
        Bucket: '#########',
        Key: '########'
      }
    
      const encode = (data) => {
        let buf = Buffer.from(data);
        let base64 = buf.toString('base64');
        return base64
      }
    
      s3.getObject(params, (err, rest) => {
        const html = `<img src='data:${note.type};base64,${encode(note.data)}'/>`
        response.status(200).send({note, html});
      })
      
    })
    .catch((error) => {
      console.error("Ошибка получения  конспекта:", error);
      response.status(500).send("Ошибка получения конспекта");
    });
}

const postNote = async (request, response) =>{
  try{
    console.log(request.body)
    const {title, titleFolder} = request.body
    const idFolder = await Folder.findOne({where: {title: titleFolder}})
    for (const file of request.files)
    {Note.create({
      title: title,
      idFolder:idFolder.id,
      data: fs.readFileSync(
        __basedir + "/uploads/" + file.filename
      ),
      name: file.originalname,
      type: file.mimetype,
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/uploads/" + image.name,
        image.data
      );
    });}
    response.status(201).json({message: 'creating note success'})
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