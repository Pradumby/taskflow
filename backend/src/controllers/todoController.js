const todoService = require("../services/todoService");
const asyncHandler = require("../utils/asyncHandler");

exports.createTodo = asyncHandler(async (req, res) => {
  const todo = await todoService.createTodo(req.body, req.user._id);

  res.status(201).json({
    message: "Todo created",
    todo,
  });
});

exports.getTodos = asyncHandler(async (req, res) => {
  const todos = await todoService.getTodos(req.user._id);

  res.json(todos);
});

exports.updateTodo = asyncHandler(async (req, res) => {
  const todo = await todoService.updateTodo(
    req.params.id,
    req.body,
    req.user._id
  );

  res.json(todo);
});

exports.deleteTodo = asyncHandler(async (req, res) => {
  await todoService.deleteTodo(req.params.id, req.user._id);

  res.json({
    message: "Todo deleted",
  });
});

exports.toggleTodo = asyncHandler(async (req, res) => {
  const todo = await todoService.toggleTodo(req.params.id, req.user._id);

  res.json({
    message: "Todo status updated",
    todo,
  });
});
