const jwt = require("jsonwebtoken")

const user = []

const secretKey = "12345"
const signUp =(req,res)=>{

    const {name, password} =req.body
    const token = jwt.sign(password,secretKey)
    const temp  = {name:name,password:token}
    user.push(temp)
    res.send("<div> user has signed up </div><form method='post' action='/users/login'> <label for='name'>name</label><input type='text' name='name'><br> <label for='password' >password</label> <input type='password' name='password'><br> <button type='submit'>login</button> </form> ")
    
}




const login = (req,res)=>{
    const {name,password}=req.body;

    user.forEach((eachUser)=>{

        if(eachUser.name === name)
        {
            if(eachUser.password === password)
            {
                res.send("user verified and logged in")
            }
            else{
                res.send("user password wrong")
            }
        }
        else{
            res.send("user not existing!")
        }

    })
    
}



module.exports = {login,signUp}



//md5, sha-128,256,512,bcrypt,

//


//jwt - iwuebpiwecub.weipdcbwe.wqeidnwewoeidnw

//payload - name or user details
//secretkey - "12345"
//algo - default 






