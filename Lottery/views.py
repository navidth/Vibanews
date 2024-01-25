from django.shortcuts import render, redirect
from django.utils import timezone
from datetime import datetime

from Utilities.CalendarUtils import convert_georgian_to_jalali_list, convert_georgian_to_jalali

from Lottery.models import Lottery, Pictures, SocialMedia
from Lottery.forms import LotteryForm

from django.contrib.auth import authenticate, login, logout


# Create your views here.


def home_page(request):
    all_lotteries = Lottery.objects.filter(holdingDate__gte=datetime.today().date()).order_by('holdingDate')[:10]

    all_lotteries = convert_georgian_to_jalali_list(all_lotteries)

    context = {
        'lotteries': all_lotteries
    }

    return render(request, template_name='index.html', context=context)


def future_lotteries(request):
    lotteries = Lottery.objects.filter(holdingDate__date__gt=datetime.today().date()).order_by('holdingDate')
    lotteries = convert_georgian_to_jalali_list(lotteries)

    context = {
        'lotteries': lotteries
    }

    return render(request, template_name='future-lotteries.html', context=context)


def lottery_results(request):
    lotteries = Lottery.objects.filter(holdingDate__date__lt=datetime.today().date()).order_by('-holdingDate')
    lotteries = convert_georgian_to_jalali_list(lotteries)

    context = {
        'lotteries': lotteries
    }

    return render(request, 'lottery-results.html', context)


def today_lotteries(request):
    lotteries = Lottery.objects.filter(holdingDate__date=timezone.now().date())
    lotteries = convert_georgian_to_jalali_list(lotteries)

    context = {
        'lotteries': lotteries
    }

    return render(request, 'today-lotteries.html', context)


def register_lottery(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        company_name = request.POST.get('company_name')
        prize = request.POST.get('prize')
        supervisor = request.POST.get('supervisor')
        instagram = request.POST.get('instagram')
        telegram = request.POST.get('telegram')
        website = request.POST.get('website')
        holding_date = request.POST.get('miladiDate')
        holding_time = request.POST.get('holdingTime')
        category1 = request.POST.get('category1')
        description = request.POST.get('description')
        picture1 = request.FILES.get('picture1')
        picture2 = request.FILES.get('picture2')
        picture3 = request.FILES.get('picture3')
        picture4 = request.FILES.get('picture4')

        lottery = Lottery()
        lottery.title = title
        lottery.companyName = company_name
        lottery.totalPrize = prize
        lottery.supervisorName = supervisor

        # fix date and time and combine to datetime field
        holding_date = datetime.strptime(holding_date, '%Y/%m/%d')
        holding_time = datetime.strptime(holding_time, '%H:%M:%S').time()
        combinedHoldingDate = datetime.combine(holding_date.date(), holding_time)

        lottery.holdingDate = combinedHoldingDate
        lottery.category = category1
        lottery.description = description
        lottery.save()

        if picture1 is not None:
            pic1 = Pictures(pictureFile=picture1)
            pic1.save()
            lottery.pictures_set.add(pic1)

        if picture2 is not None:
            pic2 = Pictures(pictureFile=picture2)
            pic2.save()
            lottery.pictures_set.add(pic2)

        if picture3 is not None:
            pic3 = Pictures(pictureFile=picture3)
            pic3.save()
            lottery.pictures_set.add(pic3)

        if picture4 is not None:
            pic4 = Pictures(pictureFile=picture4)
            pic4.save()
            lottery.pictures_set.add(pic4)

        socialmedia = SocialMedia(
            instagram=instagram,
            telegram=telegram,
            website=website,
        )
        socialmedia.save()
        # lottery.socialmedia = socialmedia
        socialmedia.lottery = lottery
        socialmedia.save()
        lottery.save()

    if request.user.is_authenticated:
        return render(request, 'register-lottery.html')
    else:
        return render(request, 'registration/not_logged_in.html')


def search_page(request):
    lotteries = None
    query = request.GET.get('search')

    if query:
        # Filter Lotteries by title containing the query
        lotteries = Lottery.objects.filter(title__icontains=query)

        # Assuming you have a function to convert dates from Georgian to Jalali calendar
        lotteries = convert_georgian_to_jalali_list(lotteries)

    context = {
        'lotteries': lotteries
    }

    return render(request, 'search-page.html', context)


def lottery_items(request, lotteryID):
    lottery = Lottery.objects.get(id=lotteryID)

    lottery.holdingDate = convert_georgian_to_jalali(lottery.holdingDate)
    context = {
        'lottery': lottery
    }
    return render(request, 'lottery-items.html', context)
