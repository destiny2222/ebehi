# Generated by Django 2.0 on 2019-08-15 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrator', '0002_auto_20190815_2159'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='current_term',
            field=models.CharField(choices=[('1st term', '1st term'), ('2nd term', '2nd term'), ('3rd term', '3rd term')], max_length=10),
        ),
    ]