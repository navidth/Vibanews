from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('future-lotteries', views.future_lotteries, name='future_lotteries'),
    path('lottery_results', views.lottery_results, name='lottery_results'),
    path('today_lotteries', views.today_lotteries, name='today_lotteries'),
    path('register-lottery', views.register_lottery, name='register_lottery'),
    path('lottery/<int:lotteryID>', views.lottery_items, name='lottery_items'),
    path('search-results', views.search_page, name='search_page'),

]
