const mongoose = require("mongoose");
const  url = process.env.URL;

mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Database is conect"))
  .catch((err) => console.log(err));
