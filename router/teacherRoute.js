const express = require("express");
const Attendance = require("../models/attendance");
const route = express.Router();
const Teacher = require("../models/teacher");

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const teacher = await Teacher.findById({ id });
  const att_data = await Attendance.find({}).sort({ rollno: 1 });
  res.render("./bootstrap/teacherdash.ejs", { teacher ,att_data});
});

route.get("/create", (req, res) => {
  res.render("./teacher/teachercreate.ejs");
});

route.get("/:id/profile", async (req, res) => {
  const { id } = req.params;
  const teacher = await Teacher.findById(id);
  res.render("./bootstrap/profile.ejs", { teacher });
});

route.post("/", async (req, res) => {
  console.log(req.body);

  const newTeach = new Teacher(req.body);
  await newTeach.save();

  res.redirect("/teacher");
});

module.exports = route;
