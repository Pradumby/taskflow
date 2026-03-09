const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodo,
} = require("../controllers/todoController");

router.post("/", protect, createTodo);
router.get("/", protect, getTodos);
router.put("/:id", protect, updateTodo);
router.delete("/:id", protect, deleteTodo);
router.patch("/:id/toggle", protect, toggleTodo);

module.exports = router;
