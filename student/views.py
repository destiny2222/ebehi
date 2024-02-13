from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required

from student.models import FeedbackModel




@login_required(login_url='/accounts/login/')
def Student(request):
	return render(request, 'stu/index.html') 


@login_required(login_url='/accounts/login/')
def feedbackView(request):
	if request.method == 'POST':
		feedback = request.POST.get('feedback')
		title = request.POST.get('title')
		mode = request.POST.get('mode')
		FeedbackModel.objects.create(user=request.user, feedback=feedback, title=title, mode=mode)
	qs = FeedbackModel.objects.filter(user=request.user)
	context = {'qs':qs}
	return render(request, 'stu/feedback.html', context)

@login_required(login_url='/accounts/login/')
def createFeedback(request):
	if request.method == 'POST':
		feedback = request.POST.get('feedback')
		title = request.POST.get('title')
		mode = request.POST.get('mode')
		FeedbackModel.objects.create(user=request.user, feedback=feedback, title=title, mode=mode)
		return redirect("student:feedback")
	return render(request, 'stu/create_feedback.html')

@login_required(login_url='/accounts/login/')
def deleteFeedback(request, id):
	qs = FeedbackModel.objects.get(id=id, user=request.user).delete()
	return redirect("student:feedback")

