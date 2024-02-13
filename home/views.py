from django.shortcuts import render, redirect, get_object_or_404
from administrator.models import Payments, Session, Myclass, Student, StudentPayment, Student_subject, Subject, Term, GeneralResult, CurrentSession, CurrentTerm, GeneralResult, GeneratePin, SchoolLogo, News, Gallery

from administrator.forms import AddSessionForm, StudentForm, CurrentTermForm, CurrentSessionForm, CheckResultForm, NewsForm, EditGeneralResultForm, GalleryForm, StudentPaymentForm

from django.contrib import messages

from django.http import HttpResponseRedirect, HttpResponse,JsonResponse



def home(request):
	return render(request, 'index/index.html')
def about(request):
	return render(request, 'index/about.html')

def publicationView(request):
	qs = News.objects.all()
	context = {'qs':qs}
	return render(request, 'index/courses.html', context)

def publicationDetailView(request, id):
	qs = get_object_or_404(News, id=id)
	context = {'qs':qs}
	return render(request, 'index/course-detail.html', context)

def contact(request):
	return render(request, 'index/contact.html')
def price(request):
	return render(request, 'home/price.html')
def blog(request):
	return render(request, 'home/blog.html')
def blogdetail(request):
	return render(request, 'home/single-blog.html')
def gallery(request):
	return render(request, 'home/gallery.html')

def student_result(request):
	image = SchoolLogo.objects.get(id=1)
	session = Session.objects.all()
	if request.method=='POST':
		form = CheckResultForm(request.POST or None)
		if form.is_valid():
			reg = form.cleaned_data.get('Registration_Number')
			pin = form.cleaned_data.get('Pin')
			term = request.POST.get('term')
			t = Term.objects.get(term__iexact=term)
			try:
				# print(image)
				gen = GeneratePin.objects.get(Registration_Number=reg, pin=pin)
				result = GeneralResult.objects.get(Registration_Number=gen.Registration_Number, current_session=gen.current_session, current_class__iexact=gen.current_class, current_term__iexact=term, active=True)
				s = Session.objects.get(date=gen.current_session)
				# t = Term.objects.get(term=current_term.term)
				total_student = Student.objects.filter(current_class=gen.current_class, current_session=s.id, current_term=t.id ).count()
				record = Student_subject.objects.filter(Registration_Number=gen.Registration_Number).exclude(average=0)
				context={'gen':gen, 'result':result, 'record':record, 'total_student':total_student, 'image':image, 'reg':reg, 'pin':pin}
				return render(request, 'home/check_result.html', context)
			except GeneratePin.DoesNotExist:
				messages.error(request, 'Invalid Details')
				return redirect('home:student_result')
			except GeneralResult.DoesNotExist:
			    messages.error(request, 'Result does not exist')
			    return redirect('home:student_result')


	else:
		form = CheckResultForm()
	return render(request, 'home/student_result.html', {'form':form, 'image':image, 'session':session})




def student_payment(request):
	details = "Fill Payment Details"
	if request.method=='POST':
		form = StudentPaymentForm(request.POST)
		if form.is_valid():
			reg = form.cleaned_data.get('Registration_Number')
			current_class = form.cleaned_data.get('current_class')
			current_session = form.cleaned_data.get('current_session')
			current_term = form.cleaned_data.get('current_term')
			form.save()
			current_term = Term.objects.get(term=current_term).term.replace(' ', '-')
			purpose = form.cleaned_data.get('purpose').replace(' ', '-')
			try:

				student = Student.objects.get(Registration_Number=reg)

				print(student)
				userid = form.save()
				userid=userid.id



				# print(reg, current_class, current_session, current_term, purpose)
				context = {'userid':userid,'student':student, 'reg':reg, 'current_class':current_class, 'current_session':current_session, 'current_term':current_term, 'purpose':purpose}
				return render(request, 'home/paymentgateway.html', context)
			except Student.DoesNotExist:
				messages.error(request, 'Invalid Reg number')
				return render(request, 'home/paymenterror.html')
	else:
		form = StudentPaymentForm()
	return render(request, 'home/payment.html', {'form':form, 'details':details})



def student_payment_confirm(request, id):

	qs = StudentPayment.objects.get(id=id)
	qs.paid=True
	qs.save()
	print(qs.paid)

	# Payments.objects.create()
	# new_term = term.replace('-', ' ')
	# term = Term.objects.get(term = new_term)
	# session = Session.objects.get(date=session)
	# student = Student.objects.get(Registration_Number=reg)
	# purpose = purpose.replace('-', ' ')
	# session=session
	# Payments.objects.create(student=student, session=session, term=term, student_class=student_class, purpose=purpose, fee=fee)
	# print(term, session, student)
	context={}
	return render(request, 'home/student_payment_confirm.html', context)



def check_student_payment(request):
	details = "Check Payment Details"
	if request.method=='POST':
		form = StudentPaymentForm(request.POST or None)
		if form.is_valid():
			reg = form.cleaned_data.get('Registration_Number')
			current_class = form.cleaned_data.get('current_class')
			current_session = form.cleaned_data.get('current_session')
			current_term = form.cleaned_data.get('current_term')
			student_class = form.cleaned_data.get('current_class')
			purpose = form.cleaned_data.get('purpose')
			fee = form.cleaned_data.get('fee')

			term = Term.objects.get(term = current_term)
			session = Session.objects.get(date=current_session)
			student = Student.objects.get(Registration_Number=reg)
			session=session
			print(fee, purpose)

			# current_term = Term.objects.get(term=current_term).term.replace(' ', '-')

			# purpose = form.cleaned_data.get('purpose').replace(' ', '-')
			qs = StudentPayment.objects.filter(Registration_Number=reg, current_session=session, current_term=term, current_class=student_class, purpose=purpose)
			details=Student.objects.get(Registration_Number=reg)
			#qs = Payments.objects.filter(student=student, session=session, term=term, student_class=student_class, purpose=purpose, fee=fee)
			print(reg)
			if qs.exists():
				context= {"qs":qs, "details":details}
				return render(request, 'home/filteredpayment.html', context)
			else:
				return HttpResponse("not yet paid")
	else:
		form = StudentPaymentForm()
	return render(request, 'home/payment.html', {'form':form, "details":details})



# , purpose, fee, session, student_class, term




# def home(request):
# 	return render(request, 'home/index.html')
# def home(request):
# 	return render(request, 'home/index.html')
def todayBirthday(request):
	return render(request, 'todaybirthday.html')