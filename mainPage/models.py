from django.contrib.auth.models import User
from django.db import models

SHORT_TEXT_LEN = 100

STATUS_CHOICES = (
    ('d', 'Draft'),
    ('p', 'Published'),
    ('w', 'Withdrawn'),
)

class Chopslider(models.Model):
    img = models.ImageField(upload_to='chopslider', default='')
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='p')

class Article(models.Model):
    img = models.ImageField(upload_to='article', default='')
    title = models.CharField(max_length=200)
    text = models.TextField()

    # user = models.ForeignKey(User)

    def __str__(self):
        return self.title  # in admin view name title

    def get_short_text(self):
        if len(self.text) > SHORT_TEXT_LEN:
            return self.text[:SHORT_TEXT_LEN]
        else:
            return self.text

    def get_text(self):
        return self.text

