require ('./db_connection')
const express = require("express");
const Todo = require("./todo.model")
const app = new express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = 3000 | process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));

