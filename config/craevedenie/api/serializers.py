from rest_framework import serializers
from ..models import BlockHistory, BlockCulture, BlockNature, BlockMonument

class BlockHistoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlockHistory
        fields = ('__all__')

class BlockCultureModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlockCulture
        fields = ('__all__')

class BlockNatureModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlockNature
        fields = ('__all__')

class BlockMonumentModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlockMonument
        fields = ('__all__')