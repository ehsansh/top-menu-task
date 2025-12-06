# 🛒 Product List & Shopping Cart Task (Next.js)

**Demo Link (Vercel):** [https://top-menu-task1.vercel.app/](https://top-menu-task1.vercel.app/)

---

## 🎯 Project Goals

This project implements a responsive (mobile-first) product listing page with a sticky shopping cart, based on the requirements of the technical interview task.

### Key Requirements Implemented:

| Item | Requirement                                                                                                                                                                     | Status |
| :--: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----: |
|  1   | **Framework:** Must be implemented using **Next.js**.                                                                                                                           |   ✅   |
|  2   | **API Call:** API data fetching from `https://dummyjson.com/products` must be done on the **server side** (Server Components).                                                  |   ✅   |
|  3   | **Caching & State Management:** Must use **React Query (TanStack Query)** for request management and proper data caching.                                                       |   ✅   |
|  4   | **Product Card:** Design must closely resemble attached images, using fields: `title`, `description`, `thumbnail`, `price`, `discountPercentage`.                               |   ✅   |
|  5   | **Discount Tag:** Display a red discount tag with the percentage if `discountPercentage` exists.                                                                                |   ✅   |
|  6   | **Image Slider:** Implementation of a slideshow component for the main card image (full width) if the product has multiple images in the `images` array. (Bonus point achieved) |   ✅   |
|  7   | **Cart Functionality:** Ability to add and remove products from the shopping cart.                                                                                              |   ✅   |
|  8   | **Cart Display:** Shopping cart must be displayed as a **Sticky** bar at the bottom of the page (only if the cart is not empty).                                                |   ✅   |
|  9   | **Responsiveness:** Development focused exclusively on **mobile size**.                                                                                                         |   ✅   |

---

## 🏗️ Architecture and Technologies

### **Core Technologies:**

- **Next.js (App Router):** The main project framework, leveraging Server Components.
- **React Query (TanStack Query):** Used for managing Server State, caching product data, and optimizing API calls.
- **TypeScript:** Ensures strong typing and robust code quality.
- **SCSS Modules:** Used for modular styling following the **BEM Methodology**.
- **Zustand:** Used for efficient and simple Global State Management (Cart State).

### **Feature-Based Architecture:**

The project utilizes a **Feature-Based Architecture** to ensure high maintainability and scalability.

## 🛠️ Setup Instructions

To run the project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/ehsansh/top-menu-task
    cd top-menu-task
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application will be accessible at `http://localhost:3000`.
