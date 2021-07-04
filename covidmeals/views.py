from abc import abstractproperty
from posixpath import abspath
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
import os


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
    if request.method == "POST":
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
            meals = meals + " " + request.POST.get('lunch')
        if request.POST.get('dinner'):
            meals = meals + " " + request.POST.get('dinner')
        address = request.POST.get('address')
        if request.POST.get('Email'):
            emailid = request.POST.get("Email")
        signupDate = datetime.date.today()
        status = "A"
        cost = request.POST.get('pricing' , "")
        costDet = "Pricing : "
        if cost == 'F':
            costDet = costDet + "Free"
        elif cost == 'P':
            costDet = costDet + "Paid"

        foodType = ""
        if(request.POST.get('foodtype') != "veg"):
            if(request.POST.get('foodtype') != "nonveg"):  
                food = "B"
            else:
                food='N'
                foodType= "Non Veg"
        else:
            food='V'
            foodType = "Veg"

        
        details = request.POST.get('addDetailsName') + " \n" + meals + " \n" + costDet + " \n" + foodType

        record = MealService(name=name, phoneNumber=phoneNumber, email=emailid, address=address, signUpDate=signupDate, geoState=nameOfState, geoCity=nameOfCiy, geoLocation=namOfArea, mealsServed=meals, foodType=food, cost=cost, serviceStatus=status,moreDetails=details)
        record.save()
        print("New service provider has been added!")
    return render(request, "covidmeals/mealForm.html")

@csrf_exempt
def showComingSoon(request):
    '''
    read userfeedback json days
    convert it into dict
    update thanks parameter
    add the user feedback into the feedbacks array if any
    '''
    if request.method == 'POST':
        feedback = request.POST.get('feedback','')
        abspath = os.path.dirname(__file__)
        relPath = os.path.join(abspath,"../static/json/userFeedback.json")
        f = open(relPath)
        data = json.load(f)
        f.close()
        data["thanks"] += 1
        if feedback != "":
            data["feedback"].append(feedback)
        with open(relPath, 'w') as f:
            json.dump(data,f)
    return render(request, "covidmeals/about.html")

def viewVaccinePage(request):
    return render(request, 'covidmeals/vaccine.html')

@csrf_exempt
def getCities(request):
    # selectedState = request.GET.get("city")
    abspath = os.path.dirname(__file__)
    relPath = os.path.join(abspath,"../static/json/cities.json")
    body = json.loads(request.body.decode("utf-8"))
    selectedState = body.get("geoState")
    cities = {}
    with open(relPath, 'r') as f:
        allcities = json.load(f)
        result = allcities.get(selectedState)
    cities = {selectedState : result}
    return JsonResponse(cities)


@csrf_exempt
def getLocalities(request):
    abspath = os.path.dirname(__file__)
    relPath = os.path.join(abspath,"../static/json/localities.json")
    body = json.loads(request.body.decode("utf-8"))
    selectedCity = body.get("geoCity")
    areas = {}
    with open(relPath, 'r') as f:
        allAreas = json.load(f)
        result = allAreas.get(selectedCity)
    cities = {selectedCity : result}
    return JsonResponse(cities)

def viewTC(request):
    return render(request, 'covidmeals/tc.html')