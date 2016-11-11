from django.contrib import admin

from mainPage.models import Article
from mainPage.models import Chopslider

def make_published(modeladmin, request, queryset):
    queryset.update(status='p')

make_published.short_description = "Mark selected stories as published"

class ArticleAdmin(admin.ModelAdmin):
    list_display = ['status']
    actions = [make_published]

admin.site.register(Article)
admin.site.register(Chopslider, ArticleAdmin)