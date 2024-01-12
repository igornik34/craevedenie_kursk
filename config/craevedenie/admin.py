from django.contrib import admin
from .models import BlockCulture, BlockHistory, BlockNature, BlockMonument, Test, Question, Variant
# Register your models here.

admin.site.register(BlockNature)
admin.site.register(BlockCulture)
admin.site.register(BlockHistory)
admin.site.register(BlockMonument)
admin.site.register(Test)
admin.site.register(Question)
admin.site.register(Variant)