from django import forms


class LoginForm(forms.Form):
    """ Custom form for login """
    phone = forms.CharField(widget=forms.TextInput, max_length=20)
    password = forms.CharField(widget=forms.PasswordInput, max_length=250)
