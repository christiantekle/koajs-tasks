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
    ctx.body = { status: "Task Deleted!" };
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const putTask = async (ctx) => {
  if (!ctx.request.body.task_name) {
    ctx.body = { error: "Bad Data" };
  }
  try {
    await Task.findOneAndUpdate(
      { _id: ctx.params.id },
      { task_name: ctx.request.body.task_name }
    );
    ctx.body = { status: "Task Updated" };
  } catch (err) {
    ctx.body = "error: " + err;
  }
};
module.exports.getTasks = getTasks;
module.exports.postTask = postTask;
module.exports.deleteTask = deleteTask;
module.exports.putTask = putTask;