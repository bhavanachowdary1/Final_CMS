# Generated by Django 4.0.4 on 2022-08-07 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0007_alter_course_coursecredits'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='CourseCredits',
            field=models.IntegerField(default=2),
        ),
    ]
