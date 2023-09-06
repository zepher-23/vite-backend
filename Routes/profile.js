const express = require('express')
const router = express.Router()
const profileController = require("../Controllers/profileController")
const Authenticate  = require("../Controllers/Authentication")

router.get('/',Authenticate.userAuth, profileController.handleProfile)



router.get('/profiledata',profileController.handleProfileData)




module.exports = router