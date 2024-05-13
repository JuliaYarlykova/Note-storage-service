const { response, request } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const generateAccessToken = (id, username) => {
  const payload = {
    id,
    username,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

const registration = async (request, response) => {
  try {
    const errors = validationResult(request);
    const { login, password, username } = request.body;
    if (!errors.isEmpty()) {
      return response
        .status(400)
        .json({ message: "registration error", errors });
    }
    const candidate = await User.findOne({ where: { login } });
    if (candidate) {
      return response
        .status(400)
        .json({ message: "user with such username already exist" });
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = User.create({
      login: login,
      password: hashPassword,
      username: username,
    });
    response.status(201).json({ login, username});
  } catch (e) {
    console.log(e);
    response.status(400).json({ message: "registration error" });
  }
};
const login = async (request, response) => {
  try {
    const { login, password } = request.body;
    const candidate = await User.findOne({ where: { login } });
    if (!candidate) {
      return response
        .status(400)
        .json({ message: `пользователь ${login} не найден` });
    }
    const validPassword = bcrypt.compareSync(password, candidate.password);
    if (!validPassword) {
      return response.status(400).json({ message: `пароль неверный` });
    }
    const token = generateAccessToken(candidate.id, candidate.username);
    const username = candidate.username
    const id = candidate.id
    response.status(201).json({ login, username, id });
  } catch (e) {
    console.log(e);
    response.status(400).json({ message: "login error" });
  }
};
const GetUser = (request, response) => {
  try {
    response.json("work");
  } catch (e) {}
};

module.exports = {
  registration,
  login,
  GetUser,
};
