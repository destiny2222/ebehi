window.onload =  loadFunction

var addquestionstartbutton = document.querySelector("#addquestionstartbutton")
addquestionstartbutton.addEventListener('click', getQuestions)

var select_result_button = document.querySelector("#select_result_button")
select_result_button.addEventListener('click', getResult)

// var get_result = document.querySelector("#get_result")
// get_result.addEventListener('click', selectResult)

var change_current_session = document.querySelector("#change_current_session")
change_current_session.addEventListener('click', changeSession)

var change_current_term = document.querySelector("#change_current_term")
change_current_term.addEventListener('click', changeCurrentTerm)

var addsessionbutton = document.querySelector("#addsessionbutton")
addsessionbutton.addEventListener('click', addSession)

var deletequestion = document.querySelector("#deletequestion")
deletequestion.addEventListener('click', deleteQuestion)

var editquestions1 = document.querySelector("#editquestions1")
editquestions1.addEventListener('click', editQuestions)

var homepagebutton = document.querySelector("#homepagebutton")
homepagebutton.addEventListener('click', homePage)

// var getquestionsbtn = document.querySelector("#getquestionsbtn")
// getquestionsbtn.addEventListener('click', getQuestionsBtn)

var submitquestions1 = document.querySelector("#submitquestions1")
submitquestions1.addEventListener('click', submitQuestion)

var submitquestion = document.querySelector('#submitquestion')
submitquestion.addEventListener('click', submitQuestion)

var startexam = document.querySelector("#start");
startexam.addEventListener('click', StartExam)

var change_session = document.querySelector("#change_session");
change_session.addEventListener('click', loadSession)

// var schsession = document.querySelector("#schsession");
// schsession.addEventListener('click', SchSession)
var cancel_exam = document.querySelector('#cancel_exam');
cancel_exam.addEventListener('click', cancelExam);

var submit_exam = document.querySelector('#submit_exam');
submit_exam.addEventListener('click', endExamTimer);


var homepage = document.querySelector('#homepage');
homepage.addEventListener('click', homePage);

// import axios from 'node_modules/axios/dist/axios'

var option_a = document.querySelector('#option_a');
var option_b = document.querySelector('#option_b');
var option_c = document.querySelector('#option_c');
var option_d = document.querySelector('#option_d');
var quest1 = document.querySelector('.quest1');
var quest2 = document.querySelector('.quest2');
var quest3 = document.querySelector('.quest3');
var quest4 = document.querySelector('.quest4');
var quest5 = document.querySelector('.quest5');
var quest6 = document.querySelector('.quest6');
var quest7 = document.querySelector('.quest7');
var quest8 = document.querySelector('.quest8');
var quest9 = document.querySelector('.quest9');
var quest10 = document.querySelector('.quest10');
var quest11 = document.querySelector('.quest11');
var quest12 = document.querySelector('.quest12');
var quest13 = document.querySelector('.quest13');
var quest14 = document.querySelector('.quest14');
var quest15 = document.querySelector('.quest15');
var quest16 = document.querySelector('.quest16');
var quest17 = document.querySelector('.quest17');
var quest18 = document.querySelector('.quest18');
var quest19 = document.querySelector('.quest19');
var quest20 = document.querySelector('.quest20');
var quest21 = document.querySelector('.quest21');
var quest22 = document.querySelector('.quest22');
var quest23 = document.querySelector('.quest23');
var quest24 = document.querySelector('.quest24');
var quest25 = document.querySelector('.quest25');
var quest26 = document.querySelector('.quest26');
var quest27 = document.querySelector('.quest27');
var quest28 = document.querySelector('.quest28');
var quest29 = document.querySelector('.quest29');
var quest30 = document.querySelector('.quest30');
var quest31 = document.querySelector('.quest31');
var quest32 = document.querySelector('.quest32');
var quest33 = document.querySelector('.quest33');
var quest34 = document.querySelector('.quest34');
var quest35 = document.querySelector('.quest35');
var quest36 = document.querySelector('.quest36');
var quest37 = document.querySelector('.quest37');
var quest38 = document.querySelector('.quest38');
var quest39 = document.querySelector('.quest39');
var quest40 = document.querySelector('.quest40');
var quest41 = document.querySelector('.quest41');
var quest42 = document.querySelector('.quest42');
var quest43 = document.querySelector('.quest43');
var quest44 = document.querySelector('.quest44');
var quest45 = document.querySelector('.quest45');
var quest46 = document.querySelector('.quest46');
var quest47 = document.querySelector('.quest47');
var quest48 = document.querySelector('.quest48');
var quest49 = document.querySelector('.quest49');
var quest50 = document.querySelector('.quest50');
var quest51 = document.querySelector('.quest51');
var quest52 = document.querySelector('.quest52');
var quest53 = document.querySelector('.quest53');
var quest54 = document.querySelector('.quest54');
var quest55 = document.querySelector('.quest55');
var quest56 = document.querySelector('.quest56');
var quest57 = document.querySelector('.quest57');
var quest58 = document.querySelector('.quest58');
var quest59 = document.querySelector('.quest59');
var quest60 = document.querySelector('.quest60');

