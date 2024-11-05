const { where } = require("sequelize");
const db = require("../db/models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const generateToken = (payload) => {
  console.log(process.env.JWT_SECRET_KEY);
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = async (req, res, next) => {
  const body = req.body;

  const checkExist = await db.user.findOne({ where: { email: body.email } });
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
  if (!result) {
    return res
      .status(401)
      .json({ status: "fail", message: "Incorrect Email or Password" });
  }
  const isMatch = await bcrypt.compare(password, result.password);
  if (!isMatch) {
    return res
      .status(401)
      .json({ status: "fail", message: "Incorrect Password" });
  }

  const token = generateToken({
    id: result.id,
  });
  return res
    .status(200)
    .json({ status: "success", message: "Login successful", token });
};

const authentication = async (req, res, next) => {
  let idToken = "";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    idToken = req.headers.authorization.split(" ")[1];
    console.log("Token", idToken);
  }

  if (!idToken) {
    const error = new Error("Please Login to access");
    error.statusCode = 401;
    return next(error);
  }
  
  try {

    const tokenDetail = jwt.verify(idToken, process.env.JWT_SECRET_KEY);
    const freshUser = await db.user.findByPk(tokenDetail.id);

    if (!freshUser) {
      const error = new Error("User Doesn't Exist");
      error.statusCode = 400; 
      return next(error);
    }

    req.user = freshUser;
    return next();

  } catch (err) {
    const error = new Error("Invalid or expired token");
    error.statusCode = 401;
    return next(error);
  }
};

module.exports = { signup, login, authentication };
