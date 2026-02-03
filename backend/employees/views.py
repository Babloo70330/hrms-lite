from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from .models import Employee, Attendance
from .serializers import EmployeeSerializer, AttendanceSerializer

class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all().order_by('-id')
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny]

class AttendanceViewSet(ModelViewSet):
    queryset = Attendance.objects.select_related('employee')
    serializer_class = AttendanceSerializer
    permission_classes = [AllowAny]
