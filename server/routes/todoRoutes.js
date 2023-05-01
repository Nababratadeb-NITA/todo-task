const express = require("express");
const router = express.Router();
const Todo = require("../mongodb/models/Todo");

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
});

router.post("/", async (req, res) => {
  const { title, description, completed } = req.body;
  const todo = new Todo({ title, description, completed });
  await todo.save();
  res.json(todo);
});

router.put("/:id", async (req, res) => {
  const { title, description, completed } = req.body;
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { title, description, completed },
    { new: true }
  );
  res.json(todo);
});

router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted successfully" });
});

module.exports = router;
