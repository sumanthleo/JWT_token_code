const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const routers = require("./routers/router");
const cors = require("cors");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/", routers);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is connected ${port}`);
});
