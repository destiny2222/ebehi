# Generated by Django 2.2.1 on 2019-10-30 03:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('administrator', '0013_auto_20191030_0432'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='generalresult',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='generalresult',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='generalresult',
            name='sex',
        ),
        migrations.RemoveField(
            model_name='generalresult',
            name='surname',
        ),
        migrations.AddField(
            model_name='generalresult',
            name='student',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='administrator.Student'),
        ),
    ]