const experss = require("express");
const app = experss();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");


app.use(experss.json());


app.get('/todo', function (req, res) {



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
    description: createPayload.description
  })

})

app.put("/completed", function (req, res) {
  const updatePaylod = req.body;
  const parsePayload = updateTodo.safeParse(updatePaylod);

  if (!parsePayload.success) {
    res.status(403).json({
      msg: "You sent wrong inputs"
    })

    return;
  }

})