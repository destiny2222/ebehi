from administrator.models import Session, Subject

def Prosessor_Session(request):
	processor_session = Session.objects.all()
	return {'processor_session':processor_session}
def Prosessor_Subjects(request):
	processor_subjects = Subject.objects.all()
	return {'processor_subjects':processor_subjects}
