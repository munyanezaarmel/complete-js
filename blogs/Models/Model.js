const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Blogs = new Schema({
    title: {
        type: String,
        required:true
    },
    details: {
        type: String,
        required:true
    }
}, {timestamps: true})

const blogModel = mongoose.model("Hngx", Blogs)

module.exports = blogModel
   