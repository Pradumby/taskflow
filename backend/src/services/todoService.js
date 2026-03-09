const Todo = require("../models/Todo");

const createTodo = async (data, userId) => {
  const todo = await Todo.create({
    title: data.title,
    user: userId,
  });

  return todo;
};

const getTodos = async (userId) => {
  const todos = await Todo.find({ user: userId }).populate(
    "user",
    "name email"
  );

  return todos;
};

const updateTodo = async (todoId, data, userId) => {
  const todo = await Todo.findOneAndUpdate({ _id: todoId, user: userId }, data);

  return todo;
};

const deleteTodo = async (todoId, userId) => {
  await Todo.findOneAndDelete({
    _id: todoId,
    user: userId,
  });
};

const toggleTodo = async (todoId, userId) => {
  const todo = await Todo.findOne({
    _id: todoId,
    user: userId,
  });

  if (!todo) {
    throw new Error("Todo not found");
  }

  todo.completed = !todo.completed;

  await todo.save();

  return todo;
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodo,
};
