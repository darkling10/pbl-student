const express = require("express");
const route = express.Router();

const Attendance = require("../models/attendance");

//GET : Display Attendance 
//EJS used : attendanceList.ejs
route.get("/", async (req, res) => {
  const att_data = await Attendance.find({}).sort({ rollno: 1 });
  res.render("attendanceList.ejs", { att_data });
});

// GET: Adding a new Student
//EJS used : createNew.ejs
route.get("/addstudent", (req, res) => {
  res.render("createNew.ejs");
});

//POST : Adding a new Student
//EJS used : Redirected towards /attendance
route.post("/", async (req, res) => {
  const newStudent = new Attendance(req.body);
  await newStudent.save();
  res.redirect("/attendance");
});

//GET : Student Information(Subsetting using Months)
//EJS rendered : studentInfo.ejs
route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const student = await Attendance.findById(id);
  const data = req.body;
  // console.log(data);
  res.render("./information/studentinfo.ejs", { student });
});

//GET : Individual Student Information 
//EJS rendered : individualList.ejs
route.post("/:id", async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const student = await Attendance.findById(id);
  // console.log(data);
  res.render("individualList.ejs", { student, data });
});

module.exports = route;
