from django.urls import path

from . import views

app_name = 'covidmeals'

urlpatterns = [
    path('', views.index, name='index'),
    path('meals/', views.meals, name='meals'),
    path('mealForm/', views.getServiceData, name='service-data'),
    path('about/', views.showComingSoon, name='aboutus'),
    path('vaccination/', views.viewVaccinePage, name='vaccine-page'),
    path('data/cities/', views.getCities, name='indian-cities'),
    path('data/areas/', views.getLocalities, name='localities'),
    path('data/tc/', views.viewTC, name='tc'),
]