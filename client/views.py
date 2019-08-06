from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.template import loader


def index(request):
    template = loader.get_template('login/login.html')
    context = {
        'msg': 'Welcome to login page',
    }
    return HttpResponse(template.render(context, request))

def confo(request, roomid, usertype, userref):
    template = loader.get_template('confo/index.html')
    context = {
        'roomId': roomid,
        'user_ref': userref,
        'usertype': usertype,
    }
    return HttpResponse(template.render(context, request))