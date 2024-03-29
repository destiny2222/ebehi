# Generated by Django 2.0 on 2019-10-04 21:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('administrator', '0008_auto_20190922_0720'),
    ]

    operations = [
        migrations.CreateModel(
            name='AssignmentName',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('assignment_class', models.CharField(choices=[('KG1', 'KG1'), ('KG2', 'KG2'), ('KG3', 'KG3'), ('PRY1', 'PRY1'), ('PRY2', 'PRY2'), ('PRY3', 'PRY3'), ('PRY4', 'PRY4'), ('PRY5', 'PRY5'), ('JSS1', 'JSS1'), ('JSS2', 'JSS2'), ('JSS3', 'JSS3'), ('SSS1', 'SSS1'), ('SSS2', 'SSS2'), ('SSS3', 'SSS3')], max_length=10)),
                ('assignment_subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='administrator.Subject')),
            ],
        ),
    ]
