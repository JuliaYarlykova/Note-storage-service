import { createRequire } from "module";

const require = createRequire(import.meta.url);
const User = require("./models/User");
const sequelize = require("./models/sequelize");
const express = require("express");
const cors = require("cors");
const FolderRouter = require("./routes/folder-routes");
const UserRouter = require("./routes/user-router");
const NoteRouter = require('./routes/note-router')
const CommonNoteRouter = require('./routes/commonNote-router')
const app = express();
const PORT = 7335;

app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:5173", // Разрешить запросы только с этого источника
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(FolderRouter);
app.use(UserRouter);
app.use(CommonNoteRouter);
app.use(NoteRouter);

try {
  await sequelize.authenticate();
  console.log("Соединение с БД было успешно установлено");
} catch (e) {
  console.log("Невозможно выполнить подключение к БД: ", e);
}

sequelize.sync().then(() => {
  app.listen(PORT, (error) => {
    error ? console.log(error) : console.log("listening port 8080");
  });
});