optradioa.addEventListener('click', saveRadioAnswer);
optradiob.addEventListener('click', saveRadioAnswer);
optradioc.addEventListener('click', saveRadioAnswer);
optradiod.addEventListener('click', saveRadioAnswer);
quest1.addEventListener('click', saveAnsweredQuestion);
quest2.addEventListener('click', saveAnsweredQuestion);
quest3.addEventListener('click', saveAnsweredQuestion);
quest4.addEventListener('click', saveAnsweredQuestion);
quest5.addEventListener('click', saveAnsweredQuestion);
quest6.addEventListener('click', saveAnsweredQuestion);
quest7.addEventListener('click', saveAnsweredQuestion);
quest8.addEventListener('click', saveAnsweredQuestion);
quest9.addEventListener('click', saveAnsweredQuestion);
quest10.addEventListener('click', saveAnsweredQuestion);
quest11.addEventListener('click', saveAnsweredQuestion);
quest12.addEventListener('click', saveAnsweredQuestion);
quest13.addEventListener('click', saveAnsweredQuestion);
quest14.addEventListener('click', saveAnsweredQuestion);
quest15.addEventListener('click', saveAnsweredQuestion);
quest16.addEventListener('click', saveAnsweredQuestion);
quest17.addEventListener('click', saveAnsweredQuestion);
quest18.addEventListener('click', saveAnsweredQuestion);
quest19.addEventListener('click', saveAnsweredQuestion);
quest20.addEventListener('click', saveAnsweredQuestion);
quest21.addEventListener('click', saveAnsweredQuestion);
quest22.addEventListener('click', saveAnsweredQuestion);
quest23.addEventListener('click', saveAnsweredQuestion);
quest24.addEventListener('click', saveAnsweredQuestion);
quest25.addEventListener('click', saveAnsweredQuestion);
quest26.addEventListener('click', saveAnsweredQuestion);
quest27.addEventListener('click', saveAnsweredQuestion);
quest28.addEventListener('click', saveAnsweredQuestion);
quest29.addEventListener('click', saveAnsweredQuestion);
quest30.addEventListener('click', saveAnsweredQuestion);
quest31.addEventListener('click', saveAnsweredQuestion);
quest32.addEventListener('click', saveAnsweredQuestion);
quest33.addEventListener('click', saveAnsweredQuestion);
quest34.addEventListener('click', saveAnsweredQuestion);
quest35.addEventListener('click', saveAnsweredQuestion);
quest36.addEventListener('click', saveAnsweredQuestion);
quest37.addEventListener('click', saveAnsweredQuestion);
quest38.addEventListener('click', saveAnsweredQuestion);
quest39.addEventListener('click', saveAnsweredQuestion);
quest40.addEventListener('click', saveAnsweredQuestion);
quest41.addEventListener('click', saveAnsweredQuestion);
quest42.addEventListener('click', saveAnsweredQuestion);
quest43.addEventListener('click', saveAnsweredQuestion);
quest44.addEventListener('click', saveAnsweredQuestion);
quest45.addEventListener('click', saveAnsweredQuestion);
quest46.addEventListener('click', saveAnsweredQuestion);
quest47.addEventListener('click', saveAnsweredQuestion);
quest48.addEventListener('click', saveAnsweredQuestion);
quest49.addEventListener('click', saveAnsweredQuestion);
quest50.addEventListener('click', saveAnsweredQuestion);
quest51.addEventListener('click', saveAnsweredQuestion);
quest52.addEventListener('click', saveAnsweredQuestion);
quest53.addEventListener('click', saveAnsweredQuestion);
quest54.addEventListener('click', saveAnsweredQuestion);
quest55.addEventListener('click', saveAnsweredQuestion);
quest56.addEventListener('click', saveAnsweredQuestion);
quest57.addEventListener('click', saveAnsweredQuestion);
quest58.addEventListener('click', saveAnsweredQuestion);
quest59.addEventListener('click', saveAnsweredQuestion);
quest60.addEventListener('click', saveAnsweredQuestion);

var subject = document.querySelector("#subject");
subject.addEventListener('click', Subject)

var generallink = document.querySelector("#generallink");
generallink.addEventListener('click', Test2)

// var sch_sessions = document.querySelector("#sch_sessions");
// sch_sessions.addEventListener('click', SchSession)

// var administrator = document.querySelector("#administrator");
// administrator.addEventListener('click', StartExam)

// var subject = document.querySelector("#deletesubject");
// subject.addEventListener('click', DeleteSubject)

var generalquestion 
student_answer_list = [];
general_answer_list = [];





function getQuestionsBtn(){
	
	var tr = document.createElement("tr")
	var form = document.createElement('form')

}

function addSession(){
var session = document.querySelector("#addsessionvalue").value

	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'
	var addquestionclass = document.querySelector("#addquestionclass").innerHTML

	var url = index1 + '/api/members/school/addsession'
	let  formData = new FormData()
	formData.append('session', session)


	fetch(url, 
	{
		body: new URLSearchParams(formData), 
		method: 'post',


	}).then(res => res.json()).then(function(data) {
		console.log(data)

	})



}


function deleteQuestion(){
	
	var current_session = document.querySelector('#current_session').innerHTML;
	var current_term = document.querySelector("#current_term").innerHTML
	var get_subject_index = document.querySelector('#get_subject').selectedIndex;
	var get_subject = document.querySelector('#get_subject').options[get_subject_index].text;
	var last_child = document.querySelectorAll('tr')
	last_child = last_child[last_child.length-1]
	number = last_child.firstChild.innerHTML
	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'
	var addquestionclass = document.querySelector("#addquestionclass").innerHTML

	var url = index1 + '/api/members/school/deletequestions/'+get_subject
	let  formData = new FormData()
	formData.append('number', number)
	formData.append('current_session', current_session)
	formData.append('current_term', current_term)
	formData.append('addquestionclass', addquestionclass)

	fetch(url, 
	{
		body: new URLSearchParams(formData), 
		method: 'post',


	}).then(res => res.json()).then(function(data) {
		var addquestiontotal = document.querySelector("#addquestiontotal").innerHTML
		var last_child = document.querySelectorAll('tr')
		last_child = last_child[last_child.length-1]
		last_child.remove();
		var number = data.msg
		// addquestiontotal = Number(addquestiontotal) - 1
		
		document.querySelector("#addquestiontotal").innerHTML = number
	})

	// last_child.style.display = 'none'
	
}




