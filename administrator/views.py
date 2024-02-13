from django.shortcuts import render


from constants.constants import SEMESTER, LEVELS
from student.models import FeedbackModel


from .models import Session, Myclass, Student, Student_subject, Subject, Term,StudentPayment, GeneralResult, CurrentSession, CurrentTerm, GeneralResult, GeneratePin, SchoolLogo, News, Gallery, Payments

from .forms import AddSessionForm, StudentForm, CurrentTermForm,StudentPaymentForm, CurrentSessionForm, CheckResultForm, NewsForm, EditGeneralResultForm, GalleryForm, PaymentsForm

from django.shortcuts import render, get_object_or_404, redirect

from django.contrib import messages

from django.http import HttpResponseRedirect, HttpResponse,JsonResponse

from django.contrib.auth.models import User

import random

import string

from random import choice

from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from twilio.rest import Client




from django.http import HttpResponse

from django.views.generic import View

from school.utils import render_to_pdf #created in step 4

from django.template.loader import get_template

from django.urls import reverse
from datetime import date
from datetime import datetime


def term(request):
	current_term = CurrentTerm.objects.all()
	all_terms = SEMESTER


	# form = TermForm(request.POST or None)
	return render(request, 'administrator/term.html', {'current_term':current_term, 'all_terms':all_terms})
def add_term(request):
	if request.method == 'POST':
		form  = CurrentTermForm(request.POST)
		if form.is_valid():
			term = form.cleaned_data['term']
			try:
				detail =  CurrentTerm.objects.get(id=1)
				detail.term =term
				detail.save()
			except CurrentTerm.DoesNotExist:
				detail =  CurrentTerm.objects.create(id=1, term=term)


			return redirect('administrator:term')
	else:
		form = CurrentTermForm(request.POST or None)
	context = {'form':form}
	return render(request, 'administrator/addterm.html',context)

@login_required(login_url='/accounts/login/')
def administrator(request):
	# a = Student_subject.objects.all()
	# for i in a:
	# 	i.current_class = 'kg1'
	# 	i.save()
	# term = Term.objects.get(id=1)
	# session = Session.objects.get(id=2)
	# subject = Subject.objects.get(id=2)
	# a = User.objects.all()
	# for i in a:
	# 	if not i.is_staff:
	# 		user = User.objects.get(username=i.username)
	# 		student = Student.objects.get(user=user)
	# 		Student_subject.objects.create(student=student, Registration_Number=student.Registration_Number, subject=subject, session=session, term=term)
	# session = Session.objects.get(id=2)
	# for i in range(20):
	# 	a = User.objects.create_user(username=str(i)+'user', password=i, email=str(i)+'@gmail.com')
	# 	Student.objects.create(user=a, surname=i, first_name=i, Registration_Number=str(i), Phone=i, Address=i, Gender='Male', email=a.email, current_class='kg1', current_session=session, current_term='1st term', year=1999, month=1, day=1)
	if not request.user.is_staff:
		return redirect('student:student')
	else:



	# account_sid = 'ACd0ab7ae369764f8d6da41d76a8d224b1'
	# auth_token = '94879c7686211685102340eb53a8134e'
	# client = Client(account_sid, auth_token)

	# message = client.messages \
	# .create(
	#  body='EZE CHUKA, THE BUDESCODE LOCATED YOU!!',
	#  from_='+19894744088',
	#  to='+234 903 284 1265'
	# )

	# print(message.sid)
		return render(request, 'administrator/index.html', {})



def birthday_today(request):
	currentDay = datetime.now().day
	currentMonth = datetime.now().month
	qs = Student.objects.filter(month=currentMonth, day = currentDay)
	print(currentDay, currentMonth, qs)
	return render(request, 'administrator/birthday.html', {'qs':qs})
def session(request):
	current_session = CurrentSession.objects.all()
	session = Session.objects.all()
	context = {'session':session, 'current_session':current_session}
	return render(request, "administrator/session.html", context)

