const Router = require("koa-router");
const router = new Router();
const taskController = require("../controller/taskController");

router.get("/api/tasks", taskController.getTasks);
router.post("/api/tasks", taskController.postTask);
router.delete("/api/tasks/:id", taskController.deleteTask)

module.exports = router;
