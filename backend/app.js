const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blog-routes");
const router = require("./routes/user-routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://Vincent:isaac1989@ap.hyolreh.mongodb.net/Ugah?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("connected To Database and Listening To Localhost 5000")
  )
  .catch((err) => console.log(err));
