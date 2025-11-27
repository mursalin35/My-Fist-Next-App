# 🏥 M.S Homoeo Complex — Full Stack Application  
Modern Homeopathy Shop Management System built with **Next.js 16 (App Router)**, **Node.js + Express API**, and **Protected Authentication System**.

---

## 🚀 Features

### 🔐 Authentication  
- JSON Web Token (JWT) based login  
- Protected API routes  
- Protected frontend pages (Add Product, Manage Products)  
- Auto redirect if user is not logged in  

### 🛒 Product Management  
- Add Product (protected)  
- Manage Products (protected)  
- Delete Product  
- View Details  
- Responsive table + card layout  

### 🎨 UI/UX  
- TailwindCSS + DaisyUI  
- Clean, modern homoeopathy-style design  
- Mobile-friendly navigation  
- Profile dropdown + logout button  

---

## 📁 Project Structure

```
project-root/
│── backend/
│   ├── server.js
│   ├── routes/
│   └── controllers/
│
│── frontend/
│   ├── app/
│   │   ├── add-product/
│   │   ├── manage-products/
│   │   ├── login/
│   │   ├── contact/
│   │   ├── about/
│   │   └── page.jsx
│   ├── components/
│   ├── context/
│   └── styles/
```

---

## ⚙️ Backend Setup (Node.js + Express)

### 1️⃣ Install dependencies

```bash
cd backend
npm install express cors dotenv jsonwebtoken bcryptjs mongoose
```

### 2️⃣ Run backend server  

```bash
npm start
```

Your API will run at:

```
http://localhost:5000
```

---

## 💻 Frontend Setup (Next.js 16)

### 1️⃣ Install dependencies

```bash
cd frontend
npm install
```

### 2️⃣ Start the frontend dev server

```bash
npm run dev
```

App will run at:

```
http://localhost:3000
```

---

## 🔐 Protected Routes Summary

| Route | Type | Description |
|-------|------|-------------|
| `/add-product` | Protected | Add new product |
| `/manage-products` | Protected | View, delete, manage all products |
| `/login` | Public | Login page |
| `/products` | Public | Product listing |
| `/contact` | Public | Contact page |
| `/about` | Public | About page |

---

## 🔌 Environment Variables

Create a `.env` file in **backend**:

```
PORT=5000
MONGO_URI=YOUR_MONGO_URI
JWT_SECRET=YOUR_SECRET_KEY
```

Create a `.env.local` file in **frontend**:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---



```
POST   /api/products/add
GET    /api/products/all
DELETE /api/products/:id
```

---

## ❤️ Developer  
**M.S Mursalin**


---

