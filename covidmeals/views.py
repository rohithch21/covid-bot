from django.db.models.fields import NullBooleanField
from django.db.models.query import EmptyQuerySet
from django.shortcuts import render, redirect
import requests
from .models import MealService
import datetime
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
import json
from django.core import serializers


# Create your views here.
from django.http import HttpResponse


def index(request):
    return render(request, 'covidmeals/mainView.html')

def meals(request):
    # print(request) # <WSGIRequest: GET '/meals/?state=ka&city=blr&area=ylk'>
    # No limit set on the queried objects, Optimise further if necessary

    if request.method == "GET":
        context = {}
        state = request.GET.get('state','')
        city = request.GET.get("city","")
        area = request.GET.get("area","")
        query_result = MealService.objects.filter(geoState=state, geoCity=city, geoLocation=area)
        tmpJson = serializers.serialize("json",query_result)
        # print(tmpJson)
        context = {"searchResults" : tmpJson}
        return render(request, "covidmeals/meals.html", context)
    return render(request, "covidmeals/meals.html")

        


@csrf_exempt
def getServiceData(request):
    # print(request)
    if request.method == "POST":
        print(request.POST)
        name = request.POST['Name']
        phoneNumber = request.POST['phone']
        nameOfState = request.POST['states']
        nameOfCiy = request.POST['city']
        namOfArea = request.POST['area']
        meals = ""
        emailid=""
        if request.POST.get('breakfast'):
            meals = request.POST.get('breakfast')
        if request.POST.get("lunch"):
            meals = meals + "," + request.POST.get('lunch')
        if request.POST.get('dinner'):
            meals = meals + "," + request.POST.get('dinner')
        address = request.POST.get('address')
        if request.POST.get('Email'):
            emailid = request.POST.get("Email")
        signupDate = datetime.date.today()
        status = "A"
        cost = None
        if request.POST.get('free'):
            cost = request.POST.get('free')
        elif request.POST.get('paid'):
            cost = request.POST.get('paid')

        if(not request.POST.get('veg')):
            if(not request.POST.get('nonveg')):  
                food = "B"
            else:
                food='N'
        else:
            food='V'

        
        details = request.POST.get('addDetailsName') + "\n" + meals + "\n"

        record = MealService(name=name, phoneNumber=phoneNumber, email=emailid, address=address, signUpDate=signupDate, geoState=nameOfState, geoCity=nameOfCiy, geoLocation=namOfArea, mealsServed=meals, foodType=food, cost=cost, serviceStatus=status,moreDetails=details)
        record.save()
        print("New service provider has been added!")
    return render(request, "covidmeals/mealForm.html")

def showComingSoon(request):
    return render(request, "covidmeals/about.html")