function getResult(){
	var select_result_class_index = document.querySelector('#select_result_class').selectedIndex;
	var select_result_class = document.querySelector('#select_result_class').options[select_result_class_index].text;

	var select_result_subject_index = document.querySelector('#select_result_subject').selectedIndex;
	var select_result_subject = document.querySelector('#select_result_subject').options[select_result_subject_index].text;

	var current_session = document.querySelector("#current_session").innerHTML
	var current_term = document.querySelector("#current_term").innerHTML
	console.log(select_result_class, select_result_subject, current_term, current_session)
	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'

	var url = index1 + '/api/members/school/getresult/' + select_result_subject

	let  formData = new FormData()
	formData.append('current_session', current_session)
	formData.append('current_term', current_term)
	formData.append('resultclass', select_result_class)
	
	
	fetch(url, 
	{
		body: new URLSearchParams(formData), 
		method: 'post',


	}).then(res => res.json()).then(function(data) {
		console.log(data)
		document.querySelector("#resultsubject").innerHTML = data[0].subject
		document.querySelector("#resultclass").innerHTML = data[0].resultclass
		// document.querySelector("#resulttotal").innerHTML = data[0].out_of
		// var total = data[0].out_of
		document.querySelector("#resultdiv").style.display = 'block'

document.querySelector('#start_exam_button').style.display = 'none'
// document.querySelector('#properties_div').style.display = 'none'
document.querySelector('#add_questions_div').style.display = 'none'
document.querySelector('#get_questions_div').style.display = 'none'
// document.querySelector("#info_div").style.display = 'block'

document.querySelector('#subject').style.display = 'none'
document.querySelector("#change_session").style.display = 'none'
document.querySelector("#change_current_termnav").style.display = 'none'
// document.querySelector("#schsession").style.display = 'none'
document.querySelector("#get_result").style.display = 'none'

  for (i=0; i<data.length; i++){
  	

  	var tablebody = document.querySelector("#resulttablebody")
	var tr = document.createElement("tr")

	var td1 = document.createElement("td")
	var text1 = document.createTextNode(data[i].name)
	td1.setAttribute('id', 'resultname'+data[i].name)

	var td2 = document.createElement("td")
	var text2 = document.createTextNode(data[i].score)
	td2.setAttribute('id', 'resultscore'+data[i].score)

	var td3 = document.createElement("td")
	var text3 = document.createTextNode(data[i].date)
	
	var td4 = document.createElement("td")
	var percentage = Math.ceil( ((data[i].score)/data[i].out_of) * 100 )

	var text4 = document.createTextNode(percentage)

	var td5 = document.createElement("td")
	var total = data[i].out_of
	var text5 = document.createTextNode(total)

	td2.setAttribute('id', 'date')

	td1.appendChild(text1)
	td2.appendChild(text2)
	td3.appendChild(text3)
	td4.appendChild(text4)
	td5.appendChild(text5)

	tr.appendChild(td1)
	tr.appendChild(td2)
	tr.appendChild(td5)
	tr.appendChild(td4)
	

	tr.appendChild(td3)

	tablebody.appendChild(tr)

}

	})
}


function changeCurrentTerm(){
	
	var term_index = document.querySelector('#select_term').selectedIndex;
	var term = document.querySelector('#select_term').options[term_index].text;
	console.log(term)
	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'

	var url = index1 + '/api/members/school/changecurrentterm'

	let  formData = new FormData()
	formData.append('term', term)
	
	
	fetch(url, 
	{
		body: new URLSearchParams(formData), 
		method: 'post',


	}).then(res => res.json()).then(function(data) {
		document.querySelector("#current_term").innerHTML = data.msg
	})


}




function getQuestions(){
var current_session = document.querySelector('#current_session').innerHTML;
var current_term = document.querySelector("#current_term").innerHTML

var get_subject_index = document.querySelector('#get_subject').selectedIndex;
var get_subject = document.querySelector('#get_subject').options[get_subject_index].text;

var get_class_index = document.querySelector('#addsubject_class').selectedIndex;
var get_class = document.querySelector('#addsubject_class').options[get_class_index].text;



	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'

	var url = index1 + '/api/members/school/getquestions/'+get_subject

	let  formData = new FormData()
	formData.append('term', current_term)
	formData.append('session', current_session)
	formData.append('get_class', get_class)
	
	fetch(url, 
	{
		body: new URLSearchParams(formData), 
		method: 'post',


	}).then(res => res.json()).then(function(data) {

  document.querySelector("#addquestionsubject").innerHTML = get_subject
  document.querySelector("#addquestionclass").innerHTML = get_class
  document.querySelector("#addquestiontotal").innerHTML = data.length
  document.querySelector("#addquestiondiv").style.display = 'block'
document.querySelector("#start_exam_button").style.display = 'none'

document.querySelector("#add_questions_div").style.display = 'none'
document.querySelector("#get_questions_div").style.display = 'none'
// document.querySelector("#session_div").style.display = 'none'
document.querySelector('#subject').style.display = 'none'
document.querySelector("#change_session").style.display = 'none'
document.querySelector("#change_current_termnav").style.display = 'none'
// document.querySelector("#schsession").style.display = 'none'
document.querySelector("#get_result").style.display = 'none'

  for (i=0; i<data.length; i++){
  	

  	var tablebody = document.querySelector("#tablebody")
	var tr = document.createElement("tr")

	var td1 = document.createElement("td")
	var text1 = document.createTextNode(data[i].que_id)
	td1.setAttribute('id', 'text1'+data[i].que_id)

	var td11 = document.createElement("td")
	var text11 = document.createTextNode(data[i].image)
	td11.setAttribute('id', 'text11'+data[i].que_id)

	var td2 = document.createElement("td")
	var text2 = document.createTextNode(data[i].question)
	td2.setAttribute('id', 'text2'+data[i].que_id)

	var td3 = document.createElement("td")
	var text3 = document.createTextNode(data[i].a)
	td3.setAttribute('id', 'text3'+data[i].que_id)

	var td4 = document.createElement("td")
	var text4 = document.createTextNode(data[i].b)
	td4.setAttribute('id', 'text4'+data[i].que_id)

	var td5 = document.createElement("td")
	var text5 = document.createTextNode(data[i].c)
	td5.setAttribute('id', 'text5'+data[i].que_id)

	var td6 = document.createElement("td")
	var text6 = document.createTextNode(data[i].d)
	td6.setAttribute('id', 'text6'+data[i].que_id)

	var td7 = document.createElement("td")
	var text7 = document.createTextNode(data[i].correct_option)
	td7.setAttribute('id', 'text7'+data[i].que_id)

	var td8 = document.createElement("td")
	var submit_btn = document.createElement("button")
	var submit_text = document.createTextNode("Edit")

	submit_btn.setAttribute('class', 'btn btn-primary')
	submit_btn.setAttribute('id', data[i].que_id)
	submit_btn.setAttribute('data-toggle', 'modal')
	submit_btn.setAttribute('data-target', "#editquestionmodal")
	submit_btn.onclick= function() {
	const sub_id = this.id
	
	var number = document.querySelector("#text1"+sub_id).innerHTML
	var question = document.querySelector("#text2"+sub_id).innerHTML
	var option_a = document.querySelector("#text3"+sub_id).innerHTML
	var option_b = document.querySelector("#text4"+sub_id).innerHTML
	var option_c = document.querySelector("#text5"+sub_id).innerHTML
	var option_d = document.querySelector("#text6"+sub_id).innerHTML
	var correct_option = document.querySelector("#text7"+sub_id).innerHTML


	document.querySelector("#editquestionmodalnumber").innerHTML = number
	document.querySelector("#editquestionmodalquestion").value = question
	document.querySelector("#editquestionmodala").value = option_a
	document.querySelector("#editquestionmodalb").value = option_b
	document.querySelector("#editquestionmodalc").value = option_c
	document.querySelector("#editquestionmodald").value = option_d
	document.querySelector("#editquestionmodalselect").value = correct_option
	




}	

	// var td9 = document.createElement("td")
	// var delete_btn = document.createElement("button")
	// var delete_text = document.createTextNode("Delete")
	// delete_btn.setAttribute('class', 'btn btn-danger')
	




	td1.appendChild(text1)
	td11.appendChild(text11)

	td2.appendChild(text2)
	td3.appendChild(text3)
	td4.appendChild(text4)
	td5.appendChild(text5)
	td6.appendChild(text6)
	td7.appendChild(text7)
	submit_btn.appendChild(submit_text)
	// delete_btn.appendChild(delete_text)
	td8.appendChild(submit_btn)
	// td9.appendChild(delete_btn)

	tr.appendChild(td1)
	tr.appendChild(td11)

	tr.appendChild(td2)
	tr.appendChild(td3)
	tr.appendChild(td4)
	tr.appendChild(td5)
	tr.appendChild(td6)
	tr.appendChild(td7)
	tr.appendChild(td8)
	// tr.appendChild(td9)

	tablebody.appendChild(tr)







  }
  // for loop
}) 






// console.log(get_subject.length)
}



