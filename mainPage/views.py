from django.shortcuts import render

from mainPage.models import Article


def home(request):
    articles = Article.objects.all()
    contex = {
        'articles': articles
    }
    return render(request, 'mainPage/base.html', contex)