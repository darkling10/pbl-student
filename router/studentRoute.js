const express = require("express");
const route = express.Router();

const Attendance = require("../models/attendance");

let student

//GET : Getting student data from ID
//EJS used : Index.ejs
route.get('/:id',async(req,res)=>{
    const { id } = req.params;
  student = await Attendance.findById(id);
  res.render("./bootstrap/index.ejs", { student });
})

//GET : Displaying the data
//EJS used : Profile.ejs
route.get("/:id/profile",async(req,res)=>{
    const { id } = req.params;
  student = await Attendance.findById(id);
  // console.log(student)
  res.render("./bootstrap/profile.ejs", { student });
})

module.exports = route;
