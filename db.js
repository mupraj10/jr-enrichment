const Sequelize = require('sequelize');


const db = new Sequelize('postgres://localhost/juniorenrichment', {
  logging: false
});
function letterToNumberGrade(letter) {
	let grade; 
// switch letter
// 	cash letter
// 	return 
// default
return grade;
}

const Student = db.define("student" , {
	/* STUDENT MODEL CODE HERE */
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	GPA: {
		type: Sequelize.INTEGER, 
		allowNull: false
	},
	letterGrade: {
		type: Sequelize.STRING, 
		allowNull: false
	}
},
	{
		getterMethods: letterToNumberGrade(this.GPA)

	}, {
		classMethods: {
			//some function here for getting all students with perfect grade
		}
	}

)


const Teacher = db.define('teacher', {
	/* TEACHER MODEL CODE HERE */
	name: {
		type: Sequelize.STRING, 
		allowNull: false
	}, 
	subject: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

Student.belongsTo(Teacher);

module.exports = {db, Student, Teacher}