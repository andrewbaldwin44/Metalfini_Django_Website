from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=220)
    price = models.FloatField()
    description = models.TextField()
    image = models.URLField(default='https://firebasestorage.googleapis.com/v0/b/metalfini.appspot.com/o/metal.jpeg?alt=media&token=6eabb394-f737-4845-8d1c-857a7e927bf3')

    def _str_(self):
        return self.name
