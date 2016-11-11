from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from mainPage import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^contacts$', views.contacts, name='contacts'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)