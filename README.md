# GitHub Repo Explorer

## Overview

GitHub Repo Explorer is a web application that allows users to search for GitHub repositories by entering username. The app displays up to 5 most matched users based on given username. Each user displays repository details such as name, description, and star count.

**Live Demo:** [Deploy URL Here](#)

---

## How to Run on Your Local Machine

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** (v16+ recommended)
- **pnpm** (or npm/yarn)

### **Clone the Repository**

```sh
git clone https://github.com/diksepta/github-repo-explorer.git
cd github-repo-explorer
```

### **Install Dependencies**

```sh
pnpm install  # or npm install / yarn install
```

### **Start the Development Server**

```sh
pnpm dev  # or npm run dev / yarn dev
```

### **Run Tests** (Optional)

```sh
pnpm test  # or npm run test / yarn test
```

---

## Project Structure

```
src
├── components      # Reusable UI components
│   ├── ui         # Common UI components (Button, Card, Input, etc.)
│   ├── repo-finder # Components specific to repository search
├── hooks          # Custom React hooks (e.g., useGithubRepo)
├── lib            # Utility functions
├── services       # API calls and data fetching (GitHub API)
└── App.tsx        # Main app component
```

The project structure is designed with scalability in mind, allowing for easy expansion as new features are added. The separation of concerns ensures maintainability and flexibility:

- Components are modular and reusable to support UI consistency.
- Context and Hooks manage state efficiently, making it easy to extend or replace logic.
- Services handle API interactions separately, simplifying future API integrations.
- Lib folder contains utilities that can be shared across the application.
- Future scalability: New features, such as additional search filters or user authentication, can be seamlessly integrated by following the current structure.

## Tech Stack & Libraries

### **Frontend**

- **React + Vite** → Faster development and optimized build performance.
- **Tailwind CSS** → Utility-first styling for rapid UI development.
- **ShadCN** → Pre-styled UI components with Tailwind.

### **Data Fetching**

- **React Query (TanStack Query)** → Efficient API fetching and caching.
- **GitHub REST API** → Fetching repository and user data.

### **Testing**

- **Vitest** → Fast and lightweight testing framework for React.
- **React Testing Library** → Testing React components behavior.