def add_session(request):
	current_session = CurrentSession.objects.all()
	if request.method == 'POST':
		form = AddSessionForm(request.POST or None, request.FILES or None)
		if form.is_valid():
			ok = form.save(commit = False)
			ok.save()
			messages.success(request, ok.date + ' ' + 'is successfully added.')
			return redirect('administrator:session')
	else:
		form = AddSessionForm(request.POST or None)
	context = {'form':form,}
	return render(request, "administrator/addsession.html", context)

def addpayment(request):

	if request.method == 'POST':
		form = StudentPaymentForm(request.POST or None, request.FILES or None)
		if form.is_valid():
			student = form.cleaned_data.get("student")
			session = form.cleaned_data.get("current_session")
			term = form.cleaned_data.get("current_term")
			student_class = form.cleaned_data.get("student_class")
			purpose = form.cleaned_data.get("purpose")
			fee = form.cleaned_data.get("fee")
			reg = form.cleaned_data.get('Registration_Number')
			student = Student.objects.get(Registration_Number=reg)
			qs = form.save(commit=False)
			qs.student = student
			qs.save()
			messages.success(request, str(student) + ' ' + purpose + ' payment is successfully paid' + ' for ' + str(session) + ", " + str(term))
			return render(request, "administrator/addpaymentsuccess.html")
	else:
		form = StudentPaymentForm(request.POST or None)
	context = {'form':form,}
	return render(request, "administrator/addpayment.html", context)

def query_payment(request):
	all_terms = SEMESTER
	all_sessions = Session.objects.all()
	context = {'all_terms':all_terms, 'all_sessions':all_sessions}
	return render(request, "administrator/querypayment.html", context)

def check_payment(request):
	current_term = request.POST.get('term')
	current_session = request.POST.get('session')
	current_class = request.POST.get('class')

	s = Session.objects.get(date=current_session)
	t = Term.objects.get(term=current_term)

	qs = StudentPayment.objects.filter(current_session=s, current_term=t, current_class=current_class)
	if qs.exists():
		context = {"qs":qs, 's':s, 't':t, 'current_class':current_class}
		return render(request, 'administrator/checkpayment.html', context)

	else:
		return render(request, 'administrator/checkpayment.html')


def select_payment(request):
	surname = request.POST.get('surname')
	firstname = request.POST.get('firstname')
	middename = request.POST.get('middename')
	registrationnumber = request.POST.get('registrationnumber')
	try:
		details=Student.objects.get(Registration_Number=registrationnumber)
	except:
		return HttpResponse('Invalid Reg number')

	if surname:
		qs = Payments.objects.filter(student__surname__icontains=surname)
		detail = surname
		searched = 'surname'
	elif firstname:
		qs = Payments.objects.filter(student__first_name__icontains=firstname)
		detail = firstname
		searched = 'firstname'
	elif middename:
		qs = Payments.objects.filter(student__middle_name__icontains=middename)
		detail = middename
		searched = 'middlename'
	elif registrationnumber:
		student = Student.objects.get(Registration_Number__iexact=registrationnumber)
		qs = StudentPayment.objects.filter(student=student)
		detail = registrationnumber
		searched = 'registration number'


	else:
		qs = 'none'
		detail = 'none'
		searched = 'none'
	context= {'qs':qs, 'detail':detail, 'searched':searched, "details":details}
	return render(request, 'administrator/select_payment.html', context)

def edit_payment(request, id):

	detail = StudentPayment.objects.get(id=id)
	if request.method == 'POST':
		form = StudentPaymentForm(request.POST or None, request.FILES or None, instance = detail)
		if form.is_valid():
			form.save()
			return render(request, 'administrator/payment_edit_success.html')
	else:
		form = StudentPaymentForm(instance = detail)

	context = {'form':form, 'detail':detail, "detail_id":id}
	return render(request, 'administrator/edit_payment.html', context)



