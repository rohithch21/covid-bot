from django.db import models

# Create your models here.

class MealService(models.Model):
    costChoices = (
        ("F", "Free"),
        ("P", "Paid")
    )
    status = (
        ('A',"Active"),
        ("I", "Inactive"),
        ("U", "Unknown")
    )
    foodChoice = (
        ("V", "Veg"),
        ("N", "Non Veg"),
        ("B", "Veg and Non Veg")
    )
    name = models.CharField(max_length=100)
    phoneNumber = models.CharField(max_length=10)
    email = models.EmailField(default="")
    address = models.CharField(max_length=250)
    signUpDate = models.DateTimeField()
    geoState = models.CharField(max_length=30)
    geoCity = models.CharField(max_length=50)
    geoLocation = models.CharField(max_length=50)
    mealsServed = models.CharField(max_length=30) # optional field on the UI
    foodType = models.CharField(max_length=1,choices=foodChoice)
    cost = models.CharField(max_length=1,choices=costChoices,null=True)
    serviceStatus = models.CharField(max_length=1, choices=status)
    moreDetails = models.TextField()



