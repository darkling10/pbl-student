const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");

const Attendance = require("../models/attendance");

const securePassword = async (password) => {
  const savePwd = await bcrypt.hash(password, 10);
  return savePwd;
};

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

route.get("/upstudent", (req, res) => {
  res.render("updateStudent.ejs");
});

route.post("/upstudent", async (req, res) => {
  const student = await Attendance.find({ name: req.body.name });
  // console.log(student[0]._id)
  if (req.body.password === req.body.confirmpassword) {
    const rollPwd = req.body.password;
    const savePwd = await securePassword(rollPwd);

    let cstu = await Attendance.findByIdAndUpdate(
      { _id: student[0]._id },
      {
        $set: { password: savePwd, confirmpassword: savePwd },
      }
    );

    res.redirect(`/attendance`)
  }else{
    res.redirect(`/attendance/upstudent`)
  }
});

//POST : Adding a new Student
//EJS used : Redirected towards /attendance
route.post("/", async (req, res) => {
  let newStudent = new Attendance(req.body);

  if (req.body.password === req.body.confirmpassword) {
    const rollPwd = req.body.password;
    const savePwd = await securePassword(rollPwd);

    newStudent["password"] = savePwd;
    newStudent["confirmpassword"] = savePwd;

    await newStudent.save();
    res.redirect("/attendance");
  } else {
    res.redirect("/attendance/addstudent");
  }
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
