from django.db import models
from django.utils.functional import cached_property
from django.utils.text import slugify
from django.utils import timezone
import django
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
import uuid

from constants.constants import LEVELS, SEMESTER


#this model consist of all the sessions
class Session(models.Model):
	date = models.CharField(max_length=20, unique=True)
	def __str__(self):
		return self.date

#this model is the current session
class CurrentSession(models.Model):
	session = models.ForeignKey(Session, on_delete=models.CASCADE)
	def __str__(self):
		return str(self.session)

#this model consist of all the classes in the school
class Myclass(models.Model):

	myclass = models.CharField(max_length=20)
	session = models.ForeignKey(Session, on_delete=models.CASCADE)

	def __str__(self):
		return self.myclass

#this model consist of the terms
class Term(models.Model):

	class_term = (
		('1ST TERM', '1ST TERM'),
		('2ND TERM', '2ND TERM'),
		('3RD TERM', '3RD TERM'),)
	term = models.CharField(max_length=20, choices=class_term)

	def __str__(self):
		return self.term

#this model consist of the current term
class CurrentTerm(models.Model):
	class_term = (
		('1ST TERM', '1ST TERM'),
		('2ND TERM', '2ND TERM'),
		('3RD TERM', '3RD TERM'),)
	term = models.CharField(max_length=20, choices=class_term)
	def __str__(self):
		return str(self.term)



#this model consist of the student record
class Student(models.Model):


	class_student = [
    (choice, choice) for choice in LEVELS
	]

	class_term =	[
    (choice, choice) for choice in SEMESTER
	]
	


	gen=(('M', 'Male'),('F', 'Female'))
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	surname = models.CharField(max_length=50)
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50, blank = True)
	Registration_Number = models.CharField(max_length=12, unique=True)
	Phone=models.CharField(max_length=30, default='+234')
	Address = models.CharField(max_length=600)
	Gender = models.CharField(max_length=1, choices=gen)
	# Father_Name = models.CharField(max_length=220)
	# Mother_Name = models.CharField(max_length=220)
	email = models.EmailField(unique=True)
	password = models.CharField(max_length=30)
	# Passport = models.FileField(blank=True)
	current_level = models.CharField(max_length=5, choices=class_student, default="")
	current_session = models.ForeignKey(Session, on_delete=models.CASCADE, default=1)
	current_semester = models.CharField(max_length=40, choices=class_term)
	average = models.PositiveIntegerField(default=0)
	percentage = models.PositiveIntegerField(default='0')
	pin = models.CharField(max_length=100, default='')
	total_course  = models.PositiveIntegerField(default=0)
	year = models.IntegerField(help_text="enter year of birth")
	month = models.IntegerField(help_text="enter month of birth")
	day = models.IntegerField(help_text="enter day of birth")
	created=models.DateTimeField(auto_now_add=True)
	updated=models.DateTimeField(auto_now=True)
	def __str__(self):
		return str(self.surname+ ' ' + self.first_name)



#this consist of the  payment record of the school
class Payments(models.Model):
	class_student = (
		('KG1', 'KG1'),
		('KG2', 'KG2'),
		('KG3', 'KG3'),
		('PRY1', 'PRY1'),
		('PRY2', 'PRY2'),
		('PRY3', 'PRY3'),
		('PRY4', 'PRY4'),
		('PRY5', 'PRY5'),
		('JSS1', 'JSS1'),
		('JSS2', 'JSS2'),
		('JSS3', 'JSS3'),
		('SSS1', 'SSS1'),
		('SSS2', 'SSS2'),
		('SSS3', 'SSS3'),

		)
	payment_purpose = (
		('School Fees', 'School Fees'),
		('P.T.A', 'P.T.A'),


		)
	fees = (
		('50', '50'),
		('60', '60'),
		)

	student = models.ForeignKey(Student, on_delete=models.CASCADE)
	session = models.ForeignKey(Session, on_delete=models.CASCADE)
	term = models.ForeignKey(Term, on_delete=models.CASCADE)
	student_class = models.CharField(max_length=10, choices=class_student)
	purpose = models.CharField(max_length=20, choices=payment_purpose)
	fee = models.CharField(max_length=1000, choices=fees)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now = True)

	def __str__(self):
		return self.student.surname + ' ' + self.student.middle_name+ ' ' + self.student.first_name






#this model consist of the subjects the school offers
class Subject(models.Model):
	class_student = (
		('KG1', 'KG1'),
		('KG2', 'KG2'),
		('KG3', 'KG3'),
		('PRY1', 'PRY1'),
		('PRY2', 'PRY2'),
		('PRY3', 'PRY3'),
		('PRY4', 'PRY4'),
		('PRY5', 'PRY5'),
		('JSS1', 'JSS1'),
		('JSS2', 'JSS2'),
		('JSS3', 'JSS3'),
		('SSS1', 'SSS1'),
		('SSS2', 'SSS2'),
		('SSS3', 'SSS3'),

		)
	subject_name = models.CharField(max_length=20)
	class_student = models.CharField(max_length=5, choices=class_student)
	def __str__(self):
		return self.subject_name


