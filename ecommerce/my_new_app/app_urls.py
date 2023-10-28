#to be more organized I created a dedicated url file for our websites url and to do that I have to import path
from django.urls import path

from my_new_app import views

#we have to import from the my_new_app to access views and since it's a python file no need for the .py and the end and them import the name of the function inside the views file
from my_new_app.views import index
#create the path for the url

urlpatterns = [
    path('home/', views.index ),
   
]