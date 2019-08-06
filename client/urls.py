from django.urls import path

from . import views
app_name = 'client'
urlpatterns = [
    path('', views.index, name='index'),
    path('confo/<roomid>/<usertype>/<userref>', views.confo, name='room'),
]