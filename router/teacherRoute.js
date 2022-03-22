const express = require('express')
const route = express.Router()
const Teacher = require('../models/teacher')

route.get('/',async(req,res)=>{
    const teacher_data = await Teacher.find({})
    res.render("./teacher/teacherdata.ejs" ,{teacher_data})
})

route.get('/create',(req,res)=>{
    res.render('./teacher/teachercreate.ejs')
})

route.post('/',async (req,res)=>{
    console.log(req.body)

    const newTeach = new Teacher(req.body)
    await newTeach.save()

    res.redirect('/teacher')
})


module.exports = route