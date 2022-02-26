const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true,
        length:6
    },
    department:{
        type:String,
        required:true
    },
    email:{
        type:String,
        
    },
    division:{
        type:String,
        required:true
    }
})

const Comp_student = mongoose.model('Comp_student',studentSchema)

module.exports = Comp_student