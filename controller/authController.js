const { where } = require("sequelize");
const db = require("../db/models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const generateToken = (payload) => {
  console.log(process.env.JWT_SECRET_KEY);
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = async (req, res, next) => {
  const body = req.body;

  const checkExist = await db.user.findOne({ where: { email : body.email } });
  if (checkExist) {
    return res
      .status(401)
      .json({ status: "fail", message: "User Already Exists" });
  }

  const newUser = await db.user.create({
    name: body.name,
    email: body.email,
    password: body.password,
    phone: body.phone,
  });

  const result = newUser.toJSON();
  result.token = generateToken({
    id: result.id,
  });

  if (!result) {
    return res.status(400).json({
      status: "fail",
      message: "Cannot create user",
    });
  }
  return res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: result,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ status: "fail", message: "Email and Password must be provided" });
  }

  const result = await db.user.findOne({ where: { email } });
  if (!result || (await password != result.password)) {
    return res
      .status(401)
      .json({ status: "fail", message: "Incorrect Email or Password" });
  }

    const token = generateToken({
        id: result.id,
    })
    return res
      .status(200)
      .json({ status: "success", message: "Login successful", token});
  
};

module.exports = {signup, login};
