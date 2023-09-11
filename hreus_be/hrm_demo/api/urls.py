from rest_framework.routers import DefaultRouter
from hrm_demo.api.views import PersonnelViewSet

PersonnelRouter = DefaultRouter()
PersonnelRouter.register(r'personnel', PersonnelViewSet)