const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database("./Jamb_360.sqlite3")

var members = [

	{"id" : 1, "OPTION_A" : "A", "OPTION_B" : "B", "OPTION_C" : "C", "OPTION_D" : "D", },
	{"id" : 2, "OPTION_A" : "20", "OPTION_B" : "20", "OPTION_C" : "20", "OPTION_D" : "20", },
	{"id" : "3", "OPTION_A" : "20", "OPTION_B" : "20", "OPTION_C" : "20", "OPTION_D" : "20", },
	{"id" : "4", "OPTION_A" : "20", "OPTION_B" : "20", "OPTION_C" : "20", "OPTION_D" : "20", },
	{"QUESTION" : "5", "OPTION_A" : "20", "OPTION_B" : "20", "OPTION_C" : "20", "OPTION_D" : "20", },
	{"QUESTION" : "6", "OPTION_A" : "20", "OPTION_B" : "20", "OPTION_C" : "20", "OPTION_D" : "20", },
	{"QUESTION" : "7", "OPTION_A" : "20", "OPTION_B" : "20", "OPTION_C" : "20", "OPTION_D" : "20", },
	{"QUESTION" : "8", "OPTION_A" : "20", "OPTION_B" : "20", "OPTION_C" : "20", "OPTION_D" : "20", },
	{"QUESTION" : "9", "OPTION_A" : "20", "OPTION_B" : "20", "OPTION_C" : "20", "OPTION_D" : "20", },
	{"QUESTION" : "10", "OPTION_A" : "20", "OPTION_B" : "20", "OPTION_C" : "20", "OPTION_D" : "20", },


];

router.get('/', (req, res) => {
	res.json(members)
});


router.get('/test', (req, res) => {




const sqlite3 = require('sqlite3')

let db = new sqlite3.Database("./Jamb_360.sqlite3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        /* Put code to create table(s) here */
        createTable()
    } 
})

const createTable = () => {
    console.log("create database table contacts");
    db.run("CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",  insertData);
}

const insertData = () =>{
    console.log("Insert data")
    db.run('INSERT INTO contacts (name) VALUES (?)', ["contact 001"]);
}

res.json(members)
});






//Get single member
router.get('/:id', (req, res) =>{
	const found = members.some(member => member.id ===parseInt(req.params.id));

	if (found){
		res.json(members.filter(member => member.id === parseInt(req.params.id)));
	}
	else{
		res.status(400).json({msg: 'No member found'})
	}
});







//this is to delete subjects
router.post('/:id', (req, res) =>{ 
	console.log('deletesubject', req.params.id)
	let sub_id = parseInt(req.params.id)
	


	const sqlite3 = require('sqlite3').verbose()

	let db = new sqlite3.Database("./Jamb_360.sqlite3")
	 db.run('DELETE from contacts where id = ' + sub_id, function(err){

	 	if (err){
	 		console.log(err.message)
	 	}
	 	console.log("deleted ")
	 } )

	 db.close()




});





//this is to delete questions
router.post('/school/deletequestions/:id', (req, res) =>{ 
	console.log('deletesubject', req.params.id, req.body)
	let sub_id = parseInt(req.params.id)
	var subject = req.params.id
	var number = req.body.number
	var current_session = req.body.current_session
	var current_term = req.body.current_term
	var addquestionclass = req.body.addquestionclass
	
	console.log(addquestionclass)

	const sqlite3 = require('sqlite3').verbose()

	let db = new sqlite3.Database("./Jamb_360.sqlite3")
 // db.run('DELETE from contacts where id = ' + sub_id, function(err){
	 db.run('DELETE from ' + subject +' where NUMBER = $number and SESSION = $current_session and TERM = $current_term and STUDENT_CLASS = $addquestionclass ',{$number:number, $current_session:current_session, $current_term:current_term, $addquestionclass:addquestionclass} , function(err){
 // db.run('DELETE from $subject where NUMBER = $number', {$subject:subject, $number:number}, function(err){

	 	if (err){
	 		console.log(err.message)
	 	}
	 	console.log("deleted ")
	 } )


	 var qs_json = []
	  	db.all('SELECT * from ' + subject +' where SESSION = $current_session and TERM = $current_term and STUDENT_CLASS = $addquestionclass',{$current_session:current_session, $current_term:current_term, $addquestionclass:addquestionclass} , function(err, rows){
		rows.forEach(function(row){
			
			var session = row.SESSION
			var term = row.TERM
		

			// var subject = row.SUBJECT
			// var question_id = row.ID
			// console.log(question, OPTION_A, OPTION_B, OPTION_C, OPTION_D, Answer, subject, question_id)
			var data = {'session':session, 'term':term}
			qs_json.push(data)
			
			
		})

res.json({'msg':qs_json.length});
db.close()
	})







	 // console.log(result.rows.item(0)["count(*)"]);
	 // res.json({"number":number})
	 




});



