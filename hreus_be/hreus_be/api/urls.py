from rest_framework.routers import DefaultRouter
from hrm_demo.api.urls import PersonnelRouter
from django.urls import path, include

router = DefaultRouter()
router.registry.extend(PersonnelRouter.registry)

urlpatterns = [
    path('', include(router.urls)),
]
