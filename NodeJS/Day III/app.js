require("./db_connection");
const express = require("express");
const Task = require("./todo.model");
const app = new express();
app.use(express.json());
app.use(express.static("assets"));

app.get("/", (req,res) => {
  res.status(200).send("index.html");
})

app.get("/todos", (req, res) => {
  Task.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

app.get("/todos/:id", (req, res) => {
  const _id = req.params.id;
  Task.findById({ _id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

app.post("/todos", (req, res) => {
  let { body } = req;
  let task = new Task(body);
  task
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

app.put("/todos/:id", (req, res) => {
  const _id = req.params.id;
  const { body } = req;
  Task.findOneAndReplace({_id}, body)
    .then(() => res.status(200).json())
    .catch((err) => res.status(400).json(err.message));
});

app.patch("/todos/:id", (req, res) => {
  const _id = req.params.id;
  const { body } = req;
  Task.findByIdAndUpdate(_id, body)
    .then(() => res.status(200).json())
    .catch((err) => res.status(400).json(err.message));
});

app.delete("/todos/:id", (req, res) => {
  const _id = req.params.id;
  Task.findByIdAndDelete(_id)
    .then(() => res.status(200).json())
    .catch((err) => res.status(400).json(err.message));
});
const PORT = 3000 | process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
