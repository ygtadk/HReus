from django.db import models

class Personnel (models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    position = models.CharField(max_length=50)
    salary = models.IntegerField()
    date_of_employment = models.DateField()
    date_of_dismissal = models.DateField()
    def __str__(self):
        return self.name + ' ' + self.surname + ' ' + ' ' + self.position

