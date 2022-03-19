// noinspection JSVoidFunctionReturnValueUsed

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Comp_student = require("./models/students");
const Attendance = require("./models/attendance");
const collectionName = "Students";

mongoose
  .connect(`mongodb://localhost:27017/${collectionName}`, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection open");
  })
  .catch((err) => {
    console.log("Oh no error");
    console.log(err);
  });

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const stu_data = await Comp_student.find({}).sort({ rollno: 1 });
  // console.log(stu_data);

  res.render("index.ejs", { stu_data });
});

app.get("/attendance", async (req, res) => {
  const att_data = await Attendance.find({}).sort({ rollno: 1 });
  res.render("attendanceList.ejs", { att_data });
});

app.get("/attendance/addstudent", async (req, res) => {
  res.render("createNew.ejs");
});

app.post("/attendance", async (req, res) => {
  const newStudent = new Attendance(req.body);
  await newStudent.save();
  // console.log(req.body);

  res.redirect("/attendance");
});

// const ex_date = new Date();
// let dd = String(ex_date.getDate()).padStart(2, "0");
// let mm = String(ex_date.getMonth() + 1).padStart(2, "0");
// let yyyy = ex_date.getFullYear();
// let today = dd + "/" + mm + "/" + yyyy;

app.get("/attendance/:id", async (req, res) => {
  const { id } = req.params;
  const student = await Attendance.findById(id);
  res.render("individualList.ejs", { student });
});

app.get("/attendance/:id/addattendance", async (req, res) => {
  const { id } = req.params;
  const student = await Attendance.findById(id);
  for (key in student) {
    console.log(key);
  }
  console.log(student);
  res.render("addAttendance.ejs", { student });
});

app.put("/attendance/:id", async (req, res) => {
  const { id } = req.params;

  // console.log(req.body);
  const student = await Attendance.findByIdAndUpdate(
    id,
    { $set: { [req.body.date]: req.body.attendance } },
    {}
  );

  res.redirect(`/attendance/${student._id}`);
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.put("/login", async (req, res) => {
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

app.get("/register", async (req, res) => {
  const att_data = await Attendance.find({}).sort({ rollno: 1 });
  res.render("register.ejs", { att_data });
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  var students = await Attendance.find({}).sort({ rollno: 1 });
  for (let i=0;i<5;i++) {
    let cstu = await Attendance.findByIdAndUpdate({ _id: students[i]._id },{
      $set:{ [req.body.date]: req.body.present[i] }
    });
    
  }
  res.redirect("/register");
});

app.listen(5500, () => {
  console.log("Listening on port 5500");
});
