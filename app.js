require("dotenv").config({ path: `${process.cwd()}/.env` });

const express = require("express");
const authRouter = require("./route/authRoute.js");
const orderRouter = require("./route/orderRoute.js");
const adminRouter = require("./route/adminRoute.js");
const courierRouter = require("./route/courierRoute.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/order", orderRouter);
app.use("/admin", adminRouter);
app.use("/courier",courierRouter);
app.use("/*", (req, res, next) => {
  res.status(404).json({
    status: "Error",
    message: "Path Not Found",
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Api is working",
  });
});

//const PORT = process.env.APP_PORT || 4000;
const PORT = 4000;
//const HOST = 'tools3_project-db-1 ';

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