function editQuestions(){

var number = document.querySelector("#editquestionmodalnumber").innerHTML
var image = document.querySelector("#editimage").value
var image1 = image.indexOf("fakepath") + 9
var image2 = image.slice(image1)
// console.log(image1, image2)
var question = document.querySelector("#editquestionmodalquestion").value
var option_a = document.querySelector("#editquestionmodala").value
var option_b = document.querySelector("#editquestionmodalb").value
var option_c = document.querySelector("#editquestionmodalc").value
var option_d = document.querySelector("#editquestionmodald").value
var correct_option_index = document.querySelector("#editquestionmodalselect").selectedIndex;
var correct_option = document.querySelector('#editquestionmodalselect').options[correct_option_index].text;
var current_session = document.querySelector('#current_session').innerHTML;
var current_term = document.querySelector("#current_term").innerHTML
var addquestionclass = document.querySelector("#addquestionclass").innerHTML
var get_subject_index = document.querySelector('#get_subject').selectedIndex;
var get_subject = document.querySelector('#get_subject').options[get_subject_index].text;
var location = window.location.href	
var index = location.indexOf('3000')
var index1 = location.substring(0, index) + '3000'
var questionsubject = document.querySelector("#addquestionsubject").innerHTML

var url2 = index1 + '/api/members/school/editquestions/'+questionsubject
// console.log('details',number, question, option_a, option_b, option_c, option_d, correct_option, questionsubject  )
let  formData = new FormData()
formData.append('term', current_term)
formData.append('session', current_session)
formData.append('number', number)
formData.append('question', question)
formData.append('option_a', option_a)
formData.append('option_b', option_b)
formData.append('option_c', option_c)
formData.append('option_d', option_d)
formData.append('correct_option', correct_option)
formData.append('addquestionclass', addquestionclass)
formData.append('image', image2)

fetch(url2, 
{
body: new URLSearchParams(formData), 
method: 'post',


}).then(res => res.json()).then(function(data) {
var number = data.number

document.querySelector("#text2"+number).innerHTML = data.question
document.querySelector("#text3"+number).innerHTML = data.option_a
document.querySelector("#text4"+number).innerHTML = data.option_b
document.querySelector("#text5"+number).innerHTML = data.option_c
document.querySelector("#text6"+number).innerHTML = data.option_d
document.querySelector("#text7"+number).innerHTML = data.correct_option
document.querySelector("#text11"+number).innerHTML = data.image

})


}

