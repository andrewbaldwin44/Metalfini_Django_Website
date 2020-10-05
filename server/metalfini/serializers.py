from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = (
        'id',
        'name',
        'french_name',
        'price',
        'description',
        'french_description',
        'image'
    )
