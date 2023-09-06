
const express = require('express')
const app = express()
const path = require('path')

const users = require('./Routes/users')
const profile = require('./Routes/profile')
const db = require('./db')
const Users = require('./Models/users')


app.use(express.urlencoded())

const url = "mongodb://127.0.0.1:27017/social-media"


db.connection(url)

//middlewares
//simple functions that carry specific tasks 
//client req -> func(Authenticate) -> server response


const userData = new Users({name:"test",password:"test"})

userData.save().then(()=>{
    console.log('User Saved')
}).catch(err=>{
    console.log(err)
})


app.post("/", (req, res) => {

    console.log(req.body)
    res.send("name and password recieved")

})
   
// app.use("/users",users)
app.use("/profile",profile)
app.use("/users",users)





app.listen(3000, () => {
    console.log("connected to server on port 3000");
})


//asynchronous
//js ->-------------func(mongodb-insert)------------------------------end
                //  ------------------------------------------------------------end
//async and await 

const func= async ()=>{

  fetch("example.com/data/user").then((data)=>{
    console.log(data)
  })
}




//promise (Rejected, pending, resolved)