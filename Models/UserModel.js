const mongoose = require("mongoose")

const Schema = mongoose.Schema


const userSchema = new Schema({
    nom:{ type: String, required: true },
    prenom:{ type: String, required: true},
    email:{ type: String, required: true, unique:true},
    password:{ type: String , required: true},
    username:{ type: String, required: true, unique:true},

    date_naissance:{ type: Date },
    tel:{ type: String },
    photo:{ type: String },
    favoris:[String]
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel