# HRMS Lite – Full Stack Assignment

HRMS Lite is a lightweight Human Resource Management System built as part of a full-stack coding assignment.  
The application allows an admin to manage employee records and track daily attendance using a clean, professional interface.

The project demonstrates end-to-end development skills including frontend integration, REST API design, database persistence, validations, and live deployment.

---

## Live Application

- **Frontend (Netlify):**  
  https://grand-llama-bbeac6.netlify.app/

- **Backend API (Render):**  
  https://hrms-lite-backend-xps9.onrender.com/api/

---

## Features

### Employee Management
- Add a new employee with:
  - Employee ID (unique)
  - Full Name
  - Email Address
  - Department
- View list of all employees
- Delete an employee
- Client-side validations for required fields
- Server-side validation for duplicate employees

### Attendance Management
- Mark daily attendance (Present / Absent)
- Prevent duplicate attendance for the same employee and date
- View attendance records with:
  - Employee ID
  - Employee Name
  - Date
  - Status

---

## Tech Stack

### Frontend
- HTML
- CSS
- Vanilla JavaScript

### Backend
- Django
- Django REST Framework

### Database
- SQLite (used for simplicity and lightweight setup)

### Deployment
- **Backend:** Render
- **Frontend:** Netlify

---
![Django](https://img.shields.io/badge/Django-4.2-green)
![DRF](https://img.shields.io/badge/DRF-API-blue)
![Netlify](https://img.shields.io/badge/Frontend-Netlify-brightgreen)
![Render](https://img.shields.io/badge/Backend-Render-purple)

## 📸 Screenshots

### Employee Management – Add & List Employees
![Employee Management](screenshots/01.jpeg)

### Employee List View
![Employee List](screenshots/02.jpeg)

### Attendance Management
![Attendance Management](screenshots/03.jpeg)

### API Root (Django REST Framework)
![API Root](screenshots/04-api-root.jpeg)

### Employees API Response
![Employees API](screenshots/05-list-api.jpeg)

## Project Structure

```text
hrms-lite/
│
├── backend/
│   ├── backend/
│   ├── employees/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── README.md
└── .gitignore



