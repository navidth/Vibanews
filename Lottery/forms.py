from django import forms

from Lottery.models import Pictures


class LotteryForm(forms.Form):
    title = forms.CharField(label='عنوان قرعه کشی', max_length=100, widget=forms.TextInput(
        attrs={'class': 'form-control m-0 m-sm-2 rounded-2 px-3', 'placeholder': 'عنوان قرعه کشی ...'}))
    company_name = forms.CharField(label='نام شرکت', widget=forms.TextInput(
        attrs={'class': 'form-control m-0 m-sm-2 px-3 rounded-2', 'placeholder': 'نام شرکت ...'}))
    prize = forms.CharField(label='جایزه', widget=forms.TextInput(
        attrs={'class': 'fs-6 m-0 m-sm-2 form-control rounded-2', 'placeholder': 'ارزش ریالی کل جوایز ...'}))
    supervisor = forms.CharField(label='ناظر قرعه کشی', widget=forms.TextInput(
        attrs={'class': 'form-control m-0 m-sm-2 rounded-2', 'placeholder': 'نام ناظر ...'}))
    instagram = forms.CharField(label='اینستاگرام', widget=forms.TextInput(
        attrs={'class': 'm-0 m-sm-2 form-control rounded-2 px-3', 'placeholder': 'اینستاگرام ...'}))
    telegram = forms.CharField(label='تلگرام', widget=forms.TextInput(
        attrs={'class': 'm-0 m-sm-2 form-control rounded-2 px-3', 'placeholder': 'تلگرام ...'}))
    website = forms.CharField(label='آدرس وب سایت', widget=forms.TextInput(
        attrs={'class': 'm-0 m-sm-2 form-control rounded-2 px-3', 'placeholder': 'آدرس سایت ...'}))
    holdingDate = forms.CharField(label='تاریخ برگزاری', widget=forms.TextInput(
        attrs={'class': 'form-control m-0 m-sm-2 rounded-2 px-3', 'placeholder': ' تاریخ برگزاری ...', 'data-jdp': '',
               'data-jdp-miladi-input': 'miladi_date'}))
    miladiDate = forms.CharField(widget=forms.HiddenInput(), required=False)
    holdingTime = forms.CharField(label='ساعت برگزاری', widget=forms.TextInput(
        attrs={'class': 'form-control m-0 m-sm-2 rounded-2 px-3', 'placeholder': 'ساعت برگزاری ...', 'data-jdp': '',
               'data-jdp-option-1': ''}))
    category1 = forms.ChoiceField(label='دسته بندی',
                                  choices=[('', 'انتخاب کنید'), ('operator', 'اپراتور'), ('bank', 'بانک'),
                                           ('car', 'خودرو'), ('store', 'فروشگاه'), ('shop', 'مغازه'),
                                           ('social media', 'شبکه اجتماعی')],
                                  widget=forms.Select(attrs={'class': 'form-select rounded-2 m-0 m-sm-2'}))
    description = forms.CharField(label='توضیحات', widget=forms.Textarea(
        attrs={'class': 'm-0 m-sm-2 rounded-2', 'rows': '6', 'placeholder': 'توضیحات و شرایط قرعه کشی ...'}))
    picture1 = forms.ImageField(label='انتخاب عکس 1', required=True, widget=forms.FileInput(
        attrs={'class': 'form-control m-0 m-sm-2 rounded-2 image-file', 'id': 'image-file1', 'style': 'color: red'}))
    picture2 = forms.ImageField(label='انتخاب عکس 2', required=False, widget=forms.FileInput(
        attrs={'class': 'form-control m-0 m-sm-2 rounded-2 image-file', 'id': 'image-file2'}))
    picture3 = forms.ImageField(label='انتخاب عکس 3', required=False, widget=forms.FileInput(
        attrs={'class': 'form-control m-0 m-sm-2 rounded-2 image-file', 'id': 'image-file3'}))
    picture4 = forms.ImageField(label='انتخاب عکس 4', required=False, widget=forms.FileInput(
        attrs={'class': 'form-control m-0 m-sm-2 rounded-2 image-file', 'id': 'image-file4'}))

#
# class LotteryRegistration(forms.Form):
#     title = forms.CharField(max_length=200)
#     companyName = forms.CharField(max_length=300)
#     description = forms.Textarea()
#     totalPrize = forms.CharField(max_length=150)
#     holdingDate = forms.DateTimeField()
#     supervisorName = forms.CharField(max_length=250)
#     newsSource = forms.URLField(max_length=250)
#     pictures = forms.FileField()
#     telegram = forms.CharField(max_length=350)
#     instagram = forms.CharField(max_length=250)
#     phoneNumber = forms.CharField(max_length=50)
#     website = forms.CharField(max_length=200)
