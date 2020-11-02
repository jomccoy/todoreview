const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
cuisine: {
    type: String,
    required: true
    },
borough: {
        type: String,
        required: true
        },
grades: {grade:String, score:Number},
date: {
type: Date,
default: Date.now
}
})
module.exports = mongoose.model('TodoTask',todoTaskSchema);