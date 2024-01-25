from django.db import models
from accounts.models import User


class ContactUs(models.Model):
    fullName = models.CharField(max_length=250)
    email = models.EmailField(max_length=250, blank=True, null=True)
    phoneNumber = models.CharField(max_length=50)
    message = models.CharField(max_length=550)

    def __str__(self):
        return f"ID: {self.id}, Name: {self.fullName}"


# class Customers(models.Model):
#     firstName = models.CharField(max_length=150)
#     lastName = models.CharField(max_length=150)
#     phoneNumber = models.CharField(max_length=30, unique=True)
#     registerDate = models.DateTimeField(auto_now_add=True)
#
#     def __str__(self):
#         return f"ID: {self.id}, Name: {self.firstName} {self.lastName}"


class Pictures(models.Model):
    pictureFile = models.ImageField(upload_to='./uploaded_images')
    lottery = models.ForeignKey('Lottery', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"ID: {self.id}, Path: {self.pictureFile}"


class Videos(models.Model):
    videoFile = models.FileField(upload_to='./uploaded_videos')
    lottery = models.OneToOneField('Lottery', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"ID: {self.id}, Path: {self.videoFile}"


class SocialMedia(models.Model):
    telegram = models.CharField(max_length=350, null=True, blank=True)
    instagram = models.CharField(max_length=250, null=True, blank=True)
    website = models.CharField(max_length=200, null=True, blank=True)
    whatsup = models.CharField(max_length=50, null=True, blank=True)
    lottery = models.OneToOneField('Lottery', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"ID: {self.id}, Number: {self.whatsup}"


class Winners(models.Model):
    fullName = models.CharField(max_length=250)
    rank = models.SmallIntegerField(null=True, blank=True)
    lottery = models.ForeignKey('Lottery', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"ID: {self.id}, Name: {self.fullName}, Rank: {self.rank}"


class Lottery(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    totalPrize = models.CharField(max_length=150, null=True, blank=True)
    holdingDate = models.DateTimeField(null=True)
    createDate = models.DateTimeField(auto_now_add=True)
    lastUpdated = models.DateTimeField(auto_now=True)
    supervisorName = models.CharField(max_length=250, null=True, blank=True)
    # owner = models.ForeignKey(Customers, on_delete=models.CASCADE, null=True, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    # newsSource = models.URLField(max_length=250, null=True, blank=True)
    companyName = models.CharField(max_length=250, null=True, blank=True)

    categoryChoices = [
        ('operator', 'اپراتور'),
        ('bank', 'بانک'),
        ('car', 'خودرو'),
        ('store', 'فروشگاه'),
        ('shop', 'مغازه'),
        ('social media', 'شبکه اجتماعی'),
    ]
    category = models.CharField(max_length=50, choices=categoryChoices, null=True, blank=True)

    statusChoices = [
        ('awaiting', 'در انتظار تایید'),
        ('approved', 'تایید شده'),
        ('disapproved', 'تایید نشده'),
    ]
    status = models.CharField(max_length=50, choices=statusChoices, null=True, blank=True)

    def __str__(self):
        return f"ID: {self.id}, Title: {self.title}"
