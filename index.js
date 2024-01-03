const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();

server.listen(8181,()=>{
    console.log('server started...')
})
server.use(cors());
server.use(bodyParser.json());

const studentSchema = new mongoose.Schema({
    name: String,
    percentage: String,
    adminname: String,
    universityname: String,
    email: String,
    contactno: String,
    token: String,
});
const Student = mongoose.model('Student', studentSchema);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/notification');
  console.log('db connected...');
}

server.post('/addstudent',async (req,res)=>{
    let student = Student()

    student.name = req.body.name
    student.percentage = req.body.percentage
    student.adminname = req.body.adminname
    student.universityname = req.body.universityname
    student.email = req.body.email
    student.contactno = req.body.contactno
    student.token = req.body.token

    const document = await student.save()

    // console.log(document)
    res.json(document)
})

server.get('/showstudent',async(req,res)=>{
    const students = await Student.find({})
    // console.log(students)
    res.json(students)
})