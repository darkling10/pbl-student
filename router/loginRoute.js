const express = require("express");
const route = express.Router();

const Attendance = require("../models/attendance");

route.get("/", (req, res) => {
  res.render("login.ejs");
});

route.put("/", async (req, res) => {
  const checkName = req.body.name;
  const checkPassword = req.body.rollno;
  const student = await Attendance.find({ name: checkName });
  console.log(student);
  const id = student[0]._id.valueOf();

  if (student[0].name === checkName && student[0].rollno === checkPassword) {
    res.redirect(`http://localhost:5500/attendance/${id}`);
  } else {
    res.redirect("/login");
  }
});

module.exports = route;