function submitQuestion(){
var image = document.querySelector("#image").value
var image1 = image.indexOf("fakepath") + 9
var image2 = image.slice(image1)
var get_answer_index = document.querySelector('#addquestionmodalselect').selectedIndex;
var correct_option = document.querySelector('#addquestionmodalselect').options[get_answer_index].text;
var question = document.querySelector('#addquestionmodalquestion').value
var option_a = document.querySelector('#addquestionmodala').value
var option_b = document.querySelector('#addquestionmodalb').value
var option_c = document.querySelector('#addquestionmodalc').value
var option_d = document.querySelector('#addquestionmodald').value
var current_session = document.querySelector('#current_session').innerHTML
var current_term = document.querySelector('#current_term').innerHTML
var addquestiontotal = document.querySelector('#addquestiontotal').innerHTML
var addquestionsubject = document.querySelector('#addquestionsubject').innerHTML
var addquestionclass = document.querySelector('#addquestionclass').innerHTML



	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'

	var url = index1 + '/api/members/school/addquestions'

	let  formData = new FormData()
	formData.append('question', question)
	formData.append('option_a', option_a)
	formData.append('option_b', option_b)
	formData.append('option_c', option_c)
	formData.append('option_d', option_d)
	formData.append('correct_option', correct_option)
	formData.append('current_session', current_session)
	formData.append('current_term', current_term)
	formData.append('addquestiontotal', addquestiontotal)
	formData.append('addquestionsubject', addquestionsubject)
	formData.append('addquestionclass', addquestionclass)
	formData.append('image', image2)

	fetch(url, 
	{
		body: new URLSearchParams(formData), 
		method: 'post',


	}).then(res => res.json()).then(function(data) {
	document.querySelector('#addquestionmodalquestion').value = ""
	document.querySelector('#addquestionmodala').value = ""
	document.querySelector('#addquestionmodalb').value = ""
	document.querySelector('#addquestionmodalc').value = ""
	document.querySelector('#addquestionmodald').value = ""
	// document.querySelector('#addquestionmodalselect').options[get_answer_index].text = "_____"
	document.querySelector("#addquestiontotal").innerHTML = data.addquestiontotal

  	var tablebody = document.querySelector("#tablebody")
	var tr = document.createElement("tr")

	var td1 = document.createElement("td")
	var text1 = document.createTextNode(data.addquestiontotal)
	td1.setAttribute('id', "text1"+data.addquestiontotal)

	var td11 = document.createElement("td")
	var text11 = document.createTextNode(data.image)
	td11.setAttribute('id', "text1"+data.image)

	var td2 = document.createElement("td")
	td2.setAttribute('id', "text2"+data.addquestiontotal)
	var text2 = document.createTextNode(data.question)

	var td3 = document.createElement("td")
	td3.setAttribute('id', "text3"+data.addquestiontotal)
	var text3 = document.createTextNode(data.option_a)

	var td4 = document.createElement("td")
	td4.setAttribute('id', "text4"+data.addquestiontotal)
	var text4 = document.createTextNode(data.option_b)

	var td5 = document.createElement("td")
	td5.setAttribute('id', "text5"+data.addquestiontotal)
	var text5 = document.createTextNode(data.option_c)

	var td6 = document.createElement("td")
	td6.setAttribute('id', "text6"+data.addquestiontotal)
	var text6 = document.createTextNode(data.option_d)

	var td7 = document.createElement("td")
	td7.setAttribute('id', "text7"+data.addquestiontotal)
	var text7 = document.createTextNode(data.correct_option)

	var td8 = document.createElement("td")
	var submit_btn = document.createElement("button")
	var submit_text = document.createTextNode("Edit")
	submit_btn.setAttribute('class', 'btn btn-primary')
	submit_btn.setAttribute('id', data.addquestiontotal)
	submit_btn.addEventListener('click', editQuestions)


	td1.appendChild(text1)
	td11.appendChild(text11)
	td2.appendChild(text2)
	td3.appendChild(text3)
	td4.appendChild(text4)
	td5.appendChild(text5)
	td6.appendChild(text6)
	td7.appendChild(text7)
	submit_btn.appendChild(submit_text)
	td8.appendChild(submit_btn)


	tr.appendChild(td1)
	tr.appendChild(td11)

	tr.appendChild(td2)
	tr.appendChild(td3)
	tr.appendChild(td4)
	tr.appendChild(td5)
	tr.appendChild(td6)
	tr.appendChild(td7)
	tr.appendChild(td8)


	tablebody.appendChild(tr)




	 console.log(data)})

}






// }
function loadFunction(){
	
	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'

	var url = index1 + '/api/members/school/currentsession'
	const Http = new XMLHttpRequest();
	Http.open("POST", url);
	Http.send();

	Http.onload=(e)=>{
		
		var json = Http.responseText;
		json = JSON.parse(json)		
		document.querySelector('#current_session').innerHTML = json.session
		// console.log('session', json.session)
		
		loadFunction2()
	}
}
function loadFunction2(){
var url2 = index1 + '/api/members/school/'
	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'

	var url = index1 + '/api/members/school/currentterm'
	const Http = new XMLHttpRequest();
	Http.open("POST", url);
	Http.send();

	Http.onload=(e)=>{
		
		var json = Http.responseText;
		json = JSON.parse(json)		
		// var obj = document.querySelector('#'+json).innerHTML
		// console.log(json.term)
		document.querySelector('#current_term').innerHTML = json.term
	}



}

function saveAnsweredQuestion(){
	// console.log('generalquestion', generalquestion)
	var question_number = this.innerHTML
	var color = this.style;
	var previous_number = Number(this.innerHTML)-1
	var current_number = Number(this.innerHTML)

	var student_answer = student_answer_list[Number(this.innerHTML)] 

	var current_number_list = student_answer_list[current_number] //this is the current value of the list

	var previous_number_list = student_answer_list[previous_number] //this is the previous value of the list\

	var student_answer_alphabeta = document.querySelector('#student_answer_alphabeta').innerHTML;
	var student_answer_alphabetb = document.querySelector('#student_answer_alphabetb').innerHTML;
	var student_answer_alphabetc = document.querySelector('#student_answer_alphabetc').innerHTML;
	var student_answer_alphabetd = document.querySelector('#student_answer_alphabetd').innerHTML;

	if(current_number_list==optradioa.value){
		// console.log('optradioa.checked = true;');
		optradioa.checked = true;
		color.backgroundColor='green';
	}
	else if (current_number_list==optradiob.value){
		// console.log('optradiob.checked = true;');
		optradiob.checked = true;
		color.backgroundColor='green';
	}
	else if (current_number_list==optradioc.value){
		// console.log('optradioc.checked = true;');
		optradioc.checked = true;
		color.backgroundColor='green';
	}
	else if (current_number_list==optradiod.value){
		// console.log('optradiod.checked = true;');
		optradioa.checked = true;
		color.backgroundColor='green';
	}

	else{
		// console.log("none");
		optradioa.checked = false;
		optradiob.checked = false;
		optradioc.checked = false;
		optradiod.checked = false;
		
	}
		

		var db_object = generalquestion[question_number-1]
		var question_no = document.querySelector('#question_no')
		question_no.innerHTML = question_number
		var question = document.querySelector('#question')
		question.innerHTML = db_object.question
		var option_a = document.querySelector('#option_a')
		option_a.innerHTML = db_object.OPTION_A
		var option_b = document.querySelector('#option_b')
		option_b.innerHTML = db_object.OPTION_B
		var option_c = document.querySelector('#option_c')
		option_c.innerHTML = db_object.OPTION_C
		var option_d = document.querySelector('#option_d')
		option_d.innerHTML = db_object.OPTION_D
		// console.log(db_object)
}


