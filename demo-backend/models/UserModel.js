const mongoose = require('mongoose')

const userTemplate = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    referral:{
        type: String
    }

})

module.exports = mongoose.model('users', userTemplate)
