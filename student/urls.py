from . import views

from django.urls import path



app_name = "student"

urlpatterns = [
	path('', views.Student, name='student'),
    path('feedback', views.feedbackView, name='feedback'),
    path('create_feedback', views.createFeedback, name='create_feedback'),
    path('delete_feedback/<int:id>', views.deleteFeedback, name='delete_feedback'),

	]