def change_current_session(request):
	if request.method == 'POST':
		form  = CurrentSessionForm(request.POST or None)
		if form.is_valid():

			select = form.save(commit=False)
			# print(select.session)
			try:
				current_session = CurrentSession.objects.get(id=1)
				current_session.session = select.session
				current_session.save()
			except CurrentSession.DoesNotExist:
				current_session = CurrentSession.objects.create(id=1, session = select.session)

			messages.success(request,  'current session is successfully changed')
			return redirect('administrator:session')
	else:
		form = CurrentSessionForm(request.POST or None)
	context = {'form':form}
	return render(request, "administrator/change_current_session.html", context)


def add_student(request):
	if request.method == 'POST':
		form = StudentForm(request.POST or None, request.FILES or None)
		if form.is_valid():

			ok = form.save(commit = False)
			# print(ok.surname)

			username = form.cleaned_data['Registration_Number']
			email = form.cleaned_data['email']
			password = form.cleaned_data['password']
			first_name = form.cleaned_data['first_name']
			last_name = form.cleaned_data['last_name']

			user = User.objects.create_user(username=username, email=email, password=password, first_name=first_name, last_name=last_name)
			ok.user = user
			ok.save()
			messages.success(request, ok.surname + ' ' + ok.first_name + ' ' + 'was successfully Registered')

			# add_subject(ok.pk, ok)

			return redirect('administrator:register')
	else:
		form = StudentForm(request.POST or None)
	context = {"form": form} 
	return render(request, "administrator/register.html", context)

def feedbackView(request):
	qs = FeedbackModel.objects.all()
	context = {'qs':qs}
	return render(request, 'administrator/feedback.html', context)

def generate_course(request):
	session = request.POST.get('session')
	myclass = request.POST.get('myclass')
	term = request.POST.get('term')
	subject = request.POST.get('subject')
	t = Term.objects.get(term=term)
	s = Session.objects.get(date=session)
	sub = Subject.objects.get(subject_name=subject)
	students = Student.objects.filter(current_class=myclass, current_session=s.id, current_term=t.id)
	# stu = Student_subject.objects.all()
	# for i in stu:
	# 	print(i.student)
	for i in students:
		print(i.id)
		try:
			qs = Student_subject.objects.get(student=i, Registration_Number=i.Registration_Number, subject=sub, session=s, current_class=myclass)
		except Student_subject.DoesNotExist:
			new = Student_subject()
			new.student = i
			new.Registration_Number=i.Registration_Number
			new.subject=sub
			new.session=s
			new.term=t
			new.current_class=myclass
			new.save()

		#generate = Student_subject.objects.create(, , , , )
	return redirect('administrator:query_result')
	#return render(request, 'administrator/generatecourse.html')


def add_subject(pk, ok):

	kidergarten = ['kg1', 'kg2', 'kg3']
	primary = ['pry1', 'pry2', 'pry3', 'pry4', 'pry5']
	junoir_secondary = ['jss1', 'jss2', 'jss3']
	senoir_secondary = ['sss1', 'sss2', 'sss3']

	subject_code = ""

	current_student = Student.objects.get(pk=pk)

	if current_student.current_class in kidergarten:
		subject_code = "0"
	elif current_student.current_class in primary:
		subject_code = "1"
	elif current_student.current_class in junoir_secondary:
		subject_code = "2"
	else:
		subject_code = "3"

	all_subject = Subject.objects.all()

	for subject in all_subject:

		if subject_code in list(subject.no):

			new = Student_subject()
			new.student = current_student
			new.subject = subject
			new.session = ok.current_session
			new.term = ok.current_term
			new.current_class = ok.current_class
			new.Registration_Number=ok.Registration_Number

			new.save()

		else:

			pass




