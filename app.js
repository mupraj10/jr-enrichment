const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./db').db;
const Student = require('./db').Student;
const Teacher = require('./db').Teacher;

let PORT = 8080;

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', require('./routes'))

app.get("/test", (req, res, next) => {
	// Visit http://localhost:8080/test to see the message!
	res.send("Hello GET Route!")
})
/* 
 Your Route Code Here
*/

db.sync()
.then(() => {
	console.log('db synced')
	app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
});