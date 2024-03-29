# Generated by Django 4.2.7 on 2023-11-26 10:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('craevedenie', '0003_alter_blockculture_images_alter_blockhistory_images_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blockculture',
            name='images',
        ),
        migrations.RemoveField(
            model_name='blockhistory',
            name='images',
        ),
        migrations.RemoveField(
            model_name='blocknature',
            name='images',
        ),
        migrations.AddField(
            model_name='blockculture',
            name='images',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='craevedenie.image'),
        ),
        migrations.AddField(
            model_name='blockhistory',
            name='images',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='craevedenie.image'),
        ),
        migrations.AddField(
            model_name='blocknature',
            name='images',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='craevedenie.image'),
        ),
    ]
