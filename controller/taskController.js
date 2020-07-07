const Task = require('../models/Task')

const getTasks = async ctx => {
    try{
        const tasks = await Task.find();
        ctx.body = tasks;
    }
    catch(err) {
        ctx.body = "Error: " +err;
    }
}

module.exports.getTasks = getTasks;