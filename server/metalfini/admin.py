from django.contrib import admin
from .models import Product

class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'french_name',
        'price',
        'description',
        'french_description',
        'image'
    )

admin.site.register(Product, ProductAdmin)