//this is to get result
router.post('/school/getresult/:id', (req, res) =>{ 
	console.log('getresult', req.params.id, req.body)

	var subject = req.params.id
	
	var current_session = req.body.current_session
	var current_term = req.body.current_term
	var resultclass = req.body.resultclass
	console.log("details", subject,current_session, current_term, resultclass)
	
	// console.log(addquestionclass)

	const sqlite3 = require('sqlite3').verbose()

	let db = new sqlite3.Database("./Jamb_360.sqlite3")
 // db.run('DELETE from contacts where id = ' + sub_id, function(err){
 	result_json = []
 	db.all('SELECT * from ' + "RESULTS" +' where SESSION = $current_session and TERM = $current_term and CLASS = $resultclass and SUBJECT = $subject ',{$subject:subject, $current_session:current_session, $current_term:current_term, $resultclass:resultclass} , function(err, rows){
		rows.forEach(function(row){
			var name = row.NAME
			var session = row.SESSION
			var term = row.TERM
			var result_class = row.CLASSD
			var subject = row.SUBJECT
			var score = row.SCORE
			var out_of = row.OUT_OF
			var date = row.DATE
			console.log(name, session, score)
			// var subject = row.SUBJECT
			// var question_id = row.ID
			// console.log(question, OPTION_A, OPTION_B, OPTION_C, OPTION_D, Answer, subject, question_id)
			var data = {'name':name, 'session':session, 'term':term, 'resultclass':resultclass, 'subject':subject, 'score':score, 'out_of':out_of, 'subject':subject, 'date':date}
			result_json.push(data)
			
			
		})

res.json(result_json);
	})

		// var yourval = result_json;
		// console.log(yourval)
		



});






//this is to get ses
router.post('/school/session', (req, res) =>{ 
		console.log('working')
	const sqlite3 = require('sqlite3')

	let db = new sqlite3.Database("./Jamb_360.sqlite3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        /* Put code to create table(s) here */
        // createTable()
    } 
	})
    var db_json = []

	db.all("SELECT * FROM SESSIONS", function(err, rows){
		rows.forEach(function(row){
			var session = row.session
			var session_id = row.id
			console.log(session)
			var data = {'session':session, "session_id":session_id}
			db_json.push(data)

			
			
		})

		var yourval = db_json;
		console.log(yourval)
		res.json(yourval);
	})



});



router.post('/school/deletesession/:id', (req, res) =>{ 

var session_id = req.params.id;


const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("./Jamb_360.sqlite3");
db.run('DELETE from SESSIONS where id = ' + session_id, function(err){

if (err){
console.log(err.message);
};
console.log("deleted ");
console.log('req.params.id');
res.json({'deleted':req.params.id});
} );

db.close();


});




router.post('/school/changecurrentterm', (req, res) =>{ 

var term = req.body.term;


const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("./Jamb_360.sqlite3");
db.run("UPDATE " + "CURRENT_TERM"+ " SET term = $term  WHERE id=$id  ",{$term:term, $id:1, }), function(err){
if (err){
console.log(err.message)
}
console.log("updated")
}


res.json({"msg":term})

db.close();


});


router.post('/school/changecurrentsession', (req, res) =>{ 

var session = req.body.session;


const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("./Jamb_360.sqlite3");
db.run("UPDATE " + "CURRENT_SESSION"+ " SET session = $session  WHERE id=$id  ",{$session:session, $id:1, }), function(err){
if (err){
console.log(err.message)
}
console.log("updated")
}


res.json({"msg":session})

db.close();


});






//this is to delete subjects
router.post('/school/exam', (req, res) =>{ 
	
	var select_class = req.body.select_class
	var current_term = req.body.current_term
	var current_session = req.body.current_session
	var select_subject = req.body.select_subject
	console.log(select_subject)
	const sqlite3 = require('sqlite3')

	let db = new sqlite3.Database("./Jamb_360.sqlite3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        /* Put code to create table(s) here */
        // createTable()
    } 
	})
    var db_json = []
    // db.all("SELECT * FROM " + select_subject + " WHERE SESSION=$current_session and TERM=$current_term and STUDENT_CLASS=$select_class ",{$current_session:current_session, $current_term:current_term, $select_class:select_class} ,(err, rows)=>{

	db.all("SELECT * FROM " + select_subject + " WHERE SESSION=$name and TERM=$name2 and STUDENT_CLASS=$get_class ",{$name:current_session, $name2:current_term, $get_class:select_class}, function(err, rows){
		rows.forEach(function(row){
			var number = row.NUMBER
			var question = row.QUESTION
			var OPTION_A = row.OPTION_A
			var OPTION_B = row.OPTION_B
			var OPTION_C = row.OPTION_C
			var OPTION_D = row.OPTION_D
			var Answer = row.CORRECT_OPTION
			var image = row.IMAGE
			// var subject = row.SUBJECT
			// var question_id = row.ID
			// console.log(question, OPTION_A, OPTION_B, OPTION_C, OPTION_D, Answer, subject, question_id)
			var data = {'question':question, 'OPTION_A':OPTION_A, 'OPTION_B':OPTION_B, 'OPTION_C':OPTION_C, 'OPTION_D':OPTION_D, 'Answer':Answer, 'number':number, 'subject':select_subject, 'image':image}
			db_json.push(data)
			
			
		})

		var yourval = db_json;
		res.json(yourval);
	})
	



});


