const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://deep:123@cluster0.kiyv7ej.mongodb.net/")

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completd: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports({
  todo
})