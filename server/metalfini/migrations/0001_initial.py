# Generated by Django 3.1.1 on 2020-10-04 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('price', models.FloatField()),
                ('description', models.TextField()),
            ],
        ),
    ]