//this is to get the total questions from a db to add them
router.post('/school/getquestions/:id', (req, res) =>{ 
	
	var term = req.body.term
	var session = req.body.session
	var get_class = req.body.get_class
	var subject = req.params.id
	console.log(req.params.id, session, term)
	const sqlite3 = require('sqlite3')

	let db = new sqlite3.Database("./Jamb_360.sqlite3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        /* Put code to create table(s) here */
        // createTable()
    } 
	})
    var db_json = []

	// db.all("SELECT * FROM "+ subject +" WHERE" ,(err, rows)=>{
	db.all("SELECT * FROM " + subject + " WHERE SESSION=$name and TERM=$name2 and STUDENT_CLASS=$get_class ",{$name:session, $name2:term, $get_class:get_class} ,(err, rows)=>{
		// console.log(rows[0])
		// res.json({'msg':rows[0]})
		rows.forEach(function (row) {
		var question = row.QUESTION
		var a = row.OPTION_A
		var b = row.OPTION_B
		var c = row.OPTION_C
		var d = row.OPTION_D
		var correct_option = row.CORRECT_OPTION
		var que_id = row.NUMBER
		var image = row.IMAGE
		
		data = {'question':question ,'a':a, 'b':b, 'c':c, 'd':d, 'correct_option':correct_option, 'que_id':que_id, 'image':image}
		db_json.push(data)
		
		// res.json({"question":question, 'a':a})
		}



		);

		res.json(db_json)



	})
	// console.log(db_json)


});



//this is to get the total questions from a db to add them
router.post('/school/editquestions/:id', (req, res) =>{ 
	
	var term = req.body.term
	var session = req.body.session
	var number = req.body.number
	var question = req.body.question
	var option_a =  req.body.option_a
	var option_b = req.body.option_b
	var option_c = req.body.option_c
	var option_d = req.body.option_d
	var correct_option = req.body.correct_option
	var image = req.body.image
	var addquestionclass = req.body.addquestionclass
	
	var subject = req.params.id

	// console.log(req.params.id, session, term, number, question, option_a, option_b, option_c, option_d, correct_option)
	const sqlite3 = require('sqlite3')

	let db = new sqlite3.Database("./Jamb_360.sqlite3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        /* Put code to create table(s) here */
        // createTable()
    } 
	})

	db.run("UPDATE " + subject+ " SET QUESTION = $question, OPTION_A = $option_a, OPTION_B = $option_b, OPTION_C = $option_c, OPTION_D = $option_d, CORRECT_OPTION = $correct_option, IMAGE = $image WHERE SESSION=$name and TERM=$name2 and NUMBER=$number and STUDENT_CLASS=$student_class ",{$name:session, $name2:term, $number:number, $option_d:option_d, $question:question, $option_a:option_a, $option_b:option_b, $option_c:option_c, $correct_option:correct_option, $student_class:addquestionclass, $image:image}), function(err){
		if (err){
			console.log(err.message)
		}
		console.log("updated")
	}
    var db_json = []

    res.json(req.body)
	// console.log(db_json)


});



router.post('/school/selectterm', (req, res) =>{ 

	



});

//this function will get the term and session details
router.post('/school/currentsession', (req, res) =>{ 

var db_json = []

var db_session
var db_term

	    db.all("SELECT rowid AS id, session FROM CURRENT_SESSION", function(err, rows) {
	        rows.forEach(function (row) {
	        	 db_session = row.session
	        	console.log(db_session)
	        	res.json({"session":db_session})
	        }
	        );
	    });

});



//this function will get the term  details
router.post('/school/currentterm', (req, res) =>{ 
var db_term

	    db.all("SELECT rowid AS id, term FROM CURRENT_TERM", function(err, rows) {
	        rows.forEach(function (row) {
	        	 db_term = row.term
	        	console.log(db_term)
	        	res.json({"term":db_term})
	        }
	        );
	    });

});


