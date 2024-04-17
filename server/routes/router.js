const express = require("express");
const taskController = require("../controllers/task");
const router = express.Router();

router.get("/fetch", taskController.fetchAllTasks);
router.post("/post", taskController.postTask);
router.put("/update/:id", taskController.updateTask);
router.delete("/delete/:id", taskController.deleteTask);

router.patch("/toggle-complete/:id", taskController.toggleComplete);
router.patch("/update-time-spent/:id/:time", taskController.updateTimeSpent);

module.exports = router;