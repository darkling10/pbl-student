const express = require("express");
const { append } = require("express/lib/response");
const route = express.Router();
const bcrypt = require("bcrypt");
const Attendance = require("../models/attendance");
const Teacher = require("../models/teacher");

let check = false;

const comparePassword = async (password, checkPwd) => {
  const checkPassword = await bcrypt.compare(password, checkPwd);
  return checkPassword;
};

//GET : Display Login Page
//EJS used: Login.ejs
route.get("/", (req, res) => {
  res.render("login.ejs", { error: check });
});

//PUT : Validating attendance
//EJS rendered : teacherdash.ejs,Login.ejs
route.put("/", async (req, res) => {
  const checkName = req.body.name;
  // console.log("cast");

  if (req.body.category === "1") {
    const checkPassword = req.body.password;
    const student = await Attendance.find({ username: checkName });

    const id = student[0]._id.valueOf();
    const pwd = await comparePassword(checkPassword, student[0].password);

    if (student[0].username === checkName && pwd) {
      res.redirect(`/student/${id}`);
      // res.render('./bootstrap/index.ejs',{student})
    } else {
      check = true;
      res.redirect(`/`, { error: check });
    }
  }

  if (req.body.category === "2") {
    const checkPassword = req.body.rollno;
    const teacher = await Teacher.find({ name: checkName });
    const id = teacher[0]._id.valueOf();
    // console.log(id)
    if (
      teacher[0].name === checkName ||
      teacher[0].password === checkPassword
    ) {
      const att_data = await Attendance.find({}).sort({ rollno: 1 });
      res.render("./bootstrap/teacherdash.ejs", { att_data, teacher });
      // res.redirect(`/teacher/${id}`)

      console.log(teacher);
    } else {
      check = true;
      res.render("login.ejs", { error: check });
    }
  }
});

module.exports = route;
