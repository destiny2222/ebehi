from django.shortcuts import render, redirect, get_object_or_404

from django.http import HttpResponseRedirect, HttpResponse, JsonResponse

from administrator.models import Subject, Session, CurrentSession, CurrentTerm, Student

from .models import Exam


def index(request):
	return render(request, 'exam/index.html')

def dashboard(request):
	return render(request, 'exam/dashboard.html')

def subjects(request):
	qs = Subject.objects.all()
	return render(request, 'exam/subjects.html', {'qs':qs})
def add_subject(request):
	subject = request.POST.get('subject')
	subject_class = request.POST.get('subject_class')	
	Subject.objects.create(subject_name=subject, class_student=subject_class)
	return redirect('exam:subjects')

def delete_subject(request, id):
	qs = Subject.objects.get(id=id)
	qs.delete()
	return redirect('exam:subjects')

def startexam(request):
	select_subject = request.POST.get('select_subject')
	if not select_subject:
		return HttpResponse('Please Select Subject')
	else:
		user1 = request.user
		user = Student.objects.get(user=user1)
		currentterm = CurrentTerm.objects.get(id=1)
		currentsesssion =  CurrentSession.objects.get(id=1)
		print(currentterm, currentsesssion)
		return render(request, 'exam/exam.html')

def Questions(request):
	if request.method == 'POST':		
		session1 = request.POST.get('session')
		session = Session.objects.get(date=session1)
		term = request.POST.get('term')
		subject = request.POST.get('subject')
		subject_class = request.POST.get('subject_class')
		subject = Subject.objects.get(subject_name=subject)

		qs = Exam.objects.filter(session=session, term__icontains=term, subject=subject)
		print(term, subject, 'zobo')
		context = {'qs':qs, 'session':session, 'term':term, 'subject':subject, 'subject_class':subject_class}
		return render(request, 'exam/questions.html', context)
	else:
		return HttpResponse('fill the right details')


def deleteQuestion(request):
	question_id = request.POST.get('question_id') 
	question = Exam.objects.get(id = int(question_id))
	question.delete()

	return JsonResponse({'question_id':question_id})



def AddQuestions(request):	
	category_type = request.POST.get('type')
	if category_type == 'add':
		session = request.POST.get('addquestionsession') #it got the id of the session
		session1 = Session.objects.get(id = int(session))
		term = request.POST.get('addquestionterm')
		subject1 = request.POST.get('addquestionsubject')
		subject_class = request.POST.get('addquestionclass')
		question = request.POST.get('question')
		option_a = request.POST.get('option_a')
		option_b = request.POST.get('option_b')
		option_c = request.POST.get('option_c')
		option_d = request.POST.get('option_d')
		correct_option = request.POST.get('correct_option')
		subject = Subject.objects.get(id = int(subject1))
		qs = Exam.objects.create(session=session1, term=term, subject=subject, question=question, option_a=option_a, option_b=option_b, option_c=option_c, option_d=option_d, correct_option=correct_option)
		qs1 = Exam.objects.all().count()
		return JsonResponse({ 'question_id':qs.id, 'addquestiontotal':0,'question':question, 'option_a':option_a, 'option_b':option_b, 'option_c':option_c, 'option_d':option_d, 'correct_option':correct_option })
	elif category_type == 'edit':
		question_id = request.POST.get('question_id')
		session = request.POST.get('addquestionsession') #it got the id of the session
		session1 = Session.objects.get(id = int(session))
		term = request.POST.get('addquestionterm')
		subject1 = request.POST.get('addquestionsubject')
		subject_class = request.POST.get('addquestionclass')
		question = request.POST.get('question')
		option_a = request.POST.get('option_a')
		option_b = request.POST.get('option_b')
		option_c = request.POST.get('option_c')
		option_d = request.POST.get('option_d')
		correct_option = request.POST.get('correct_option')
		subject = Subject.objects.get(id = int(subject1))
		qs = Exam.objects.get(id=int(question_id))
		qs.question = question
		qs.option_a = option_a
		qs.option_b = option_b
		qs.option_c = option_c
		qs.option_d = option_d
		qs.correct_option = correct_option
		qs.save()
		return JsonResponse({'question_id':question_id, 'addquestiontotal':0,'question':question, 'option_a':option_a, 'option_b':option_b, 'option_c':option_c, 'option_d':option_d, 'correct_option':correct_option })


