// noinspection JSVoidFunctionReturnValueUsed

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Comp_student = require("./models/students");
const Attendance = require("./models/attendance");
const collectionName = "Students";
const teacherRoute = require("./router/teacherRoute");
const attendanceRoute = require("./router/attendanceRoute");
const loginRoute = require('./router/loginRoute')

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

//Routes
app.use("/attendance", attendanceRoute);
app.use("/teacher", teacherRoute);
app.use("/login", loginRoute);

app.get("/", async (req, res) => {
  const stu_data = await Comp_student.find({}).sort({ rollno: 1 });
  // console.log(stu_data);

  res.render("index.ejs", { stu_data });
});

// app.get("/login", (req, res) => {
//   res.render("login.ejs");
// });

// app.put("/login", async (req, res) => {
//   const checkName = req.body.name;
//   const checkPassword = req.body.rollno;
//   const student = await Attendance.find({ name: checkName });
//   console.log(student);
//   const id = student[0]._id.valueOf();

//   if (student[0].name === checkName && student[0].rollno === checkPassword) {
//     res.redirect(`http://localhost:5500/attendance/${id}`);
//   } else {
//     res.redirect("/login");
//   }
// });

app.get("/register", async (req, res) => {
  const att_data = await Attendance.find({}).sort({ rollno: 1 });
  res.render("register.ejs", { att_data });
});

app.post("/register", async (req, res) => {
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
  res.redirect("/register");
});

app.listen(5500, () => {
  console.log("Listening on port 5500");
});
