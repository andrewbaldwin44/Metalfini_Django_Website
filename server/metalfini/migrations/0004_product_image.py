# Generated by Django 3.1.1 on 2020-10-05 01:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('metalfini', '0003_auto_20201004_2248'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.URLField(default='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fmetal-texture-18.jpg&f=1&nofb=1'),
        ),
    ]
