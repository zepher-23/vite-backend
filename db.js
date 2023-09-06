const mongoose = require("mongoose")

//mongodb://127.0.0.1:2701/databaseName
const connection = (url) =>{
    mongoose.connect(url).then(message=>{
        console.log("mongodb connected")
    })
}

module.exports = {connection}
