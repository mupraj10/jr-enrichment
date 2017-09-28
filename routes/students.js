const express = require('express');
const router = express.Router();

//require in the model 
const db = require('../db').db;
const Student = require('../db').Student;



//GET all students and return them in json

router.get('/', function (req, res, next) {
    Student.findAll()
        .then(students => res.json(students));
})

//GET student by ID # and return a json of that student

router.get('/:studentId', function (req, res, next) {
    const id = req.params.student
    Student.findById({
            where: {
                id
            }
        })
        .then(student => res.json(student))
})

//adding POST for testing 

router.post('/', function(req,res, next){
    Student.create(req.body)
    .then( student => res.json(student).sendStatus(201))
    .catch(next);
})

//UPDATE a student's teacher and return a status code of 204
router.put('/:studentId', function (req, res, next) {
    const id = req.params.student
    Student.findById(id)
    //setTeacherId 
})
//DELETE a student and return a status code of 202
router.delete('/:studentId', function (req, res, next) {
    const id = req.params.student;
    Student.destroy({
        where: {
            id
        }
    })
    Student.findById({
            where: {
                id
            }
        })
        .then(() => {
            res.sendStatus(202)
        })
})


module.exports = router;