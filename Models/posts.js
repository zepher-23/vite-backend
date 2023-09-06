const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    Title:{type:String},
    Caption:{type:String},
    imgURL:{type:String},
    reactionsCount:{type:Number},
    CommentCount:{type:Number},
    comments:[{type:String}],
    reactions:[{type:String,enum:['like','sad','unlike','angry','neutral']}]
})

const Post = mongoose.model("posts",postSchema)

module.exports = Post