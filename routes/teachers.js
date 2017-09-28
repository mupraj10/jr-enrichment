const express = require('express');
const router = express.Router();


//require in the model 
const db = require('../db').db;
const Teacher = require('../db').Teacher;



//GET all teachers and return them in json 

router.get('/', function(req, res, next){
    Teacher.findAll()
    .then( teachers => res.json(teachers))
})

//GET teacher by ID # and return a json of that teacher

router.get('/:teacherId', function(req, res, next){
    const id = req.params.teacherId;
    Teacher.findById(id)
    .then(foundTeacher => res.json(foundTeacher))
})

//post for testing 
router.post('/', function(req,res, next){
    Teacher.create(req.body)
    .then( (teacher) => res.json(teacher).status(201))
    .catch(next);
})


module.exports = router;