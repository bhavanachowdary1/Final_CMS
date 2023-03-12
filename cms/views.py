from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .models import *
from .forms import SignUpForm, EditUserProfileForm, CourseForm, ComponentsForm, UnitsForm
from datetime import datetime
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm
from django.contrib.auth import authenticate, login, logout

# from . models import Regform
# from . models import User
# from django.contrib.auth.models import User
# from django.contrib.auth import logout, authenticate, login

# from django.forms import modelform_factory

# reg_form = modelform_factory(Regform, exclude=[])

# Create your views here.
#example
def Catalog(request):
    if request.user.is_authenticated:
        courses=Course.objects.all()
        return render(request,'cms/Catalog.html', {'name':request.user, 'courses':courses})
    else:
        return HttpResponseRedirect('/')

def CC(request):
    if request.user.is_authenticated:
        if request.method=="POST":
            form=CourseForm(request.POST, request.FILES)
            if form.is_valid():
                cname=request.POST.get('CourseName')
                desc=request.POST.get('Desc')
                cimage=request.FILES['CourseImage']
                credit=request.POST.get('CourseCredits')
                Tags=request.POST.get('Tags')
                pst=Course(CourseName=cname, Desc=desc, CourseImage=cimage, CourseCredits=credit, Tags=Tags)
                pst.save()
                return redirect('CO')

        else:
            form=CourseForm()

        return render(request,'cms/CC.html', {'name':request.user, 'form':form})
    else:
        return HttpResponseRedirect('/')

def CO(request):
    if request.user.is_authenticated:
        if request.method=="POST":
            form=ComponentsForm(request.POST)
            if form.is_valid():
                Modules=request.POST.get('Modules')
                pst=Components(Modules=Modules)
                pst.save()
                return redirect('Units')
        else:
            form=ComponentsForm()
        return render(request,'cms/CO.html', {'name':request.user, 'form':form})
    else:
        return HttpResponseRedirect('/')

def Units(request):
    if request.user.is_authenticated:
        if request.method=="POST":
            form=UnitsForm(request.POST)
            if form.is_valid():
                Units=request.POST.get('Units')
                Texts=request.POST.get('Text')
                Videos=request.POST.get('Video')
                pst=ModelUnits(Units = Units, Text = Texts, Video=Videos)
                pst.save()
                form=UnitsForm()
                return redirect('Catalog')

        else:
            form=UnitsForm()

        return render(request,'cms/Units.html', {'name':request.user, 'form':form})
    else:
        return HttpResponseRedirect('/')

# def Update_Profile(request):
    
#     Register=Regform.objects.all()
#     print(Register)
#     return render(request,'cms/Update_Profile.html',{'Register': Register})

def Preview(request):
    context={}
    return render(request, 'cms/Preview.html', context)  

def display(request):
    context={}
    return render(request, 'cms/display.html', context)

#Sign up View function
def sign_up(request):
    if request.method == "POST":
        form=SignUpForm(request.POST)
        if form.is_valid():
            messages.success(request, 'Account Created Successfully!!!')
            form.save()
    else:
        form= SignUpForm()
    return render(request, 'cms/register.html', {'form':form})

#Login View
def user_login(request):
    if not request.user.is_authenticated:
        if request.method == 'POST':
            form = AuthenticationForm(request=request, data=request.POST)
            if form.is_valid():
                uname = request.POST.get('username')
                upass = request.POST.get('password')
                user = authenticate(username = uname, password = upass)
                if user is not None:
                    login(request, user)
                    messages.success(request, "Logged in successfully!!")
                    return redirect('/Catalog')
        else:
            form = AuthenticationForm()
        return render(request, 'cms/secsignin.html', {'form': form})
    else:
        return HttpResponseRedirect('/Catalog')

# Profile Page
def user_profile(request):
    if request.user.is_authenticated:
        if request.method=="POST":
            form = EditUserProfileForm(request.POST, instance=request.user)
            if form.is_valid():
                messages.success(request, "Profile Updated!!!")
                form.save()
        else:
            form=EditUserProfileForm(instance=request.user)
        return render(request, 'cms/Update_Profile.html', {'name':request.user, 'form':form})
    else:
        return HttpResponseRedirect('/')

#Logout
def user_logout(request):
    logout(request)
    return HttpResponseRedirect('/')

#Change Password
def user_change_pass(request):
    if request.user.is_authenticated:
        if request.method=="POST":
            fm=PasswordChangeForm(user=request.user, data=request.POST)
            if fm.is_valid():
                fm.save()
                return HttpResponseRedirect('/profile')
        else:
            fm=PasswordChangeForm(user=request.user)
        return render(request, 'cms/changepass.html', {'name':request.user,'form':fm})
    else:
        return HttpResponseRedirect('/')


#Update_Course

def Update_Course(request,id):
    if request.user.is_authenticated:
        if request.method == 'POST':
            cpi = Course.objects.get(pk=id)
            upi = ModelUnits.objects.get(pk=id)
            mpi = Components.objects.get(pk=id)
            Cform=CourseForm(request.POST, request.FILES, instance=cpi)
            Uform=UnitsForm(request.POST, instance=upi)
            Mform=ComponentsForm(request.POST, instance=mpi)
            if Cform.is_valid():
                Cform.save()
            if Mform.is_valid():
                Mform.save()
            if Uform.is_valid():
                Uform.save()
                return redirect('Catalog')
        else:
            cpi = Course.objects.get(pk=id) 
            upi = ModelUnits.objects.get(pk=id) 
            mpi = Components.objects.get(pk=id) 
            Cform=CourseForm(instance=cpi) 
            Uform=UnitsForm(instance=upi) 
            Mform=ComponentsForm(instance=mpi)
        return render(request, 'cms/Update_Course.html', {'Cform':Cform, 'Uform':Uform, 'Mform':Mform})
    else:
        return HttpResponseRedirect('/')


#Delete_Course
def Delete_Course(request, id):
    if request.user.is_authenticated:
        if request.method == "POST":
            pi = Course.objects.get(pk=id)
            ci = Components.objects.get(pk=id)
            ui = ModelUnits.objects.get(pk=id)
            pi.delete()
            ci.delete()
            ui.delete()
        return HttpResponseRedirect('/Catalog')
    else:
        return HttpResponseRedirect('/login')