router.post('/school/createtable', (req, res) =>{ 

const sqlite3 = require('sqlite3')

let db = new sqlite3.Database("./Jamb_360.sqlite3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 

    } 
})

const createTable = () => {
    console.log("create database table contacts");
    db.run("CREATE TABLE IF NOT EXISTS BUSINESS_STUDIES(NUMBER INTEGER PRIMARY KEY , NAME TEXT, SESSION TEXT, TERM TEXT, QUESTION TEXT, OPTION_A TEXT, OPTION_B TEXT, OPTION_C TEXT, OPTION_D TEXT, CORRECT_OPTION TEXT)");
}
});



router.post('/school/addquestions', (req, res) =>{ 

	var QUESTION = req.body.question
	var image = req.body.image
	var OPTION_A = req.body.option_a
	var OPTION_B = req.body.option_b
	var OPTION_C = req.body.option_c
	var OPTION_D = req.body.option_d
	var CORRECT_OPTION = req.body.correct_option
	var current_session = req.body.current_session
	var current_term = req.body.current_term
	var addquestionsubject = req.body.addquestionsubject
	var addquestiontotal = Number(req.body.addquestiontotal)+1
	var addquestionclass = req.body.addquestionclass
	const sqlite3 = require('sqlite3')
	var data = req.body
	data.addquestiontotal = addquestiontotal

	let db = new sqlite3.Database("./Jamb_360.sqlite3", (err) => { 
	if (err) { 
	console.log('Error when creating the database', err) 
	} else { 
	console.log('Database created!') 
	} 
	})
	console.log(addquestionsubject)
	db.run('INSERT INTO ' + addquestionsubject +' (NUMBER, SESSION, TERM, QUESTION, OPTION_A, OPTION_B, OPTION_C, OPTION_D, CORRECT_OPTION, STUDENT_CLASS, IMAGE) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [addquestiontotal, current_session, current_term, QUESTION, OPTION_A, OPTION_B, OPTION_C, OPTION_D, CORRECT_OPTION, addquestionclass, image])
	console.log('done')
	// console.log()
	res.json(data)
	// res.end()

});



router.post('/school/addresults', (req, res) =>{ 
	var subject = req.body.subject
	var current_term = req.body.current_term
	var current_session = req.body.current_session
	var student_class = req.body.student_class
	var student_name = req.body.student_name
	var score = req.body.score
	var out_of = req.body.out_of
	var date = req.body.date

	const sqlite3 = require('sqlite3')


	let db = new sqlite3.Database("./Jamb_360.sqlite3", (err) => { 
	if (err) { 
	console.log('Error when creating the database', err) 
	} else { 
	console.log('Database created!') 
	} 
	})
	// console.log(addquestionsubject)
	db.run('INSERT INTO ' + 'RESULTS' +' (NAME, SESSION, TERM, CLASS, SUBJECT, SCORE, OUT_OF, DATE) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [student_name, current_session, current_term, student_class, subject, score, out_of, date])
	console.log('done')
	// console.log()
	res.json({"msg":"Submitted"})
	// res.end()

});


router.post('/school/addsession', (req, res) =>{ 
	var session = req.body.session

	const sqlite3 = require('sqlite3')


	let db = new sqlite3.Database("./Jamb_360.sqlite3", (err) => { 
	if (err) { 
	console.log('Error when creating the database', err) 
	} else { 
	console.log('Database created!') 
	} 
	})
	// console.log(addquestionsubject)
	db.run('INSERT INTO ' + 'SESSIONS' +' (session) VALUES(?)', [session])
	console.log('done')
	// console.log()
	res.json({"msg":"Submitted"})
	// res.end()

});






// Create
router.post('/', (req, res) => {
	const sqlite3 = require('sqlite3')

	let db = new sqlite3.Database("./Jamb_360.sqlite3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        /* Put code to create table(s) here */
        createTable()
    } 
	})

	const createTable = () => {
    console.log("create database table contacts");
    db.run("CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",  read);
	}




const read = () => {
	let json_subject = {}
	    console.log("Read data from contacts");

	    
	    var db_id
	    var db_value
	    var db_json = []



	    db.all("SELECT rowid AS id, name FROM contacts", function(err, rows) {
	        rows.forEach(function (row) {
	        	 db_id = row.id 
	        	 db_value = row.name
	        	

	        	var data = {'id':db_id, 'value':db_value}
	        	db_json.push(data)
	        	
	        	var returnedTarget = Object.assign(json_subject, db_json);

	        }


	        );

	        	 var yourval = db_json;
	        	 console.log(db_json)
	        	res.json(yourval);



	    });


	    
}


});

module.exports = router;