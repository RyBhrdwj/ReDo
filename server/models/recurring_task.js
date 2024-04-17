const mongoose = require('mongoose');

const recurringTaskSchema = new mongoose.Schema(
    {
        tasks : {
            type : [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
        }
    }
);

const recurringTask = mongoose.model('RecurringTask', recurringTaskSchema);
module.exports = recurringTask;