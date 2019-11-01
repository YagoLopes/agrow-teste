const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose
  .connect("mongodb://mongodb/tindev", { useNewUrlParser: true })
  .then(() => {
    console.log("#############################################");
    console.log("Connected to MongoDB");
    console.log("#############################################");
  })
  .catch(err => {
    console.log("#############################################");
    console.log(err);
    console.log("#############################################");
    process.exit(1); //quit the process
  });

  app.use(express.json());
app.use(cors());
app.use(routes);



app.listen(4000);