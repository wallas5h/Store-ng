import { urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import "express-async-errors";
import rateLimit from "express-rate-limit";
import { config } from "./config/config";
import { checkoutRouter } from "./routes/checkoutRouter";
require("dotenv").config();

const { PORT = 3001 } = process.env;

const corsOptions = {
  origin: config.corsOrigin,
  credentials: true,
  optionSuccessStatus: 200,
};

const limiter = rateLimit({
  windowMs: 1000,
  max: 100,
});

const app = express();

app.use(cors(corsOptions));

app.use(cookieParser());

app.use(limiter);

app.use(express.json());
app.use(express.static("public"));

app.use(
  urlencoded({
    extended: true,
  })
);

//routing
app.use("/api/checkout", checkoutRouter);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", config.corsOrigin);
  next();
});

app.listen(3001, "0.0.0.0", () => {
  console.log("server started at http://localhost:" + PORT);
});
