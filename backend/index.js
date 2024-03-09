const experss = require("express");
const app = experss();
const { createTodo, updateTodo } = require("./types");


app.use(experss.json());


app.get('/todo', function (req, res) {



})

app.post('/todo', function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(403).json({
      msg: "You sent wrong inputs"
    })

    return;
  }


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