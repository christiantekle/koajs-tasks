const Router = require('koa-router')
const router = new Router();
const taskController = require('../controller/taskController')

router.get('/api/tasks', taskController.getTasks )

module.exports = router;