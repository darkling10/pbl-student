const express = require("express");
const route = express.Router();

const Attendance = require("../models/attendance");

let student

route.get('/:id',async(req,res)=>{
    const { id } = req.params;
  student = await Attendance.findById(id);
  studentData = student
  console.log(studentData.name)
  res.render("./bootstrap/index.ejs", { student });
})

route.get("/:id/profile",async(req,res)=>{
    const { id } = req.params;
  student = await Attendance.findById(id);
  console.log(student)
  res.render("./bootstrap/profile.ejs", { student });
})

module.exports = route;
