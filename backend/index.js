const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db.js");

app.use(express.json());


app.get('/todo', async function (req, res) {

  const todos = await todo.find();

  res.json({
    todos
  })

})

app.post('/todo', async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(403).json({
      msg: "You sent wrong inputs"
    })

    return;
  }


  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });

  res.json({
    msg: "todo created"
  });


})

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(403).json({
      msg: "You sent wrong inputs"
    })

    return;
  }


  await todo.updateOne({
    _id: req.body.id
  }, {
    completed: true
  });

  res.json({
    msg: "todo mark as completed"
  })
})

app.listen(3000);