def add_result(request):
	session = request.POST.get('session')
	term = request.POST.get('term')
	myclass = request.POST.get('myclass')
	subject = request.POST.get('subject')

	if Session == None or term == None or myclass == None or subject == None:
		return HttpResponse('please input right data')

	session2 = Session.objects.get(date=session)
	session_new = session2.id
	subject2 = Subject.objects.get(subject_name=subject)
	subject_new = subject2.id
	qs=[]
	print('studentsss',term,session_new, myclass  )
	qs1 = Student.objects.filter(current_session=session_new, current_term=term, current_class__iexact=myclass)
	print(qs1)
	for i in qs1:
		a = Student_subject.objects.filter(student=i,subject=subject_new, session=session_new, term=term, current_class=myclass).order_by('-average')
		if a.exists():
			qs.extend(a)
		else:
			stu = Student_subject.objects.create(student=i, Registration_Number=i.Registration_Number, subject=subject2, session=session2, term=term, current_class=myclass)
			qs.append(stu)

	return render (request, 'administrator/addresult.html', {'qs':qs, 'session':session, 'term':term, 'myclass':myclass, 'subject':subject})


# 	qs = Student_subject.objects.filter(subject=subject_new, session=session_new, term=term_new, current_class=myclass).order_by('-average')
# 	if qs.exists():

# 		context={'qs':qs, 'session':session, 'term':term, 'myclass':myclass, 'subject':subject}
# 		return render (request, 'administrator/addresult.html', context)
# 	else:
# 		qs1 = Student.objects.filter(current_session=session_new, current_term=term_new, current_class=myclass)
		# print(qs1, session_new, term_new, myclass)
# 		return HttpResponse('nothing like that')
	# qs = Student.objects.filter(current_class=myclass, current_term=term, current_session=)
	# a=1
	# for i in qs:
	# 	stu = Student_subject.objects.get(id=i.id, subject=subject_new, session=session_new, term=term_new, current_class=myclass)
	# 	stu.position = a
	# 	stu.save()
	# 	a+=1

	# 	print(stu, stu.position)




def query_result(request):
	term = Term.objects.all()
	session = Session.objects.all()
	myclass = Myclass.objects.all()
	subject = Subject.objects.all()
	context = {'session':session, 'term':term, 'myclass':myclass, 'subject':subject }
	return render (request, 'administrator/queryresult.html', context)


def add_student_result(request, pk):

	current_student = Student_subject.objects.get(pk = pk)

	myform = request.POST
	first_test = myform['first_test']
	second_test = myform['second_test']
	exam = myform['exam']

	current_student.first_test = first_test
	current_student.second_test = second_test
	current_student.exam = exam
	average = int(first_test) + int(second_test) + int(exam)
	average1 = average/100
	average_new = average1 * 100
	if average_new <=40:
		grade = 'F'
	elif average_new >= 80 and average_new <= 100:
		grade = 'A'
	elif average_new >= 70 and average_new <= 79:
		grade = 'B'
	elif average_new >= 60 and average_new <= 69:
		grade = 'C'
	elif average_new >= 50 and average_new <= 59:
		grade = 'D'





	current_student.average = average_new
	current_student.grade = grade
	print(grade)
	print(current_student.average)
	print(int(first_test))
	print(int(second_test))
	print(int(exam))
	current_student.save()
	context = {'grade':grade, 'average_new':average_new}
	return JsonResponse(context)





def query_general_result(request):
	current_session = CurrentSession.objects.get(id=1)
	term = CurrentTerm.objects.get(id=1)
	return render(request, 'administrator/query_general_result.html', {'current_session':current_session, 'term':term} )


def generate_average(request):
	current_session = CurrentSession.objects.get(id=1)
	current_term  = CurrentTerm.objects.get(id=1)
	current_class = request.POST.get('select_class')

	s = Session.objects.get(date=current_session.session)
	stu = Student.objects.filter(current_session=s, current_class__iexact=current_class, current_term__iexact=current_term)
	for i in stu:
		specific_sub = Student_subject.objects.filter(student=i)
		student = ''
		for c in specific_sub:
			student = c.student

		sub = Student_subject.objects.filter(student=i)
		final_total =  Student_subject.objects.filter(student=i).exclude(average=0).count()

		a=0
		for b in sub:
			a+=b.average

		test =  a
		tot = final_total * 100
		overall = (test/tot) * 100
		i.average = a
		i.percentage=overall
		i.total_course = final_total
		i.save()
	messages.success(request, 'average generated')
	return redirect('administrator:query_general_result')

