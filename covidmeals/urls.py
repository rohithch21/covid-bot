from django.urls import path

from . import views

app_name = 'covidmeals'

urlpatterns = [
    path('', views.index, name='index'),
    path('meals/', views.meals, name='meals'),
    path('mealForm/', views.getServiceData, name='service-data'),
    path('about/', views.showComingSoon, name='aboutus'),

]