const mongoose = require('mongoose');

const TechScheme = new mongoose.Schema({
    fullName : String,
    id:Number,
    wage:Number,
    profession:String
})

module.exports = mongoose.model('Tech',TechScheme)