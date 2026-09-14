# 🚀 Dev Stack

A modern and responsive web application that allows developers to explore different technologies and build their own development stack.

---

## 📝 Project Description

**Dev Stack** is a technology stack builder where users can explore available technologies and add them to their personal stack.

Users can:
- Explore different technologies
- View technology details such as category, difficulty, and rating
- Add technologies to their stack
- Prevent duplicate technologies
- Remove individual technologies
- Remove all selected technologies
- Get toast notifications for stack actions

---

## ⚙️ Technologies Used

- **React.js** — Build reusable UI components
- **TypeScript** — Type-safe JavaScript
- **Vite** — Fast frontend development and build tool
- **Tailwind CSS** — Utility-first CSS framework
- **DaisyUI** — UI component library
- **React-Toastify** — Toast notifications
- **JSON** — Local technology data source

---

## ✨ Key Features

- 📦 **Dynamic Technology Data**  
  Technology information is loaded from a local JSON file.

- 🛠️ **Technology Cards**  
  Each card displays the technology icon, name, description, category, difficulty, rating, and badge.

- ➕ **Add to Stack**  
  Users can add technologies to their personal stack.

- 🚫 **Duplicate Prevention**  
  Already selected technologies cannot be added again.

- 🗑️ **Remove Technology**  
  Users can remove individual technologies from their stack.

- 🧹 **Remove All**  
  Users can clear the entire stack with one click.

- 🔔 **Toast Notifications**  
  Users receive notifications when technologies are added or removed.

- ⏳ **Loading State**  
  A loading fallback is displayed while technology data is being loaded.

- 🎨 **Shared Gradient Theme**  
  A reusable Orange → Pink → Violet gradient is used for the brand, highlighted heading text, and primary buttons.

- 📱 **Responsive Design**  
  The interface is designed to work across desktop, tablet, and mobile devices.

---

## 📚 React Concept Q&A

### 1. What is JSX, and why is it used in React?

JSX lets me write HTML-like UI inside JavaScript/TypeScript. I used JSX to build the project components and UI.

### 2. What is the difference between props and state?

Props pass data from parent to child. State stores changing data inside a component. I used state to manage the selected technologies.

### 3. What does the useState hook do, and where did you use it?

`useState` manages changing data. I used it in `AvailableTechnologies.tsx` to store the selected technology stack.

### 4. How did you load the JSON data?

I used `fetch()` to load `technologiesData.json` and used React `Suspense` with `use()` to handle the Promise.

### 5. Why does every item in a .map() list need a unique key prop?

A unique `key` helps React identify each technology item and update the list efficiently.

### 6. What is conditional rendering?

Conditional rendering shows different UI based on a condition. I used it to show the empty stack or selected technologies.

### 7. How do you pass data from parent to child, and how does a child send data back?

I pass data and functions through props. The child calls the function received from the parent to update the selected stack.

---

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.tsx
│   ├── Banner.tsx
│   ├── Footer.tsx
│   └── technologies/
│       ├── Technologies.tsx
│       ├── AvailableTechnologies.tsx
│       ├── TechnologyCard.tsx
│       └── SelectedStack.tsx
├── technologyType.ts
└── App.tsx

public/
└── technologiesData.json