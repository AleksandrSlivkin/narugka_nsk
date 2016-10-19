from django.contrib.auth.models import User
from django.db import models

SHORT_TEXT_LEN = 100


class Article(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()

    # user = models.ForeignKey(User)

    def __str__(self):
        return self.title  # В админке видно наглядно название статьи

    def get_short_text(self):
        if len(self.text) > SHORT_TEXT_LEN:
            return self.text[:SHORT_TEXT_LEN]
        else:
            return self.text

    def get_text(self):
        return self.text
