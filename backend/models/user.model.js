const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: new Date().getTime()
    }
})

// hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// method to compare password for login
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model("User", userSchema)
