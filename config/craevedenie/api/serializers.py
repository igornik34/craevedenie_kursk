from rest_framework import serializers
from ..models import BlockHistory, BlockCulture, BlockNature, BlockMonument, Test, Question, Variant

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



class VariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variant
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    variants = VariantSerializer(many=True, read_only=True)
    correct_variant = VariantSerializer
    class Meta:
        model = Question
        fields = ['question_name', 'variants', 'correct_variant']

class TestSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    class Meta:
        model = Test
        fields = ['name', 'questions']