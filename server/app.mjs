import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require('express')
const Sequelize = require('sequelize')
const cors = require('cors');
const app = express()
const PORT = 7335

// app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Разрешить запросы только с этого источника
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));


export const sequelize = new Sequelize('noteservice', "root", '1234', {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  define: {
    timestamps: false
  }
});

try {
  await sequelize.authenticate()
  console.log('Соединение с БД было успешно установлено')
} catch (e) {
  console.log('Невозможно выполнить подключение к БД: ', e)
}

export const User = sequelize.define('user', {
  id_user: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  login: Sequelize.STRING,
  password: Sequelize.STRING,
  username: Sequelize.STRING
})

export const Folder = sequelize.define('folder', {
  id_folder:{
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  id_user:{
    type:Sequelize.INTEGER,
    foreignKey: true
  }
})

sequelize.sync().then(() => {
  app.listen(PORT, (error) => {
    error ? console.log(error) : console.log("listening port 8080");
  });
});

app.get("/folder", function(request, response){
  Folder.findAll({ raw: true }).then(folder => {
      response.send(folder);
  }).catch(error => {
    console.error('Ошибка получения списка папок:', error);
    response.status(500).send("Ошибка получения списка папок");
  });
});









