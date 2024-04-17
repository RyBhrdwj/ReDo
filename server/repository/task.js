const Task = require('../models/task');
const crudRepo = require('./crud');

class taskRepo extends crudRepo {
    constructor() {
        super(Task);
    }

    updateTask = async (id, data) => {
        try {
            const task = await this.model.findByIdAndUpdate(id, data, { 
                new: true,
                overwrite: true,
                runValidators: true
            });

            return task;

        } catch (error) {
            console.log("crud error : " + error);
            throw error;
        }
    }

    updateTimeSpent = async (id, time) => {
        try {
            const task = await this.model.findById(id);
            task.time_spent = time;
            await task.save();
            return task;
        } catch (error) {
            console.log("crud error : " + error);
            throw error;
        }
    }

    toggleComplete = async (id) => {
        try {
            const task = await this.model.findById(id);
            task.completed = !task.completed;
            await task.save();
            return task;
        }
        catch (error) {
            console.log("crud error : " + error);
            throw error;
        }
    }
}

module.exports = taskRepo;