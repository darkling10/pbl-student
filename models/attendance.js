const mongoose =  require('mongoose')

const attendanceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    prn:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }},{
        strict:false
    }

    // present:{
    //     type:String,
    //     required:true
    // }
    
)

const Attendance = mongoose.model("Attendance",attendanceSchema);

module.exports = Attendance