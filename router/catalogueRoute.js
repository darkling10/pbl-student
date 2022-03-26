const express = require("express");
const route = express.Router();

const Attendance = require("../models/attendance");

route.get("/", async (req, res) => {
  const att_data = await Attendance.find({}).sort({ rollno: 1 });
  res.render("./catalogue/catalogue.ejs", { att_data });
});

route.post("/", async (req, res) => {
  console.log(req.body);
  var students = await Attendance.find({}).sort({ rollno: 1 });
  var limit = await Attendance.count();
  console.log(limit);
  for (let i = 0; i < limit; i++) {
    let cstu = await Attendance.findByIdAndUpdate(
      { _id: students[i]._id },
      {
        $set: { [req.body.date]: req.body.present[i] },
      }
    );
  }
  res.redirect("/catalogue");
});

module.exports = route;
