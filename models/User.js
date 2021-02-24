const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
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
    business: {
        type: String
    },
    industry: {
        type: String,
        required: true
    },
    recruiterStatus: {
        type: Boolean,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    connected: {
        type: Array
    },
    pending: {
        type: Array
    },
    blocked: {
        type: Array
    }

})

const User = mongoose.model('users', UserSchema);
module.exports = User;