const mongoose = require("mongoose");
var isEmail = require('validator/lib/isEmail')

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    trim:true,
    required: [true, "Please enter Email Address"],
    unique: true,
    lowercase: true,
    validate: [ isEmail, 'invalid email' ]
  },
  subjectcode :{
     type:String,
     lowercase :true,
     required:true,
     min:" "
  }
});

const Teacher = mongoose.model("Teacher",teacherSchema);

module.exports = Teacher
