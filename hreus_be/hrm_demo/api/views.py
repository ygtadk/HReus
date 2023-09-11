from rest_framework.viewsets import ModelViewSet
from hrm_demo.models import Personnel
from hrm_demo.api.serializers import PersonnelSerializer

class PersonnelViewSet(ModelViewSet):
    queryset = Personnel.objects.all()
    serializer_class = PersonnelSerializer