def generatePosition(score):
	position_list = []
	formal_position = 0
	number_of_students = len(score)+1
	current_position = 1
	while current_position < number_of_students:
		if current_position == 0:
			position_list.append(current_position)
			formal_position = current_position
			current_position+=1
		else:
			if score[current_position-2] == score[current_position-1]:
				position_list.append(formal_position)
				current_position+=1
			else:
				position_list.append(current_position)
				formal_position = current_position
				current_position+=1

	return position_list


def generate_result(request):
	current_session = CurrentSession.objects.get(id=1)
	current_term  = CurrentTerm.objects.get(id=1)
	current_class = request.POST.get('select_class')
	s = Session.objects.get(date=current_session.session)
	t = Term.objects.get(term=current_term.term)
	generate = Student.objects.filter(current_session=s, current_term__iexact=t, current_class__iexact=current_class).order_by('-average')
	generate2 = Student.objects.filter(current_session=s, current_term__iexact=t, current_class__iexact=current_class).order_by('-average').values('average')
	generate2 = list(generate2)
	n=1
	# print(generate)
	position = generatePosition(generate2)
	# print(position)
	# print(generatePosition(generate))
	for i in range(generate.count()):
		try:
# 			print(generate[i].average, generate[i].percentage, 'yeahhh')
			if int(generate[i].percentage) <= 40:
				grade = 'F'
			elif int(generate[i].percentage) >= 80 and generate[i].percentage <= 100:
				grade = 'A'
			elif int(generate[i].percentage) >= 70 and generate[i].percentage <= 79:
				grade = 'B'
			elif int(generate[i].percentage) >= 60 and generate[i].percentage <= 69:
				grade = 'C'
			elif int(generate[i].percentage) >= 50 and generate[i].percentage <= 59:
				grade = 'D'
			student = Student.objects.get(Registration_Number=generate[i].Registration_Number)
			print(student, i,'gennn')
			gen = GeneralResult.objects.get(student=student, Registration_Number=generate[i].Registration_Number, current_session=generate[i].current_session, current_term=generate[i].current_term, current_class=generate[i].current_class)
			gen.position= position[i]
			gen.average = generate[i].average
			gen.percentage = generate[i].percentage
			gen.total_subject = generate[i].total_course
			gen.sex = generate[i].Gender
			gen.grade = grade
			gen.active = True

			gen.save()
			n+=1
		except GeneralResult.DoesNotExist:
			student = Student.objects.get(Registration_Number=generate[i].Registration_Number)
			gen = GeneralResult.objects.create(student=student, Registration_Number=generate[i].Registration_Number, current_session=generate[i].current_session, current_term=generate[i].current_term, current_class=generate[i].current_class, position=n, average=generate[i].average)
			n+=1
	result = GeneralResult.objects.filter(current_session=s, current_term=t, current_class=current_class).order_by('-average')
	context={'result':result, 't':t, 's':s, 'current_class':current_class}
	return render(request, 'administrator/generateposition.html', context)


def check_result(request):
	Registration_Number = request.POST.get('reg_number')
	pin = request.POST.get('pin')
	print(Registration_Number)
	print(pin)
	try:
		gen = GeneratePin.objects.get(Registration_Number=Registration_Number, pin=pin)
		result = GeneralResult.objects.get(Registration_Number=Registration_Number, current_session=gen.current_session, current_class=gen.current_class)
		print(result)
		print('ok')
	except GeneratePin.DoesNotExist:
		print('none')
	return render(request, 'administrator/check_result.html', {})



