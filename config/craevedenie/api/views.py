from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from ..models import BlockHistory, BlockNature, BlockCulture, BlockMonument, Test, Question, Variant
from .serializers import BlockHistoryModelSerializer, BlockCultureModelSerializer, BlockNatureModelSerializer, BlockMonumentModelSerializer, TestSerializer

class BlockHistoryViewsets(viewsets.ModelViewSet):
    queryset = BlockHistory.objects.all()
    serializer_class = BlockHistoryModelSerializer

class BlockCultureViewsets(viewsets.ModelViewSet):
    queryset = BlockCulture.objects.all()
    serializer_class = BlockCultureModelSerializer

class BlockNatureViewsets(viewsets.ModelViewSet):
    queryset = BlockNature.objects.all()
    serializer_class = BlockNatureModelSerializer

class BlockMonumentViewsets(viewsets.ModelViewSet):
    queryset = BlockMonument.objects.all()
    serializer_class = BlockMonumentModelSerializer

class TestViewsets(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSerializer

    def list(self, request, *args, **kwargs):
        name_test = request.query_params.get('name_test')

        if name_test:
            queryset = self.queryset.filter(name=name_test)
        else:
            return Response("Q-параметр name_test обязателен!")

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)