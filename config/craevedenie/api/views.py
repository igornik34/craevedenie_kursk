from rest_framework import viewsets
from ..models import BlockHistory, BlockNature, BlockCulture, BlockMonument
from .serializers import BlockHistoryModelSerializer, BlockCultureModelSerializer, BlockNatureModelSerializer, BlockMonumentModelSerializer

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