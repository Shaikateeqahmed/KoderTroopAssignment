const express = require("express");
const {connection} = require("./ConnectionToMongoDB/connection.js")
const  {Todo} = require("./Routes/TodoRoute.js");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo",Todo);


app.listen(3500,async()=>{
    await connection;
    console.log(`Server is running on the port 3000`)
})