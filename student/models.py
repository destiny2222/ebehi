from django.db import models
from django.contrib.auth.models import User

class FeedbackModel(models.Model):
    mode_choice = (
        ('Positive', 'Positive'),
        ('Negative', 'Negative'),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    mode = models.CharField(max_length=50, choices=mode_choice)
    feedback = models.TextField()
    created = models.DateTimeField(auto_now_add=True)