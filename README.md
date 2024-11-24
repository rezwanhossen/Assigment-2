# Bi-Cycle Store IMS

## Project Overview

An Express application built with TypeScript and MongoDB, managing a bicycle store. The project allows users to perform CRUD operations on bicycles, manage orders, and track revenue from sales. It includes detailed error handling, inventory management, and validation checks, ensuring smooth and secure transactions within the store.

## Features

---

- **Exploring Design Patterns for Express.js**
- Feature-Based Pattern (Modular)
  </br>
  The Feature-Based structure is one of the most intuitive patterns for organizing an Express.js application.
- Why Choose Feature-Based?
  Encapsulation: Each feature is self-contained, making it easy to manage and test.
  Scalability: New features can be added easily without affecting the existing codebase.
  Improved Focus: Having all related files in one place makes it easier to focus on a feature.
- Example Folder Structure:

  ```
  project/
  ├── src/
  │   ├── features/
  │   │   ├── books/
  │   │   │   ├── bookModel.ts
  │   │   │   ├── bookController.ts
  │   │   │   ├── bookRoutes.ts
  │   │   │   └── bookService.ts
  │   │   ├── orders/
  │   │   │   ├── orderModel.ts
  │   │   │   ├── orderController.ts
  │   │   │   ├── orderRoutes.ts
  │   │   │   └── orderService.ts
  │   ├── app.ts
  │   └── server.ts
  ```

- **Bicycle Management**

  - Add, update, get and delete bicycle details.
  - Bicycle attributes include: name, brand, price, type (e.g., Mountain, Road, Hybrid, etc.), description, quantity, and stock status.

- **Order Management**
  - Place orders with inventory updates.
  - Handles scenarios like insufficient stock and order validation.
- **Revenue Calculation**
  - Aggregates and calculates total revenue from all orders.
- **Search & Filtering**
  - Retrieve bicycles by search terms for attributes like name, brand, and type.

---

## Getting Started

---

### Installation

1. Clone the repository:

```bash
    git clone https://github.com/rezwanhossen/Assigment-2.git
```

2. Install dependencies:

```bash
    npm install
```

3. Set up environment variables:

- Create a .env file in the root directory.
- Add the following variables: add your database username and password

```bash
PORT=5000
MONGO_URI=mongodb+srv://<db_username>:<db_password>@cluster0.p5jkrsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

```

4. Start the application:

```bash
    npm run start:dev
```

---

# API Endpoints

---

<h1> Bicycle Management</h1>

1. Create Bicycle

- POST /api/products

```bash
    {
  "name": "Roadster 5000",
  "brand": "SpeedX",
  "price": 300,
  "type": "Road",
  "description": "A premium road bike designed for speed and performance.",
  "quantity": 20,
  "inStock": true
}

```

2. Get All Bicycles

- GET /api/products
- Query (Optional): searchTerm=name|brand|type

3. Get a Specific Bicycle

- GET /api/products/:productId

4. Update Bicycle

- PUT /api/products/:productId

```bash
{
  "price": 350,
  "quantity": 15
}


```

5. Delete Bicycle

- DELETE /api/products/:productId

<h1>Order Management</h1>

1. Create Order

- POST /api/orders

```bash
{
  "email": "customer@example.com",
  "product": "productId_here",
  "quantity": 2,

}


```

2. Calculate Revenue

- /api/orders/revenue

---

## Contributions

Contributions are welcome! Please follow these steps:

- Fork the repository.
- Create a new branch `bash git checkout -b feature-name `.
- Commit your changes `bash git commit -m "Added feature X" `.
- Push to the branch `bash git push origin feature-name `.
- Open a pull request.