function saveRadioAnswer(){
	var question_no = document.querySelector('#question_no').innerHTML;
	var question_id = "quest" + question_no;
	document.querySelector('.'+question_id).style.backgroundColor = 'green';
	// console.log(student_answer_list);
	student_answer_list[document.querySelector('#question_no').innerHTML] = this.value;

}

function Test(){


	// console.log('working')
}

function StartExam(){
	var current_session = document.querySelector('#current_session').innerHTML;
	var current_term = document.querySelector("#current_term").innerHTML
	var select_class_index = document.querySelector('#select_class').selectedIndex;
	var select_class = document.querySelector('#select_class').options[select_class_index].text;
	var select_subject_index = document.querySelector('#select_subject').selectedIndex;
	var select_subject = document.querySelector('#select_subject').options[select_subject_index].text;
	// console.log("working");

	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'
	// console.log(location, location.length, index, index1)
	var url = index1 + '/api/members/school/exam'

	let  formData = new FormData()
	// formData.append('number', number)
	formData.append('current_session', current_session)
	formData.append('current_term', current_term)
	formData.append('select_class', select_class)
	formData.append('select_subject', select_subject)
		fetch(url, 
	{
		body: new URLSearchParams(formData), 
		method: 'post',


	}).then(res => res.json()).then(function(data) {
	// const Http = new XMLHttpRequest();
	// Http.open("POST", url);
	// Http.send();

	// Http.onload=(e)=>{


	document.querySelector('#subject').style.display = 'none'
	document.querySelector("#change_session").style.display = 'none'
	document.querySelector("#change_current_termnav").style.display = 'none'
	// document.querySelector("#schsession").style.display = 'none'
	document.querySelector("#get_result").style.display = 'none'
	document.querySelector('#start_exam_button').style.display = 'none'
	// document.querySelector('#properties_div').style.display = 'none'
	document.querySelector('#add_questions_div').style.display = 'none'
	document.querySelector('#get_questions_div').style.display = 'none'
	document.querySelector('#main_contents').style.display = 'block'
	document.querySelector('#jumbotron').style.display = 'block'
 
 	var exam_hour = document.querySelector("#exam_hour").value
	var exam_minute = document.querySelector("#exam_minute").value
	document.querySelector("#hours").innerHTML = exam_hour
	document.querySelector("#minutes").innerHTML = exam_minute
	
	// console.log(exam_hour, exam_minute)

	var start_exam_button = document.querySelectorAll('#start_exam_button');
	var select_class_index = document.querySelector('#select_class').selectedIndex;
	var select_class = document.querySelector('#select_class').options[select_class_index].text;
	var select_subject_index = document.querySelector('#select_subject').selectedIndex;
	var select_subject = document.querySelector('#select_subject').options[select_subject_index].text;
	var name = document.querySelector('#name').value;
	var student_name = document.querySelector('#student_name')
	student_name.innerHTML = name
	var student_class = document.querySelector('#student_class')
	student_class.innerHTML = select_class
	// console.log(select_class, select_subject,)
		var json = data
		
		length = data.length
		generalquestion = json
		// console.log(generalquestion)
		console.log(json)

		var student_subject = document.querySelector('#student_subject')
		student_subject.innerHTML = json[0].subject
		var question = document.querySelector('#question')
		question.innerHTML = json[0].question
		var tab_subject = document.querySelector('#tab_subject')
		tab_subject.innerHTML = json[0].subject
		var option_a = document.querySelector('#option_a')
		option_a.innerHTML = json[0].OPTION_A
		var option_b = document.querySelector('#option_b')
		option_b.innerHTML = json[0].OPTION_B
		var option_c = document.querySelector('#option_c')
		option_c.innerHTML = json[0].OPTION_C
		var option_d = document.querySelector('#option_d')
		option_d.innerHTML = json[0].OPTION_D
		var end_question_no = document.querySelector('#end_question_no')
		end_question_no.innerHTML = length
		for (i=0; i<length; i++){
			var num = i+1
			var dat = document.querySelector(".quest"+num)
			dat.style.display='block'
		}



	startInterval()
	})

}


function Test2(){

	// console.log(generalquestion[0]);
}

function loadSession(){
	

	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'
	console.log(location, location.length, index, index1)
	var url = index1 + '/api/members/school/session'
	const Http = new XMLHttpRequest();
	Http.open("POST", url);
	Http.send();

	Http.onload=(e)=>{
		
		var json = Http.responseText;
		json = JSON.parse(json);
		// console.log(json)
		for(i=0; i<json.length; i++){
			console.log(json[0].session)
			var select = document.querySelector("#change_session_modal")
			var option = document.createElement("option")
			var text = document.createTextNode(json[i].session)

			option.appendChild(text)
			select.appendChild(option)
		}


	}
}


function changeSession(){
	var session_index = document.querySelector('#change_session_modal').selectedIndex;
	var session = document.querySelector('#change_session_modal').options[session_index].text;
	console.log(session)
	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'

	var url = index1 + '/api/members/school/changecurrentsession'
	let  formData = new FormData()
	formData.append('session', session)
	
	
	fetch(url, 
	{
		body: new URLSearchParams(formData), 
		method: 'post',


	}).then(res => res.json()).then(function(data) {
		document.querySelector("#current_session").innerHTML = data.msg
		document.location.reload(true)
	})

}


function cancelExam(){
document.location.reload(true)	
}

