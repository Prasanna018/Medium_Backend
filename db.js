const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://prasannagaikwad0018:2doX0XmcSRolWdrI@cluster0.zemrf.mongodb.net/Medium")


const UserDb = new mongoose.Schema({
    username: String,
    password: String


})

const PostDb = new mongoose.Schema({
    title: String,
    Description: String

})


const userdb = mongoose.model("Userdb", UserDb)
const Postdb = mongoose.model("PostDb", PostDb)

module.exports = {
    userdb,
    Postdb
}

