from django.urls import path
from .views import EmployeeListCreateView, EmployeeDeleteView, AttendanceListCreateView

urlpatterns = [
    path('employees/', EmployeeListCreateView.as_view(), name='employees'),
    path('employees/<int:pk>/', EmployeeDeleteView.as_view(), name='employee-delete'),
    path('attendance/', AttendanceListCreateView.as_view(), name='attendance'),
]
