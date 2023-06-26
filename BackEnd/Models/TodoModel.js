const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    Title : String,
    Description : String,
    Status : Boolean
})

const TodoModel = mongoose.model("Todo",TodoSchema);

module.exports={TodoModel};