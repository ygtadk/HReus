from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/', include('hreus_be.api.urls')),
    path('admin/', admin.site.urls),
]
