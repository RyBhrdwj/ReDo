const taskRepo = require('../repository/task');

class taskController {

    constructor() {
        this.task = new taskRepo();
    }

    fetchAllTasks = async (req, res) => {
        try {
            const tasks = await this.task.readAll();
            res.json(tasks);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    postTask = async (req, res) => {

        try {
            const task = await this.task.create(req.body);
            res.send(task);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    updateTask = async (req, res) => {
        
        const {id} = req.params;

        try {
            const task = await this.task.updateTask(id, req.body);
            res.send(task);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    toggleComplete = async(req, res) => {
        
        const {id} = req.params;

        try {
            const task = await this.task.toggleComplete(id);
            res.send(task);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    updateTimeSpent = async(req, res) => {
        
        let {id, time} = req.params;
        time = parseInt(time);

        try {
            const task = await this.task.updateTimeSpent(id, time);
            res.send(task);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    deleteTask = async(req, res) => {
        
        const {id} = req.params;

        try {
            const task = await this.task.destroy(id);
            res.send(task);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = new taskController();