function SchSession(){
	// console.log("working");

	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'
	console.log(location, location.length, index, index1)
	var url = index1 + '/api/members/school/session'
	const Http = new XMLHttpRequest();
	Http.open("POST", url);
	Http.send();

	Http.onload=(e)=>{
		var modalsession = document.querySelector('#modalsession')
		document.querySelector("#addsessiondiv").style.display = 'block'
document.querySelector('#start_exam_button').style.display = 'none'
// document.querySelector('#properties_div').style.display = 'none'
document.querySelector('#add_questions_div').style.display = 'none'
document.querySelector('#get_questions_div').style.display = 'none'
// document.querySelector("#info_div").style.display = 'block'

document.querySelector('#subject').style.display = 'none'
document.querySelector("#change_session").style.display = 'none'
document.querySelector("#change_current_termnav").style.display = 'none'
// document.querySelector("#schsession").style.display = 'none'
document.querySelector("#get_result").style.display = 'none'
		var json = Http.responseText;
		json = JSON.parse(json);
		length = json.length
		console.log(json, modalsession.innerHTML)

		for (i=0; i<length; i++){
		console.log(json[i].session)
		

  	var tablebody = document.querySelector("#sessiontablebody")
	var tr = document.createElement("tr")
	var button = document.createElement("button")

	var delete_btn = document.createElement("button")
	var delete_text = document.createTextNode('Delete')
	delete_btn.setAttribute('class', 'btn btn-danger')
	delete_btn.setAttribute('id', json[i].session_id)

	delete_btn.onclick= function() {
	const sub_id = this.id
	const Http = new XMLHttpRequest();
	var location = window.location.href	
	var index = location.indexOf('3000')
	var index1 = location.substring(0, index) + '3000'
	console.log(sub_id)
	var url = index1 + '/api/members/school/deletesession/' + sub_id
	
	Http.open("POST", url);
	Http.send();

	Http.onload=(e)=>{
	var json = Http.responseText;
	json = JSON.parse(json)		
	console.log(json.deleted)
	var obj = document.querySelector('#sessionid'+json.deleted)
	obj.remove()
	// console.log(obj)

	}
	}


	var td1 = document.createElement("td")
	var text1 = document.createTextNode(json[i].session)
	td1.setAttribute('id', 'sessionid'+json[i].session_id)
	td1.appendChild(text1)
	delete_btn.appendChild(delete_text)


	td1.appendChild(delete_btn)

	tr.appendChild(td1)
	tablebody.appendChild(tr)








		}

	}


}







function stopInterval(){
	clearInterval(startInterval());
	submitExam()
};

function secondsTimer(){
var sec = Number(document.querySelector('#seconds').innerHTML);
sec = sec+1;
document.querySelector('#seconds').innerHTML = sec;
// console.log(sec);
};

function startInterval(){
	var testing = 'testing';
	var start_interval = setInterval(function()
		{	

       secondsTimer();
       var sec = Number(document.querySelector('#seconds').innerHTML);
		var min = Number(document.querySelector('#minutes').innerHTML);
		var hours = Number(document.querySelector('#hours').innerHTML);
       // console.log(sec);

       if (sec==59){
       	

       	var min = Number(document.querySelector('#minutes').innerHTML);
       	min = min+1;
        document.querySelector('#minutes').innerHTML = min;
        document.querySelector('#seconds').innerHTML = 00;

       }

       if(min==0 && sec==59){
       		
       			console.log('perfctr');
       	var hours = Number(document.querySelector('#hours').innerHTML);
       	hours = hours-1;
       	document.querySelector('#hours').innerHTML = hours;
       	document.querySelector('#minutes').innerHTML = 0;
       		
       }

       else if (min==0 && sec==1 && hours==0){
       	// console.log('finished');
       	clearInterval(start_interval);
       	submitExam()


       }
		
	}, 1000)
};

function endExamTimer(){
document.querySelector('#seconds').innerHTML = 3
document.querySelector('#minutes').innerHTML = 0
document.querySelector('#hours').innerHTML = 0

}

function endExam(){
	console.log(generalquestion)
	var jumbotron = document.querySelector('#jumbotron');
	var main_contents = document.querySelector('#main_contents')
	var start_exam_button = document.querySelectorAll('#start_exam_button');
	jumbotron.style.display = 'none';
	main_contents.style.display = 'none';
	// start_exam_button[0].style.display = 'none';
	// start_exam_button[1].style.display = 'none';
	// start_exam_button[2].style.display = 'none';
	document.querySelector('#hours').innerHTML = 0;
	document.querySelector('#minutes').innerHTML = 0;
	document.querySelector('#seconds').innerHTML = 2;
	information.innerHTML = 'EXAM ENDED';
	info_div.style.display = 'block';

	var i;
	var a;
	var num =0
	document.querySelector('#hours').innerHTML = 0;
	document.querySelector('#minutes').innerHTML = 0;
	document.querySelector('#seconds').innerHTML = 2;


}