def get_your_copy(request):
	image = SchoolLogo.objects.all()
	reg = request.POST.get('reg')
	pin = request.POST.get('pin')
	term = request.POST.get('term')
	gen = GeneratePin.objects.get(Registration_Number=reg, pin=pin)
	result = GeneralResult.objects.get(Registration_Number=gen.Registration_Number, current_session=gen.current_session, current_class__iexact=gen.current_class)
	s = Session.objects.get(date=gen.current_session)
	total_student = Student.objects.filter(current_class=gen.current_class).count()
	record = Student_subject.objects.filter(Registration_Number=gen.Registration_Number, session=s, term__iexact=term, current_class=gen.current_class).exclude(average=0)
	print(record, 'records')
	template = get_template('home/pdfresult.html')
	context={'gen':gen, 'result':result, 'record':record, 'total_student':total_student, 'image':image, 'reg':reg, 'pin':pin}
	html = template.render(context)
	pdf = render_to_pdf('home/pdfresult.html', context)
	if pdf:
		response = HttpResponse(pdf, content_type='application/pdf')
		filename = "%s.pdf" %('result_slip')
		content = "inline; filename=%s" %(filename)
		download = request.GET.get("download")
		if download:
			content = "attachment; filename='%s'" %(filename)
		response['Content-Disposition'] = content
		return response
	return HttpResponse("Not found")




def student_result(request):
	image = SchoolLogo.objects.all()
	session = Session.objects.all()
	if request.method=='POST':
		form = CheckResultForm(request.POST or None)
		if form.is_valid():
			reg = form.cleaned_data.get('Registration_Number')
			pin = form.cleaned_data.get('Pin')
			term = request.POST.get('term')
			t = Term.objects.get(term=term)
			try:
				# print(image)
				gen = GeneratePin.objects.get(Registration_Number=reg, pin=pin)
				result = GeneralResult.objects.get(Registration_Number=gen.Registration_Number, current_session=gen.current_session, current_class=gen.current_class, current_term=term, active=True)
				s = Session.objects.get(date=gen.current_session)
				# t = Term.objects.get(term=current_term.term)
				total_student = Student.objects.filter(current_class=gen.current_class, current_session=s.id, current_term=t.id ).count()
				record = Student_subject.objects.filter(Registration_Number=gen.Registration_Number, session=s.id, term=t.id, current_class=gen.current_class).exclude(average=0)
				print(record)
				context={'gen':gen, 'result':result, 'record':record, 'total_student':total_student, 'image':image, 'reg':reg, 'pin':pin}
				return render(request, 'administrator/check_result.html', context)
			except GeneratePin.DoesNotExist:
				messages.error(request, 'Invalid Details')

				return redirect('administrator:student_result')

	else:
		form = CheckResultForm()
	return render(request, 'administrator/student_result.html', {'form':form, 'image':image, 'session':session})




def generatepin(request):
	if request.user.is_superuser:
		session = Session.objects.all()
		return render(request, 'administrator/generatepin.html', {'session':session})
	else:
		return HttpResponse('you"re not logged in as an admin')

def pin(request):
	current_session = request.POST.get('select_session')
	current_class = request.POST.get('select_class')
	session = Session.objects.get(date=current_session)
	student = Student.objects.filter(current_class__iexact=current_class, current_session=session)
	for i in student:
		print(i.id)
		allchar = string.ascii_letters + string.digits
		pin = ''.join(choice(allchar) for x in range(13))
		generate = GeneratePin.objects.filter(Registration_Number=i.Registration_Number, current_session=session, current_class=current_class)
		if not generate.exists():
			generate = GeneratePin.objects.create(Registration_Number=i.Registration_Number, current_session=session, current_class=current_class, pin=pin)

	return render(request, 'administrator/pin.html', {})

def NewsUpdate(request):
	if request.method == 'POST':
		form  = NewsForm(request.POST or None, request.FILES or None)
		if form.is_valid():
			qs = form.save(commit=False)
			qs.user=request.user
			qs.save()
			#messages.add_message(request, messages.INFO, 'it worked')
			return redirect('administrator:news')
	else:
		form = NewsForm(request.POST or None, request.FILES or None)
	context = {'form':form}
	return render(request, "administrator/news.html", context)
