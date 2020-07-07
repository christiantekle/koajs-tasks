const Task = require("../models/Task");

const getTasks = async (ctx) => {
  try {
    const tasks = await Task.find();
    ctx.body = tasks;
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const postTask = async (ctx) => {
  if (!ctx.request.body.task_name) {
    ctx.body = { error: "Bad Data" };
  }
  try {
    var task = new Task();
    task.task_name = ctx.request.body.task_name;
    const data = await task.save();
    ctx.body = data;
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const deleteTask = async (ctx) => {
  try {
    await Task.deleteOne({
      _id: ctx.params.id,
    });
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};
module.exports.deleteTask = deleteTask;
module.exports.postTask = postTask;
module.exports.getTasks = getTasks;
