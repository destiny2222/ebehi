from . import views

from django.urls import path



app_name = "home"

urlpatterns = [
	path('', views.home, name='home'),
	path('about/', views.about, name='about'),
    path('publication/', views.publicationView, name='publication'),
    path('publication/<int:id>/', views.publicationDetailView, name='publication_detail'),
	path('contact/', views.contact, name='contact'),
	path('price/', views.price, name='price'),
	path('blog/', views.blog, name='blog'),
	path('blogdetail/', views.blogdetail, name='blogdetail'),
	path('student_result/', views.student_result, name='student_result'),
	path('gallery/', views.gallery, name='gallery'),
	path('payment/', views.student_payment, name='student_payment'),
	path('check/', views.check_student_payment, name='check_student_payment'),
	path('payment_confirm/<slug:id>/', views.student_payment_confirm, name='student_payment'),
	# path('payment_confirm/<slug:reg>/<slug:purpose>/<slug:fee>/<slug:session>/<slug:student_class>/<slug:term>/', views.student_payment_confirm, name='student_payment'),

	# path('', views.gallery, name='gallery'),
	# path('', views.checkresult, name='checkresult'),
	# path('', views.portal, name='portal'),

	


]