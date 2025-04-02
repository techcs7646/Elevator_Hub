const mongoose = require('mongoose');
const config = require(".");
mongoose.set("strictQuery", true);

mongoose.connect(config.DB_URL)
.then(() => console.log("Database connected"))
.catch((e)=> {
    console.log("Database connection is not established")
    console.log(e)
})

mongoose.connection.on("connected", () =>{
    console.log("mongoose default connection open")
})
mongoose.connection.on("error", (err) =>{
    console.error("there is some error in mongoose connection"+ err)
})
mongoose.connection.on("disconnected", () =>{
    console.log("disconnected")
})

process.on("SIGINT",()=>{
    process.exit(0)
})