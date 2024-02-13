from . import views

from django.urls import path

from administrator import views as GeneratePDF

app_name = "exam"

urlpatterns = [

	path('', views.index, name='index'),
	path('dashboard/', views.dashboard, name='dashboard'),
	path('subjects/', views.subjects, name='subjects'),
	path('add_subject/', views.add_subject, name='add_subject'),
	path('delete_subject/<slug:id>/', views.delete_subject, name='delete_subject'),
	path('questions/', views.Questions, name='questions'),
	path('addquestions/', views.AddQuestions, name='addquestions'),
	path('deletequestions/', views.deleteQuestion, name='deletequestions'),
	path('startexam/', views.startexam, name='startexam'),
	
	
	
	
	
	
	



]
