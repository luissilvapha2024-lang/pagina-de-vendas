# AI Rules for TechFix Application

This document outlines the technical stack and guidelines for using various libraries within the TechFix project.

## Tech Stack Overview

*   **React**: The primary JavaScript library for building user interfaces.
*   **TypeScript**: Used for type safety across the entire codebase, ensuring robust and maintainable code.
*   **Vite**: The build tool providing a fast development experience and optimized production builds.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly styling components with responsive design in mind.
*   **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS, providing a consistent and accessible UI.
*   **React Router**: For declarative client-side routing and navigation within the application.
*   **TanStack Query**: Manages server state, data fetching, caching, and synchronization.
*   **React Hook Form & Zod**: Used together for efficient form management and schema-based validation.
*   **Lucide React**: A library for easily integrating a wide range of vector icons.
*   **Sonner**: A modern, accessible, and customizable toast notification library.

## Library Usage Rules

To maintain consistency and best practices, please adhere to the following guidelines when developing:

1.  **UI Components**:
    *   **Always** prioritize using components from `shadcn/ui`.
    *   If a specific `shadcn/ui` component doesn't exist or requires significant customization, create a **new component** in `src/components/` that leverages `shadcn/ui` primitives (like `Button`, `Card`, etc.) and Tailwind CSS for styling.
    *   **Never modify** the files within `src/components/ui/` directly.

2.  **Styling**:
    *   **Exclusively use Tailwind CSS** for all styling. Avoid custom CSS files (other than `src/index.css` for global styles) or inline styles.
    *   Ensure all designs are **responsive** using Tailwind's responsive utilities. The `useIsMobile` hook is available for conditional rendering based on screen size.

3.  **Routing**:
    *   Use **React Router** (`react-router-dom`) for all client-side navigation.
    *   Keep the main application routes defined in `src/App.tsx`.

4.  **State Management & Data Fetching**:
    *   For server state (data fetched from an API), use **TanStack Query**.
    *   For local component state, use React's built-in `useState` and `useReducer` hooks.

5.  **Form Handling**:
    *   Use **React Hook Form** for managing all forms.
    *   Integrate **Zod** with React Hook Form for robust form validation.

6.  **Icons**:
    *   Use icons from the **`lucide-react`** library.

7.  **Notifications**:
    *   Use **`sonner`** for displaying toast notifications to the user. The `Sonner` component is already included in `src/App.tsx`.

8.  **Date Manipulation**:
    *   Utilize **`date-fns`** for any date parsing, formatting, or manipulation tasks.

9.  **Theming**:
    *   Use the `useTheme` hook from `src/contexts/ThemeContext.tsx` to access the current theme and toggle it.

10. **File Structure**:
    *   New pages should be placed in `src/pages/`.
    *   New components should be placed in `src/components/`.
    *   Utility functions should be placed in `src/lib/` or `src/utils/`.
    *   Hooks should be placed in `src/hooks/`.
    *   Keep directory names all lower-case.

11. **Code Quality**:
    *   Write clean, readable, and well-commented code.
    *   Adhere to TypeScript best practices for strong typing.
    *   Avoid over-engineering; focus on simple and elegant solutions that directly address the requirements.