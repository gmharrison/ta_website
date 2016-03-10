from django.shortcuts import render
from django.conf.urls import url
from django.views.generic import TemplateView

import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view(), name='home'),
    url(r'^survey/$', views.SurveyView.as_view(), name='survey'),
]
