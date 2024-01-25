from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models


class UserManager(BaseUserManager):
    """ Custom User Manager extends BaseUserManager """

    def _create_user(self, phone_number, password=None, **extra_fields):
        """ Main and private function for storing
            user information on the database
        """
        if not phone_number:
            raise ValueError("شماره تلفن باید وارد شود")

        user = self.model(phone_number=phone_number, **extra_fields)
        user.set_password(password)
        user.full_clean()
        user.save(using=self._db)
        return user

    def create_user(self, phone_number, password=None, **extra_fields):
        """ create user in db method """
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_admin', False)
        return self._create_user(phone_number, password, **extra_fields)

    def create_superuser(self, phone_number, password=None, **extra_fields):
        """ create superuser in db method """
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_admin', True)
        extra_fields.setdefault('is_active', True)
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('سوپریوزر باید is_superuser=True داشته باشد.')
        if extra_fields.get('is_admin') is not True:
            raise ValueError('سوپریوزر باید is_admin=True داشته باشد.')
        return self._create_user(phone_number, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    """ User System object model """

    first_name = models.CharField(verbose_name="نام", max_length=100, null=True, blank=True)
    last_name = models.CharField(verbose_name="نام خانوادگی", max_length=100, null=True, blank=True)
    # email = models.EmailField(verbose_name="ایمیل", max_length=100, unique=True, db_index=True)
    phone_number = models.CharField(verbose_name="شماره تلفن", max_length=12, unique=True, db_index=True)
    is_active = models.BooleanField(verbose_name="فعالیت", default=False)
    is_superuser = models.BooleanField(verbose_name="سوپریوزر", default=False)
    is_admin = models.BooleanField(verbose_name="ادمین", default=False)

    USERNAME_FIELD = "phone_number"
    REQUIRED_FIELDS = ["first_name", "last_name"]
    objects = UserManager()

    def __str__(self):
        return self.first_name + " " + self.last_name

    @property
    def get_full_name(self):
        """ easily get first & last name of a user """
        return f"{self.first_name}, {self.last_name}"

    @property
    def is_staff(self):
        """ if user is admin, they are staff too """
        return self.is_admin
