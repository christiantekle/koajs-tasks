const mongoose = require('mangoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    task_name: {
        type: String
    }
})

module.exports = Task = mongoose.model('tasks', TaskSchema)