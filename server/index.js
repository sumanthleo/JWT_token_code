const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const routers = require("./routers/router");
dotenv.config();
const db = require("./config/dataBase");

//database connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", routers);

//server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is connected ${port}`);
});
