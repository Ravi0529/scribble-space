const mongoose = require("mongoose")
const Schema = mongoose.Schema

const uesrSchema = new Schema({
    fullName: {
        type: String,
        isrequired: true
    },
    email: {
        type: String,
        isrequired: true
    },
    password: {
        type: String,
        isrequired: true
    },
    createdOn: {
        type: Date,
        default: new Date().getTime()
    }
})

module.exports = mongoose.model("User", uesrSchema)
