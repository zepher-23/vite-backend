//index.html -> login details -> authenticate -> success page 
                                           // -> failure page
     //users = [{name:'name1',password:'password1'},{name:'name2',password:'password2'},{name:'name3',password:'password3'}]
const express = require('express')
const router = express.Router()
const Authenticate  = require("../Controllers/Authentication")
const loginController = require("../Controllers/loginController")


router.get("/", (req, res) => {
console.log("users page accessed")
    res.sendFile(path.join(__dirname,'index.html'))

})

router.post("/signup",loginController.signUp)
router.post('/login',loginController.login)




module.exports = router