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
const loginRoute = require("./router/loginRoute");
const catalogueRoute = require("./router/catalogueRoute");
const studentRoute = require('./router/studentRoute')
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5500

//MongoDB connection
mongoose
  .connect(`mongodb+srv://abbas:${process.env.PASSWORD}@cluster0.idn7x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection open");
  })
  .catch((err) => {
    console.log("Oh no error");
    console.log(err);
  });


// Setting View Engine and paths for Local,Views and Public folder
app.use("/public", express.static('./public/'));
app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));

//API method override
app.use(methodOverride("_method"));

//Routes
app.use("/attendance", attendanceRoute);
app.use("/teacher", teacherRoute);
app.use("/login", loginRoute);
app.use("/catalogue", catalogueRoute);
app.use("/student",studentRoute)

//Home Page Route
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})


app.listen(PORT, () => {  console.log("Listening on port ");
});


