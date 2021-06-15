const express = require("express");
const mongoose = require("mongoose");
const app = new express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000);

const url =
  "mongodb+srv://osalama:OSalama_123@initialcluster.uen29.mongodb.net/Todo?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
