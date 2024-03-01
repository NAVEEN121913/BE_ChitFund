const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://sakthikumar:5ZCd3N3mdBhB5Esi@cluster0.adfvmtw.mongodb.net/",
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});
