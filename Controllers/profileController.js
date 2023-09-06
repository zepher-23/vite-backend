const handleProfile=(req,res) =>{
res.send('profile handled')


}

const handleProfileData =(req,res)=>{
    res.send("profile data handled")
}



module.exports = {handleProfile,handleProfileData}