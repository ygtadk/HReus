from rest_framework.serializers import ModelSerializer
from hrm_demo.models import Personnel

class PersonnelSerializer(ModelSerializer):
    class Meta:
        model = Personnel
        fields = '__all__'
