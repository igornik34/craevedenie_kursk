from django.db import models
from tinymce import models as tinymce_models

# Create your models here.
class Message(models.Model):
    content = models.CharField(max_length=500)

class BlockHistory(models.Model):
    title = models.CharField(max_length=200)
    description = tinymce_models.HTMLField()
    image = models.ImageField(upload_to='block_history', blank=True, null=True)
    def __str__(self):
        return self.title

class BlockNature(models.Model):
    title = models.CharField(max_length=200)
    description = tinymce_models.HTMLField()
    image = models.ImageField(upload_to='block_nature', blank=True, null=True)

class BlockCulture(models.Model):
    title = models.CharField(max_length=200)
    description = tinymce_models.HTMLField()
    image = models.ImageField(upload_to='block_culture', blank=True, null=True)
    link_image = models.URLField(null=True, blank=True)

class BlockMonument(models.Model):
    title = models.CharField(max_length=200)
    description = tinymce_models.HTMLField()
    image = models.ImageField(upload_to='block_monument', blank=True, null=True)
    link_image = models.URLField(null=True, blank=True)

class Variant(models.Model):
    variant_name = models.CharField(max_length=200)
    def __str__(self):
        return f'{self.variant_name}'

class Question(models.Model):
    question_name = models.CharField(max_length=200)
    variants = models.ManyToManyField(Variant, related_name='question_variants')
    correct_variant = models.ForeignKey(Variant, on_delete=models.CASCADE, related_name='correct_variant')
    def __str__(self):
        return f'{self.question_name}'

class Test(models.Model):
    name = models.CharField(max_length=200)
    questions = models.ManyToManyField(Question)
    def __str__(self):
        return f'{self.name}'
