const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {  // corrected from `discription` to `description`
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true  // corrected from `timeStamp` to `timestamps`
});

const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);

export default TodoModel;
