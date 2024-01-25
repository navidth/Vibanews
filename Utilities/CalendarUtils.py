from jalali_date import datetime2jalali


def convert_georgian_to_jalali(date):
    return datetime2jalali(date)


def convert_georgian_to_jalali_list(lotteries):
    for lottery in lotteries:
        lottery.holdingDate = datetime2jalali(lottery.holdingDate)
    return lotteries



# def jalali_to_georgian(date):
#     # Replace these values with your Jalali date components
#     jalali_year = date.year
#     jalali_month = date.month
#     jalali_day = date.day
#
#     # Convert Jalali date to Gregorian date
#     jalali_date = JalaliDate(jalali_year, jalali_month, jalali_day)
#     georgian_date = jalali_date.
