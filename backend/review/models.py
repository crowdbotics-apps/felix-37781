from django.conf import settings
from django.db import models
class Review(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    rating = models.FloatField(null=True,blank=True,)
    description = models.CharField(max_length=256,null=True,blank=True,)
    reviewer = models.OneToOneField("users.User",on_delete=models.CASCADE,null=True,blank=True,related_name="review_reviewer",)
    seller = models.OneToOneField("users.User",on_delete=models.CASCADE,null=True,blank=True,related_name="review_seller",)

# Create your models here.
