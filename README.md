# React.js Learning Journey

Welcome to my **React.js Learning Repository**.

This repository documents my journey of learning **React.js** from the ground up with a strong focus on understanding core concepts, writing clean code, and following industry best practices.

Rather than simply building projects, my goal is to understand **how React works internally, why its features exist, and when to use them effectively**. Every project, experiment, and exercise in this repository is part of a structured learning process.

## 🎯 Objectives

* Learn React fundamentals thoroughly
* Understand component-based architecture
* Master JSX, Props, State, and Event Handling
* Explore React Hooks and their real-world use cases
* Learn routing, forms, and state management
* Build reusable and maintainable UI components
* Follow clean code principles and best practices

## 🚀 Learning Philosophy

I believe that strong engineering comes from understanding **why**, not just **how**.

This repository serves as my personal learning archive where I continuously improve my React knowledge through hands-on practice and experimentation.

## Chapters
* Part 01: First React Component
* Part 02: JSX in React - Use JSX whenever you want to describe what your UI should look like using HTML-like syntax inside JavaScript.
* Part 03: State in React - Use state whenever data changes over time and the UI should automatically update.
* Part 04: Toggler in React - Use a toggler when you need to switch between two states such as show/hide, open/close, dark/light mode, or enable/disable.
* Part 05: Multiple Conditions (else if) - Use multiple conditional rendering when different UI should be displayed based on several possible conditions.
* Part 06: Props in React - Use props to pass data or functions from a parent component to its child components.
* Part 07: Get Input Field Value - Use this when you need to read user input from form fields.
* Part 08: Controlled Component - Use controlled components when React should fully manage the value of form inputs.
* Part 09: Handle Checkbox In React - Use this when users need to select one or multiple boolean options.
* Part 10: Handle Radio Button & Dropdown - Use radio buttons for selecting one option from multiple choices and dropdowns when there are many selectable options.
* Part 11: Looping & Map Function - Use map() whenever you need to render a list of dynamic data such as products, users, or posts.
* Part 12 : UseEffect Hook - Use useEffect to perform side effects like fetching data, subscribing to events, or synchronizing with external systems.
* Part 13 : Styling In React - Use styling to control the appearance and layout of your components.
* Part 14 : useRef hook In React - Use useRef to access DOM elements directly or store mutable values that shouldn't trigger re-renders.
* Part 15 : Pass Function As Props - Use this when a child component needs to trigger actions or update state in its parent.
* Part 16 : forwardRef Hook in React - Use forwardRef when a parent component needs direct access to a DOM element inside a child component.
* Part 17 : useFromStatus Hook in React - Use useFormStatus to display pending, success, or disabled states while a form is being submitted.
* Part 18 : useTransition Hook in React - Use useTransition to keep the UI responsive while performing non-urgent state updates.
* Part 19 : Drived State In React - Use derived state when a value can be calculated from existing state or props instead of storing it separately.
* Part 20 : Lifting State Up in React - Use lifting state up when multiple components need to share and synchronize the same data.
* Part 21 : Updateing Object in State - Use this when modifying one or more properties inside an object stored in React state.
* Part 22 : Updating Array In State - Use this when adding, removing, editing, or reordering items in an array stored in state.
* Part 23 : UseActionState Hook in React - Use useActionState when handling form submissions that need automatic state management for loading, success, or error results.
* Part 24 : UseId Hook in React - Use useId to generate unique IDs for accessibility attributes like label and input associations.
* Part 25 : Context API in React - Use Context API to share global data such as authentication, theme, or language without prop drilling.
* Part 26 : Custom Hooks in React - Use custom hooks to extract and reuse stateful logic across multiple components.
* Part 27 : React Router - Use React Router to create navigation and multiple pages in a single-page application.
* Part 28 : API Implementation in React - Use API calls whenever your application needs to fetch, create, update, or delete data from a backend.
* Part 29 : Validation In React - Use validation to ensure user input is correct before processing or submitting it.
* Part 30 : Validation with useActionState In React - Use this when you want to combine form validation and submission state management using React Actions.
* Part 31 : useReducer Hook in React - Use useReducer when state logic becomes complex or involves multiple related state transitions.
* Part 32 : Lazy Loading in React - Use lazy loading to improve performance by loading components only when they are actually needed.
* Part 33 : use API in React - Use the use() API to read asynchronous resources directly inside components without manually managing loading state.
* Part 34 : useOptimistic Hook in React - Use useOptimistic to immediately update the UI before the server confirms the action, creating a faster user experience.
* Part 35 : Activity Feature in React - Use the Activity feature to preserve component state while temporarily hiding or deprioritizing parts of the UI.
* Part 36 : useEffectEvent in React - Use useEffectEvent when an effect needs access to the latest props or state without unnecessarily re-running the effect.
* Part 37 : Redux Toolkit - Use Redux Toolkit when multiple unrelated components need to share and centrally manage complex application state.

## A Simple Rule to Remember

| Situation                                                      | Use                                               |
| -------------------------------------------------------------- | ------------------------------------------------- |
| UI changes over time                                           | **State (`useState`)**                            |
| Show or hide something, or switch between two values           | **Toggler (`useState`)**                          |
| Parent → Child communication                                   | **Props**                                         |
| Child → Parent communication                                   | **Function as Props**                             |
| Multiple components need the same data                         | **Lifting State Up**                              |
| Share data across many components without prop drilling        | **Context API**                                   |
| Manage global application state                                | **Redux Toolkit**                                 |
| Handle form inputs                                             | **Controlled Components**                         |
| Handle form submission state                                   | **`useFormStatus` / `useActionState`**            |
| Validate user input                                            | **Validation / Validation with `useActionState`** |
| Fetch data or perform side effects                             | **`useEffect`**                                   |
| Access or manipulate DOM elements                              | **`useRef` / `forwardRef`**                       |
| Reuse business logic                                           | **Custom Hooks**                                  |
| Compute values from existing state                             | **Derived State**                                 |
| Update complex state with many actions                         | **`useReducer`**                                  |
| Update objects or arrays immutably                             | **Object & Array State Updates**                  |
| Navigate between pages                                         | **React Router**                                  |
| Communicate with a backend                                     | **API Implementation**                            |
| Load components only when needed                               | **Lazy Loading**                                  |
| Keep the UI responsive during expensive updates                | **`useTransition`**                               |
| Show immediate UI updates before the server responds           | **`useOptimistic`**                               |
| Read async resources directly in components                    | **`use()` API**                                   |
| Access the latest state inside an effect without re-running it | **`useEffectEvent`**                              |
| Preserve hidden UI while keeping its state                     | **Activity Feature**                              |
| Generate unique IDs for accessibility                          | **`useId`**                                       |
| Style React components                                         | **Styling (CSS, CSS Modules, Tailwind, etc.)**    |

---

**Learning • Building • Improving**
