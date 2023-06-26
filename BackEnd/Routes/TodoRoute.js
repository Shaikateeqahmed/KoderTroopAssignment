const express = require("express");
const {TodoModel} = require("../Models/TodoModel.js");
const Todo = express.Router();

Todo.get("/",async(req,res)=>{
    let todolist = await TodoModel.find({});
    res.json(todolist);
})

Todo.post("/addtodo",async(req,res)=>{
    const {Title, Description} = req.body;
    const newTodo = new TodoModel({Title,Description,Status:false});
    await newTodo.save();
    res.json("New Todo Added Successfully!");
})

Todo.patch("/updatestatus/:id",async(req,res)=>{
    const ID = req.params.id;
    const payload = req.body;
    await TodoModel.findByIdAndUpdate({_id:ID},payload);
    res.json("Todo Updated successfully!");
})

Todo.delete("/deletetodo/:id",async(req,res)=>{
    const ID = req.params.id;
    await TodoModel.findByIdAndDelete({_id:ID});
    res.json("Todo Deleted successfully!");
})

module.exports={Todo};