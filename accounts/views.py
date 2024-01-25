from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.views import generic

from accounts.forms import LoginForm
from accounts.models import User


def register_user(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        phone_number = request.POST['phone_number']
        password = request.POST['password']

        # You can add additional validation here if needed

        # Create the user
        user = User.objects.create_user(
            first_name=first_name,
            last_name=last_name,
            phone_number=phone_number,
            password=password,
        )
        user.save()
        messages.success(request, 'User registered successfully')
        return redirect('login')  # Replace 'login' with your login URL name

    return render(request, 'registration/login.html')


def Login(request):
    context = {

    }

    if request.POST and not request.user.is_authenticated:
        phone = request.POST.get('Phone')
        password = request.POST.get('user-pass')
        user = authenticate(phone=phone, password=password)
        if user is not None:
            login(request, user)
            return redirect('home_page')

    if not request.user.is_authenticated:
        return render(request, 'registration/login.html', context)
    else:
        return render(request, 'registration/logged_in.html', context)

# Create your views here.
#
# class Login(generic.View):
#     """ Login generic view to process user login """
#
#     http_method_names = ["get", "post"]
#     template_name = "registration/login.html"
#     form_class = LoginForm
#     errors = []
#
#     context = {
#         'form': form_class
#     }
#
#     def get(self, request):
#         """ rendering information by get method """
#         return render(request, self.template_name, self.context)
#
#     def post(self, request):
#         """ checking user credentials by post method """
#         phone = request.POST.get('Phone')
#         password = request.POST.get('user-pass')
#
#         user = authenticate(request, phone=phone, password=password)
#
#         if user:
#             login(request, user)
#             redirect('home_page')
#
#             self.errors.clear()
#             self.errors.append("کاربر مورد نظر یافت نشد")
#             return render(request, self.template_name,
#                           {"form": self.form_class(), "errors": self.errors})
#         return render(request, self.template_name, {'form': self.form_class()})
