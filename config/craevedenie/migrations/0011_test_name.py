# Generated by Django 4.2.7 on 2024-01-12 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('craevedenie', '0010_question_variant_test_question_correct_variant_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='test',
            name='name',
            field=models.CharField(default='1', max_length=200),
            preserve_default=False,
        ),
    ]