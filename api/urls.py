from django.urls import path

from . import views

urlpatterns = [
    path('createRoom', views.create_room, name='createRoom'),
    path('getRoom/<roomId>', views.get_room, name='getRoom'),
    path('createToken', views.create_token, name='createToken'),
]