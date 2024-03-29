from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlockHistoryViewsets, BlockCultureViewsets, BlockNatureViewsets, BlockMonumentViewsets, TestViewsets

router = DefaultRouter()
router.register(r'blocks_history', BlockHistoryViewsets, basename="blocks_history")
router.register(r'blocks_culture', BlockCultureViewsets, basename="blocks_culture")
router.register(r'blocks_nature', BlockNatureViewsets, basename="blocks_nature")
router.register(r'blocks_monument', BlockMonumentViewsets, basename="blocks_monument")
router.register(r'test', TestViewsets, basename="test")

urlpatterns = [
    path('', include(router.urls))
]
