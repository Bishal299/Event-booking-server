# Event-booking-server
# 🎟️ Event Booking API

A RESTful API for managing events and bookings, built with Express.js and MongoDB.

## 🌐 Hosted API

**Base URL**: [https://event-booking-api.onrender.com](https://event-booking-api.onrender.com)

## 📦 Endpoints

### 🔏 Auth
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Log in and receive JWT

### 📅 Events
- `GET /api/events` – View all events (authenticated)
- `POST /api/events` – Add event (admin only)
- `PUT /api/events/:id` – Update event (admin only)
- `DELETE /api/events/:id` – Delete event (admin only)

### 📌 Bookings
- `POST /api/bookings/book/:id` – Book an event (authenticated)
- `POST /api/bookings/cancel/:id` – Cancel booking (authenticated)

## 🔑 Authorization

Include JWT in headers:


## 🧪 Testing

Use [Hoppscotch](https://hoppscotch.io) or Postman to test endpoints.

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Render Deployment

---