def editnews(request, slug):
	detail = News.objects.get(slug=slug)
	if request.method == 'POST':
		form  = NewsForm(request.POST or None, request.FILES or None, instance=detail)
		if form.is_valid():
			form.save()
			messages.success(request, 'successfully edited')
			return redirect('administrator:news')
	else:
		form = NewsForm(request.POST or None, request.FILES or None, instance=detail)
	context = {'form':form}
	return render(request, "administrator/editnews.html", context)



def news(request):
	detail = News.objects.all()
	context = {'detail':detail}
	return render(request, "administrator/latestnews.html", context)

def newsdetails(request, slug):
	detail = News.objects.get(slug=slug)
	print(detail)
	context = {'detail':detail}
	return render(request, 'administrator/newsdetails.html', context)

def deletenews(request, slug):
	detail = News.objects.get(slug=slug)
	detail.delete()
	messages.success(request, 'successfully deleted')
	return redirect('administrator:news')

def QueryPromoteStudent(request):

	current_session = CurrentSession.objects.get(id=1)
	current_term = CurrentTerm.objects.get(id=1)
	all_terms = SEMESTER
	all_sessions = Session.objects.all()
	myclass = Myclass.objects.all()
	context = {'current_session':current_session, 'current_term':current_term, 'all_terms':all_terms, 'all_sessions':all_sessions, 'myclass':myclass}
	return render(request, 'administrator/promote.html', context)

def PromoteStudent(request):
	from_class = request.POST.get('from_class')
	from_session = request.POST.get('from_session')
	from_term = request.POST.get('from_term')

	to_class = request.POST.get('to_class')
	to_session = request.POST.get('to_session')
	to_term = request.POST.get('to_term')
	# print(from_class, from_session, from_term)
	# print(to_class, to_session, to_term)

	fs = Session.objects.get(date=from_session)
	ft = Term.objects.get(term=from_term)

	ts = Session.objects.get(date=to_session)
	tt = Term.objects.get(term=to_term)


	promote = Student.objects.filter(current_session=fs.id, current_term=ft.id, current_class=from_class)

	for i in promote:
		i.current_class = to_class
		i.current_session = ts
		i.current_term = tt
		i.save()
		messages.success(request, from_class + ' ' + 'is successfully promoted to ' + ' ' + to_class + ' ' + 'new session is ' + to_session)
		return redirect('administrator:promote')
	# 	print(i.current_class, i.current_session, i.current_term)
	# current_session = CurrentSession.objects.get(id=1)
	# current_term = CurrentTerm.objects.get(id=1)
	# all_terms = SEMESTER
	# all_sessions = Session.objects.all()
	# myclass = Myclass.objects.all()
	# context = {'messages':messages, 'current_session':current_session, 'current_term':current_term, 'all_terms':all_terms, 'all_sessions':all_sessions, 'myclass':myclass}
	# return render(request, 'administrator/promote.html', context)

def query_student(request):
	all_terms = SEMESTER
	all_sessions = Session.objects.all()
	context = {'all_terms':all_terms, 'all_sessions':all_sessions, 'levels':LEVELS}
	return render(request, 'administrator/query_student.html', context)

def students(request):
	current_term = request.POST.get('term')
	current_session = request.POST.get('session')
	current_class = request.POST.get('class')

	s = Session.objects.get(date=current_session)
	t = Term.objects.get(term=current_term)

	qs = Student.objects.filter(current_session=s, current_term=t, current_class=current_class)
	if qs.exists():
		print(qs)
		pass
	else:
		return HttpResponse('Invalid ')


	context = {"qs":qs}
	return render(request, 'administrator/student.html', context)

