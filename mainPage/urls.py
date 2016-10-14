from django.conf.urls import url
from django.contrib import admin

from mainPage import views

urlpatterns = [
    url(r'^$', views.home, name='base'),
]