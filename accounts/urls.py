from django.urls import path
from . import views

urlpatterns = [
    path('login', views.Login, name='login'),
    # path('login', views.register_user, name='register'),
]
