# Generated by Django 2.2.28 on 2022-12-03 17:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0001_initial'),
        ('users', '0002_auto_20221203_1659'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='review',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_review', to='review.Review'),
        ),
    ]
