from django.contrib import admin

from .models import Session, Myclass,StudentPayment, Subject, Student, Term,Student_subject, CurrentSession, CurrentTerm, GeneralResult, GeneratePin, SchoolLogo,News, Gallery, Payments, Exam


class StudentPaymentAdmin(admin.ModelAdmin):
	list_display = ['id', 'student', 'current_level', 'current_session', 'current_semester', 'purpose', 'created', 'paid']

class TermAdmin(admin.ModelAdmin):
	list_display = ['term', 'id']
class SessionAdmin(admin.ModelAdmin):
	list_display = ['date', 'id']

class CurrentTermAdmin(admin.ModelAdmin):
	list_display = ['term', 'id']

class CurrentSessionAdmin(admin.ModelAdmin):
	list_display = ['session', 'id']



class Student_subjectAdmin(admin.ModelAdmin):
	list_display = ['student', 'Registration_Number', 'subject', 'session', 'term', 'first_test', 'second_test', 'exam' ,'average', 'grade']

class GeneralResultAdmin(admin.ModelAdmin):
	list_display = ['student', 'average', 'position', 'percentage']
class StudentAdmin(admin.ModelAdmin):
	list_display = ['surname', 'first_name', 'average', 'percentage', 'Registration_Number', 'id', 'pin', 'current_level', 'current_session', 'current_semester', 'created']

class GeneratePinAdmin(admin.ModelAdmin):
	list_display = ['Registration_Number', 'current_session', 'current_semester', 'pin']

admin.site.register(GeneratePin, GeneratePinAdmin)
admin.site.register(Student, StudentAdmin)
admin.site.register(GeneralResult, GeneralResultAdmin)
admin.site.register(Term, TermAdmin)
admin.site.register(Student_subject, Student_subjectAdmin)
admin.site.register(Session, SessionAdmin)
admin.site.register(Exam)
admin.site.register(Myclass)
admin.site.register(Subject)

admin.site.register(CurrentSession, CurrentSessionAdmin)
admin.site.register(CurrentTerm, CurrentTermAdmin)
admin.site.register(SchoolLogo)
admin.site.register(News)

admin.site.register(Gallery)
admin.site.register(Payments)
admin.site.register(StudentPayment, StudentPaymentAdmin)