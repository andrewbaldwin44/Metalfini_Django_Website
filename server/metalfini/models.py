from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=220)
    price = models.FloatField()
    description = models.TextField()

    def _str_(self):
        return self.name
