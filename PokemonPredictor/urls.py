from django.urls import path, include
from . import views
from django.conf import settings
from django.contrib import admin

urlpatterns = [
    path('api/get/', views.getData),
    path('api/post/',views.postData),
]