from django import forms
from .models import Session, Student, CurrentTerm, CurrentSession, News, GeneralResult, Gallery, Payments, StudentPayment
from ckeditor.widgets import CKEditorWidget
#from ckeditor_uploader.widgets import CKEditorWidget, CKEditorUploadingWidget

#from ckeditor_uploader.widgets import CKEditorWidget, CKEditorUploadingWidget
class StudentPaymentForm(forms.ModelForm):
	Registration_Number = forms.CharField(max_length=100)
	class Meta:
		model = StudentPayment
		fields = ['current_level', 'current_session', 'current_semester', 'purpose', 'fee']



class AddSessionForm(forms.ModelForm):
	class Meta:
		model = Session
		fields = ['date']

class StudentForm(forms.ModelForm):
	class Meta:
		model = Student
		fields = ['surname', 'first_name', 'last_name', 'email', 'Registration_Number','password', 'Phone', 'Address', 'Gender', 'current_level', 'current_session', 'current_semester', 'year', 'day', 'month']
	def clean_year(self):
		cd = self.cleaned_data
		if len(str(cd['year'])) != 4:
			raise forms.ValidationError('The length of the year should be 4')
		return cd['year']


class CurrentTermForm(forms.ModelForm):
	class Meta:
		model = CurrentTerm
		fields = ['term']

class CurrentSessionForm(forms.ModelForm):
	class Meta:
		model = CurrentSession
		fields = ['session']

class CheckResultForm(forms.Form):
	Registration_Number = forms.CharField(max_length=100)
	Pin = forms.CharField(max_length=100)


class NewsForm(forms.ModelForm):
	class Meta:
		model = News
		fields = ['title', 'body', 'status', 'timestamp']
		widgets = {
		'body': CKEditorWidget()
		}


class EditGeneralResultForm(forms.ModelForm):
	class Meta:
		model = GeneralResult
		fields = ['average', 'grade', 'percentage', 'total_subject', 'position', 'active']

class GalleryForm(forms.ModelForm):
	class Meta:
		model = Gallery
		fields = ['image', 'body']

class PaymentsForm(forms.ModelForm):

	class Meta:
		model = Payments
		fields = ['student', 'session', 'term', 'student_class', 'purpose', 'fee']

