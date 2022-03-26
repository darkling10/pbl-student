const express = require("express");
const route = express.Router();

const Attendance = require("../models/attendance");

route.get("/", async (req, res) => {
  const att_data = await Attendance.find({}).sort({ rollno: 1 });
  res.render("attendanceList.ejs", { att_data });
});

route.get("/addstudent", (req, res) => {
  res.render("createNew.ejs");
});

route.post("/", async (req, res) => {
  const newStudent = new Attendance(req.body);
  await newStudent.save();
  res.redirect("/attendance");
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const student = await Attendance.findById(id);
  const data = req.body;
  console.log(data);
  res.render("./information/studentinfo.ejs", { student });
});

route.post("/:id", async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const student = await Attendance.findById(id);
  console.log(data);
  res.render("individualList.ejs", { student, data });
});

// route.get("/:id/addattendance", async (req, res) => {
//     const { id } = req.params;
//     const student = await Attendance.findById(id);
//     for (key in student) {
//       console.log(key);
//     }
//     console.log(student);
//     res.render("addAttendance.ejs", { student });
//   });

// route.put("/attendance/:id", async (req, res) => {
//     const { id } = req.params;

//     // console.log(req.body);
//     const student = await Attendance.findByIdAndUpdate(
//       id,
//       { $set: { [req.body.date]: req.body.attendance } },
//       {}
//     );

//     res.redirect(`/attendance/${student._id}`);
//   });

module.exports = route;