def edit_student(request, id):
	detail = Student.objects.get(id=id)
	if request.method == 'POST':
		form = StudentForm(request.POST or None, request.FILES or None, instance = detail)
		if form.is_valid():
			form.save()
			return redirect('administrator:query_student')
	else:
		form = StudentForm(instance = detail)

	context = {'form':form, 'detail':detail}
	return render(request, 'administrator/edit_student.html', context)

def query_student_term(request):
	from_class = request.POST.get('from_class')
	current_session = CurrentSession.objects.get(id=1)
	current_term = CurrentTerm.objects.get(id=1)
	to_term = request.POST.get('to_term')
	all_terms = SEMESTER
	context = {'from_class':from_class, 'current_session':current_session, 'current_term':current_term, 'to_term':to_term, 'all_terms':all_terms}
	return render(request, 'administrator/query_student_term.html', context)
def change_student_term(request):
	from_class = request.POST.get('from_class')
	to_term = request.POST.get('to_term')
	current_session = CurrentSession.objects.get(id=1)
	s = Session.objects.get(date=current_session.session)
	t = Term.objects.get(term=to_term)
	stu = Student.objects.filter(current_session=s, current_class=from_class)
	all_terms = SEMESTER
	for i in stu:
		i.current_term = t
		i.save()
	messages.success(request, from_class + ' ' + 'term ' + 'is successfully changed to' + to_term)
	return redirect('administrator:query_student_term')
	# context = {'all_terms':all_terms}
	# return render(request, 'administrator/query_student_term.html', context)

def select_student(request):
	surname = request.POST.get('surname')
	firstname = request.POST.get('firstname')
	middename = request.POST.get('middename')
	registrationnumber = request.POST.get('registrationnumber')
	if surname:
		qs = Student.objects.filter(surname__icontains=surname)
	elif firstname:
		qs = Student.objects.filter(first_name__icontains=firstname)
	elif middename:
		qs = qs = Student.objects.filter(middle_name__icontains=middename)
	elif registrationnumber:
		qs = qs = Student.objects.filter(Registration_Number__icontains=registrationnumber)
	else:
		qs = 'none'
	for i in qs:
		print(i)
	context= {'qs':qs}
	return render(request, 'administrator/student.html', context)


def query_staff_check_result(request):
	session = Session.objects.all()
	term  = Term.objects.all()
	context = {'session':session, 'term':term}
	return render(request, 'administrator/query_staff_check_result.html', context)


def staff_check_result(request):
	session = request.POST.get('select_session')
	term  = request.POST.get('select_term')
	current_class = request.POST.get('select_class')
	# print(session, term, current_class)

	result = GeneralResult.objects.filter(current_session=session, current_term__iexact=term, current_class__iexact=current_class)
	context = {'session':session, 'term':term, 'current_class':current_class, 'result':result}
	return render(request, 'administrator/staff_check_result.html', context)


def edit_general_result(request, reg):

	detail = GeneralResult.objects.get(Registration_Number=reg)
	if request.method == 'POST':
		form  = EditGeneralResultForm(request.POST or None, request.FILES or None, instance=detail)
		if form.is_valid():
			form.save()
			return HttpResponse('saved')
	else:
		form = EditGeneralResultForm(request.POST or None, request.FILES or None, instance=detail)
	context = {'form':form}
	return render(request, "administrator/edit_general_result.html", context)


def gallery(request):
	if request.method == 'POST':
		form  = GalleryForm(request.POST or None, request.FILES or None)
		if form.is_valid():
			form.save()
			messages.success(request, 'saved')
			return redirect('administrator:gallery')

	else:
		form = GalleryForm()
	context = {'form':form}
	return render(request, "administrator/gallery.html", context)


def Exam(request):
	subject = Subject.objects.all()
	myclass = Myclass.objects.all()
	print(subject, myclass)
	context = {'subject':subject, 'myclass':myclass}
	return render(request, 'exam/dashboard.html', context)


def timetable(request):
	return render(request, 'administrator/timetable.html')


def assignment(request):
	return render(request, 'administrator/assignment.html')