#this model consist of the scores of students for various results
class Student_subject(models.Model):
	class_term = (
		('1ST TERM', '1ST TERM'),
		('2ND TERM', '2ND TERM'),
		('3RD TERM', '3RD TERM'),)

	student = models.ForeignKey(Student, on_delete = models.CASCADE, default=0, related_name='student_subject')
	Registration_Number = models.CharField(max_length=50)
	subject = models.ForeignKey(Subject, on_delete = models.CASCADE)
	session = models.ForeignKey(Session, on_delete=models.CASCADE, default=1)
	term = models.CharField(max_length=10, default="1ST TERM", choices=class_term)
	current_semester = models.CharField(max_length=5, default="")
	first_test = models.PositiveIntegerField(default=0)
	second_test = models.PositiveIntegerField(default=0)
	exam = models.PositiveIntegerField(default=0)
	average = models.PositiveIntegerField(default=0)
	# position = models.CharField(max_length=1000, blank=True)
	grade = models.CharField(max_length=1, blank=True)

	def __str__(self):
		return self.student.surname + " " +self.subject.subject_name

class GeneralResult(models.Model):
	student = models.ForeignKey(Student, on_delete = models.CASCADE, default=1)
	Registration_Number = models.CharField(max_length=200, default="")
	current_session = models.CharField(max_length=200, default="")
	current_level = models.CharField(max_length=200, default="")
	current_semester = models.CharField(max_length=5, default="")
	average = models.PositiveIntegerField(default=0)
	grade = models.CharField(max_length=3, default='')
	position = models.CharField(max_length=500, default='')
	total_subject = models.CharField(max_length=30, default='')
	percentage = models.CharField(max_length=3, default='')
	active =  models.BooleanField(default=True)
	def __str__(self):
		return self.student.surname + self.student.first_name + self.student.last_name + self.Registration_Number


class GeneratePin(models.Model):
	Registration_Number = models.CharField(max_length=50)
	current_session = models.CharField(max_length=50)
	current_semester = models.CharField(max_length=10, default='')
	pin = models.CharField(max_length=50, unique=True)

	def __str__(self):
		return self.Registration_Number + self.current_session + self.current_semester + self.pin


class SchoolLogo(models.Model):
	image = models.FileField()
	def __str__(self):
		return str(self.id)



class News(models.Model):
	choices = (('published', 'published'),
		('draft', 'draft')
		)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.CharField(max_length=50)
	image = models.FileField(default='media')
	body = models.TextField()
	status = models.CharField(max_length=15, choices=choices, default='published')
	timestamp = models.DateField(default=django.utils.timezone.now)
	slug = models.SlugField()
	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super (News, self).save(*args, **kwargs)
	def __str__(self):
		return self.slug
class Gallery(models.Model):
	image = models.FileField()
	body = models.CharField(max_length=200)


class Exam(models.Model):
	subject = models.CharField(max_length=20)
	term = models.CharField(max_length=20)
	session = models.CharField(max_length=20)
	question = models.TextField()
	option_a = models.TextField()
	option_b = models.TextField()
	option_c = models.TextField()
	option_d = models.TextField()
	correct_option = models.TextField()

	def __str__(self):
		return self.subject + ' ' + self.term + ' ' + self.session


class AssignmentName(models.Model):
	class_student = (
		('KG1', 'KG1'),
		('KG2', 'KG2'),
		('KG3', 'KG3'),
		('PRY1', 'PRY1'),
		('PRY2', 'PRY2'),
		('PRY3', 'PRY3'),
		('PRY4', 'PRY4'),
		('PRY5', 'PRY5'),
		('JSS1', 'JSS1'),
		('JSS2', 'JSS2'),
		('JSS3', 'JSS3'),
		('SSS1', 'SSS1'),
		('SSS2', 'SSS2'),
		('SSS3', 'SSS3'),

		)
	name = models.CharField(max_length=30)
	assignment_class = models.CharField(max_length=10, choices=class_student)
	assignment_subject = models.ForeignKey(Subject, on_delete=models.CASCADE)


class AssignmentDetails(models.Model):
	assignment_name = models.ForeignKey(AssignmentName, on_delete = models.CASCADE, related_name='assignment_name')
	details = models.TextField()

#this is the model that will be used in the payment form
class StudentPayment(models.Model):
	class_student = (
		('kg1', 'kg1'),
		('kg2', 'kg2'),
		('kg3', 'kg3'),
		('pry1', 'pry1'),
		('pry2', 'pry2'),
		('pry3', 'pry3'),
		('pry4', 'pry4'),
		('pry5', 'pry5'),
		('jss1', 'jss1'),
		('jss2', 'jss2'),
		('jss3', 'jss3'),
		('sss1', 'sss1'),
		('sss2', 'sss2'),
		('sss3', 'sss3'),

		)
	purpose = (('School Fees', 'School Fees'), ('P.T.A', 'P.T.A'), ('Lesson Fee', 'Lesson Fee'))
	fee=(('50', '50'),)
	student = models.ForeignKey(Student, on_delete = models.CASCADE, related_name='student_payment')
	current_semester = models.CharField(max_length=5, choices=class_student, default="")
	current_session = models.ForeignKey(Session, on_delete=models.CASCADE, default=1)
	current_level = models.ForeignKey(Term, on_delete=models.CASCADE, default=1)
	purpose = models.CharField(max_length=30, choices=purpose)
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	paid=models.BooleanField(default=False)
	created=models.DateTimeField(auto_now_add=True)
	updated=models.DateTimeField(auto_now=True)
	fee = models.CharField(choices=fee, default=100, max_length=200)

	def __str__(self):
		return str(self.id)

