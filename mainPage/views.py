from django.shortcuts import render

from mainPage.models import Article
from mainPage.models import Chopslider


def home(request):
    articles = Article.objects.all()
    chopslider = Chopslider.objects.all()
    contex = {
        'articles': articles,
        'chopslider': chopslider
    }
    return render(request, 'mainPage/home.html', contex)

def contacts(request):
    return render(request, 'mainPage/contacts.html')