# React Events — DIY Exercises (Vite + React)

A tiny React app used to practice **event handling** in React (clicks, passing
arguments, and using the event object) together with `useState`.

---

## What I’ll practice

- Writing event handlers in React using **camelCase** (e.g. `onClick`, `onChange`)
- Passing **no arguments**, **custom arguments**, and the **event object** to handlers
- Updating component state with **`useState`**
- Writing small, meaningful **git commits**

---

## Requirements

- Node.js 18+ and npm
- Git

Check your versions:

```bash
node -v
npm -v
git --version
```

---

## Getting started

```bash
# install dependencies
npm install

# start dev server
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

Build & preview:

```bash
npm run build
npm run preview
```

---

## Available scripts

- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview the build locally

---

## Exercises implemented

1. **Counter**  
   - **Increment** button: increases the `count` by **+1** on click.  
   - **Decrement** button: decreases the `count` by **−1** on click.

2. **Passing a custom argument**  
   - Button that calls a handler with a **name** (e.g. shows an alert with `"Adam"`).

3. **Using the event object**  
   - Example handler that also receives the **event** (e.g. `e.type === "click"`).


---

## Project structure (minimal)

```
src/
  App.jsx        # main component with the exercises
  main.jsx       # React + Vite bootstrap
index.html
```

---

## React events quick notes

- Handlers use **camelCase**: `onClick`, `onChange`, `onSubmit`, …
- Pass the function **reference** (no parentheses) when no arguments are needed:
  ```jsx
  <button onClick={handleClick}>Click</button>
  ```
- To pass arguments, wrap in an **arrow function**:
  ```jsx
  <button onClick={() => handleClick("Adam")}>Click</button>
  ```
- Event object comes as the **last parameter** if you want it:
  ```jsx
  const handleClick = (name, e) => { /* ... */ };
  <button onClick={(e) => handleClick("Adam", e)}>Click</button>
  ```

---

## Git workflow

Make small, meaningful commits and push regularly:

```bash
git add .
git commit -m "feat: add counter with increment/decrement buttons"
git push
```

Example messages:
- `feat: add reset button`
- `refactor: extract Counter into its own component`
- `docs: update README with run instructions`

---

