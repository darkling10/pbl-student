const express = require("express");
const { append } = require("express/lib/response");
const route = express.Router();

const Attendance = require("../models/attendance");
const Teacher = require("../models/teacher");

let check = false;

route.get("/", (req, res) => {
  res.render("login.ejs", { error: check });
});

route.put("/", async (req, res) => {
  const checkName = req.body.name;
  

  console.log("cast");

  if (req.body.category === "1") {
    const checkPassword = req.body.rollno;
    const student = await Attendance.find({ name: checkName });
    const id = student[0]._id.valueOf();
    if (student[0].name === checkName && student[0].rollno === checkPassword) {
      res.redirect(`/student/${id}`);
      // res.render('./bootstrap/index.ejs',{student})
    } else {
      check = true;
      res.render("login.ejs", { error: check });
    }
  }

  if (req.body.category === "2") {
    console.log(req.body)
    const checkPassword = req.body.rollno;
    const teacher = await Teacher.find({ name: checkName });
    const id = teacher[0]._id.valueOf();
    if(teacher[0].name === checkName || teacher[0].password===checkPassword){
      
      const att_data = await Attendance.find({}).sort({ rollno:1 });
      res.render("./catalogue/catalogue.ejs", { att_data });
      
      console.log(teacher)
    }else{
      check = true;
      res.render("login.ejs", { error: check });
    }
  }
});



module.exports = route;