function submitExam(){
	// console.log(generalquestion, student_answer_list)

		var opt_a
		var opt_b
		var opt_c
		var opt_d

		
		if (optradioa.checked==true){
			 opt_a= option_a.innerHTML
			 var question_no = document.querySelector("#question_no").innerHTML
			 student_answer_list [question_no] = opt_a
			 student_answer_list [question_no] = document.querySelector("#student_answer_alphabeta").innerHTML;
			console.log(opt_a, question_no)
		}
		if (optradiob.checked==true){
			opt_b = option_b.innerHTML
			var question_no = document.querySelector("#question_no").innerHTML
			student_answer_list [question_no] = document.querySelector("#student_answer_alphabetb").innerHTML;
			console.log(opt_b, question_no)
				}

		if (optradioc.checked==true){
			opt_c = option_c.innerHTML
			var question_no = document.querySelector("#question_no").innerHTML
			student_answer_list [question_no] = document.querySelector("#student_answer_alphabetc").innerHTML;
			console.log(opt_c, question_no)
				}

		if (optradiod.checked==true){
			 opt_d = option_d.innerHTML
			 var question_no = document.querySelector("#question_no").innerHTML
			 student_answer_list [question_no] = document.querySelector("#student_answer_alphabetd").innerHTML;
			console.log(opt_d, question_no)
			}

	var end_ques_no = Number(document.querySelector("#end_question_no").innerHTML)
	for (i=0; i<end_ques_no; i++){
		var real_answer = generalquestion[i].Answer
		general_answer_list[i+1]=real_answer
		}


	for(i=1; i<end_ques_no.length; i++){
		var student_answer = student_answer_list[i]
		var general_answer = general_answer_list[i]
		
		}

		var a = 0

	for(i=1; i<end_ques_no+1; i++){
			
			var student_answer = student_answer_list[i]
			var general_answer = general_answer_list[i]
			console.log(i, student_answer, general_answer)
			if(student_answer==general_answer){
				a=a+1
				// console.log("ok")
			}

		}


		console.log("Answer", a)

		var student_name = document.querySelector("#student_name").innerHTML
		var student_class = document.querySelector("#student_class").innerHTML
		var out_of = document.querySelector("#end_question_no").innerHTML
		var current_session = document.querySelector('#current_session').innerHTML;
		var current_term = document.querySelector("#current_term").innerHTML
		var subject = document.querySelector("#student_subject").innerHTML
		var score = a


		var location = window.location.href	
		var index = location.indexOf('3000')
		var index1 = location.substring(0, index) + '3000'
		var addquestionclass = document.querySelector("#addquestionclass").innerHTML

		var url = index1 + '/api/members/school/addresults'
		var date = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
		let  formData = new FormData()
		formData.append('student_name', student_name)
		formData.append('current_session', current_session)
		formData.append('current_term', current_term)
		formData.append('out_of', out_of)
	formData.append('date', date)

		formData.append('student_class', student_class)
		formData.append('score', score)
		formData.append('subject', subject)

		fetch(url, 
		{
		body: new URLSearchParams(formData), 
		method: 'post',


		}).then(res => res.json()).then(function(data) {
			console.log(data)

		})


	var question_no = document.querySelector("#question_no").innerHTML
	var jumbotron = document.querySelector('#jumbotron');
	var main_contents = document.querySelector('#main_contents')
	var start_exam_button = document.querySelectorAll('#start_exam_button');
	jumbotron.style.display = 'none';
	main_contents.style.display = 'none';
	document.querySelector('#hours').innerHTML = 0;
	document.querySelector('#minutes').innerHTML = 0;
	document.querySelector('#seconds').innerHTML = 2;
	information.innerHTML = 'EXAM ENDED';
	// info_div.style.display = 'block';

	// var i;
	// var a;
	// var num =0
	// document.querySelector('#hours').innerHTML = 0;
	// document.querySelector('#minutes').innerHTML = 0;
	// document.querySelector('#seconds').innerHTML = 2;


}






function homePage(){
document.location.reload(true)


}










function Subject(){
	var subject_list =  document.querySelector('#subject_list')

	var ul_list = document.querySelector('#ul_list')
document.querySelector('#start_exam_button').style.display = 'none'
// document.querySelector('#properties_div').style.display = 'none'
document.querySelector('#add_questions_div').style.display = 'none'
document.querySelector('#get_questions_div').style.display = 'none'
// document.querySelector("#info_div").style.display = 'block'

document.querySelector('#subject').style.display = 'none'
document.querySelector("#change_session").style.display = 'none'
document.querySelector("#change_current_termnav").style.display = 'none'
// document.querySelector("#schsession").style.display = 'none'
document.querySelector("#get_result").style.display = 'none'

	
	subject_list.style.display='block'
	
	// const Http = new XMLHttpRequest();
	// var location = window.location.href
	// var res = location.slice(0, 26) 
	// const url = res + '/api/members';
	// Http.open("POST", url);
	// Http.send();

	// Http.onload=(e)=>{
	// 	var json = Http.responseText;
	// 	json = JSON.parse(json);
	// 	length = json.length
	// 	console.log(json)
	// 	for (i=0; i<length; i++){
	// 		console.log(json[i].value)
	// 		var text = document.createTextNode(json[i].value)
	// 		var li = document.createElement("li")

	// 		var delete_btn = document.createElement("button")
	// 		var delete_text = document.createTextNode('Delete')
	// 		delete_btn.setAttribute('class', 'btn btn-danger')
	// 		delete_btn.setAttribute('id', json[i].id)

	// 		delete_btn.onclick= function() {
	// 			const sub_id = this.id
	// 			const Http = new XMLHttpRequest();
	// 			const url = 'http://192.168.137.1:3000/api/members/' + sub_id
	// 			Http.open("POST", url);
	// 			Http.send();

	// 			Http.onload=(e)=>{
	// 			var json = Http.responseText;
	// 			json = JSON.parse(json)		
	// 			var obj = document.querySelector('#'+json).innerHTML
	// 			console.log(obj)

	// 			}
	// 		}
			

	// 		var edit_btn = document.createElement("button")
	// 		var edit_text = document.createTextNode('Edit')
	// 		edit_btn.setAttribute('class', 'btn btn-primary')

	// 		li.setAttribute('class', 'list-group-item')
	// 		delete_btn.appendChild(delete_text)
	// 		edit_btn.appendChild(edit_text)

	// 		li.appendChild(text)
	// 		li.appendChild(edit_btn)
	// 		li.appendChild(delete_btn)
	// 		ul_list.appendChild(li) 

	// 	}
	// }
	
}


function DeleteSubject(){

	const Http = new XMLHttpRequest();
	const url = 'http://192.168.137.1:3000/api/members/1';
	Http.open("POST", url);
	Http.send();

	Http.onload=(e)=>{
		// console.log(Http.responseText)
		var json = Http.responseText;
		json = JSON.parse(json);
		console.log(json)

	}
	
}


// function Ajax(){
// 	console.log("working");


// 	var location = window.location.href	
// 	var url = location.slice(0, 26) + '/api/members/school/session'
// 	const Http = new XMLHttpRequest();
// 	Http.open("POST", url);
// 	Http.send();

// 	Http.onload=(e)=>{
// 		var json = Http.responseText;
// 		json = JSON.parse(json);
// 		length = json.length
// 		console.log(json)

// 	}


// }