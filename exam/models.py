from django.db import models
from django.contrib.auth.models import User
from administrator.models import Session, Subject


class Exam(models.Model):
	session = models.ForeignKey(Session, on_delete = models.CASCADE)
	term = models.CharField(max_length = 20)
	subject = models.ForeignKey(Subject, on_delete = models.CASCADE)
	question = models.TextField()
	option_a = models.TextField()
	option_b = models.TextField()
	option_c = models.TextField()
	option_d = models.TextField()
	correct_option = models.TextField()

	def __str__(self):
		return self.subject.subject_name
	
class StudentRecord(models.Model):
	reg_no = models.ForeignKey(User, on_delete = models.CASCADE)
	session = models.ForeignKey(Session, on_delete = models.CASCADE)
	term = models.CharField(max_length = 20)
	score = models.PositiveIntegerField(default=0)
	percentage = models.PositiveIntegerField(default=0)