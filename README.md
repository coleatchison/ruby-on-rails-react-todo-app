# CRUD Todo App

A modern full-stack CRUD Todo application built with Ruby on Rails, React, TypeScript, and TailwindCSS.

This project was created to learn Ruby on Rails fundamentals while simultaneously demonstrating production-style React architecture, component composition, state management patterns, and frontend performance optimization techniques.

---

## Tech Stack

### Backend
- Ruby on Rails
- SQLite
- REST API architecture
- ActiveRecord ORM

### Frontend
- React
- TypeScript
- Vite
- TailwindCSS
- Lucide React Icons

---

## Project Overview

This application is a fully functional CRUD Todo system with a separate frontend and backend architecture.

The Rails backend exposes a REST API responsible for:
- database persistence
- CRUD operations
- routing
- request validation
- JSON responses

The React frontend consumes the Rails API and provides:
- realtime UI updates
- editing workflows
- optimistic-feeling interactions
- glassmorphism-inspired UI styling
- responsive layouts
- componentized architecture

Although the project itself is intentionally simple, the implementation focuses heavily on:
- clean architecture
- maintainability
- reusable components
- frontend performance considerations
- separation of concerns
- scalable React patterns

---

## Application Features

### Core Features
- Create todos
- Read todos
- Update todo title
- Toggle completed state
- Delete todos
- Responsive UI
- Inline editing
- Empty-state validation

### Frontend Features
- TypeScript throughout the application
- Reusable component architecture
- Memoized callbacks with `useCallback`
- Memoized lists with `useMemo`
- Dynamic conditional styling
- Responsive layout support
- Glassmorphism UI styling
- API abstraction layer
- Strong typing between frontend/backend

### Backend Features
- RESTful API architecture
- Rails controllers/routes
- ActiveRecord models
- Database persistence
- JSON serialization
- Proper HTTP methods/status codes

---

## Screenshots / Demo

### All states of the todos
<img width="750" alt="RubyTodoApp" src="https://github.com/user-attachments/assets/d3fec855-7116-48bf-86a7-e0ee2bc82e79" />

From top to bottom:
- You can see the title, as well as the number of todos that are saved
- Then, you have an input to write a new todo, and a button to add it
- Under that are the todos
    - The first todo is in the editing state, where you can change what the todo says
    - The second todo is the normal state, where the todo is uncompleted. On the left of the todo is the checkbox, and on the right are the edit and delete buttons
    - The third todo is the completed state. Here, the checkbox is checked, the todo is crossed out, and you can still delete it

<br/>

### Empty list
<img width="750" alt="RubyTodoApp-EmptyState" src="https://github.com/user-attachments/assets/0bd3d1b8-e152-4fbb-8d50-3ed9aee05c8b" />

When the list is empty, the count is shown as 0, and there is text showing that there are no todos.

<br/>

### Video Demo

<video src="https://github.com/user-attachments/assets/f35716a3-ceb0-4733-8444-c4d4e2503bf2"></video>

Github required me to lower the quality of the video to upload, so aplogies for the low-res, but it's thankfully still clear enough to see it work!

<br/>

---

## Installation

### Prerequisites

Make sure the following are installed:

- Ruby
- Rails
- Node.js
- npm


### Backend Setup

```bash
cd backend

bundle install

rails db:create
rails db:migrate

rails s
```

The Rails API will start on:

```txt
http://localhost:3000
```



### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

The React frontend will start on:

```txt
http://localhost:5173
```

---

## API Endpoints

| Operation | HTTP Method | API URL          | Request Body | Description |
| --------- | ----------- | ---------------- | ------------ | ----------- |
| Create    | POST        | `/api/todos`     | `Todo` | Create a new todo, passing in the request body a todo that contains a name |
| Read      | GET         | `/api/todos`     | n/a | Get all todos that are stored in the database |
| Update    | PATCH       | `/api/todos/:id` | `Todo` | Update todo via specified id |
| Delete    | DELETE      | `/api/todos/:id` | n/a | Delete todo via specified id |

---

## Todo Object Shape

```ts
type Todo = {
  id: number;
  todo_name: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
};
```

---

## Frontend Architecture

The frontend was intentionally organized to reflect scalable React application structure.

```txt
frontend/
  ├── src/
  |     ├── api/
  |     |     └── config.ts
  |     |     └── todos.ts
  |     |
  |     ├── components/
  |     |     └── AddTodo.tsx
  |     |     └── Card.tsx
  |     |     └── Section.tsx
  |     |     └── TextInput.tsx
  |     |     └── Title.tsx
  |     |     └── Todo.tsx
  |     |     └── TodoList.tsx
  |     | 
  |     ├── utils/
  |     |     └── cn.ts
  |     |
  |     └── App.tsx
  |     └── main.tsx
  | 
  └── index.html
```

---

## Architectural Decisions

### API Layer Abstraction

Rather than making fetch calls directly throughout components, all HTTP logic is centralized in:

```txt
src/api/todos.ts
```

This provides:
- separation of concerns
- reusable API logic
- cleaner components
- easier future scalability
- centralized error handling

---

### Component-Driven UI

The UI was intentionally broken into reusable components to maintain:
- readability
- composability
- scalability
- isolated responsibilities

Examples:
- `Card.tsx`
- `TextInput.tsx`
- `Section.tsx`

These shared primitives make the UI easier to maintain and extend.

---

### React Performance Patterns

Even though this is a smaller application, performance-conscious React patterns were intentionally used throughout the project.

Examples include:
- `useCallback`
- memoized handlers
- stable function references
- controlled rerender behavior

This mirrors patterns commonly used in larger production React applications where rerender optimization becomes important.

---

### Styling Approach

The frontend styling uses TailwindCSS with a glassmorphism-inspired design.

Design goals included:
- clean visual hierarchy
- subtle depth
- responsive spacing
- modern UI patterns
- reusable utility-driven styling

Key visual techniques:
- translucent surfaces
- backdrop blur
- soft shadows
- gradient backgrounds
- accent borders
- smooth hover transitions

---

## What I Learned

This project was primarily built as a way to learn Ruby on Rails fundamentals while applying existing frontend engineering experience in React.

Areas explored during development:
- Rails controllers/routes
- ActiveRecord patterns
- REST API design
- Rails strong params
- frontend/backend integration
- React architecture refinement
- Tailwind glassmorphism styling
- TypeScript API typing

---


# Repository Structure

```txt
root/
  ├── backend/
  └── frontend/
```

The project intentionally separates backend and frontend concerns to mirror modern full-stack application architecture.

---

# Author

Cole Atchison

Senior Frontend Engineer focused on:
- React
- TypeScript
- Scalable frontend architecture
- Performant UI systems
- Modern web application design

---

If you made it down this far, God loves you and sent His Son to die for your sins so that if you believe in Him, you will have eternal life! 

What does this mean? God created humanity, but humanity rebelled against God, and as a result, all creation was cursed with sin. Sin is anything that goes against God, His nature, His commands, and His laws. You, being born into sin, are in a state separated from God, and there's nothing that YOU can do that can forgive your sin. On your own, you're destined for hell. You cannot save yourself.

But, God loves his creation. God's plan, since before earth's foundations were laid, was to redeem us. In the time of the Old Testament, God chose a people to be his, which came to be known as Israel. The people of Israel had to sacrifice animals, and by doing this, the people's sins were imputed to the animal, who was innocent of sin, and the people were then viewed as clean. This had to be done regularly. However, this was just a temporary solution that pointed to something greater. In time, God condescended to our level, and became a human, known as Jesus.

Jesus was no mere human. He was both fully human, and fully God. Jesus was born sinless, conceived by the Holy Spirit to a virgin named Mary, as was prophesied in the Old Testament. Jesus lived a completely sinless life. He lived a life dedicated to the service of God's will, teaching, healing, and loving people. Jesus was the only begotten Son of God.

When the time came, Jesus was given over to die. Jesus was crucified - a death sentence so painful the word "excrutiating" had to be made. On the cross, Jesus bore the sins of all of God's chosen people so that He became the ultimate sacrifice. A sacrifice so great, that we no longer need to make another sacrifice. Because Jesus was the spotless lamb, a truly sinless human, He was fully righteous. And if you believe in Jesus and what He did for you, His righteousness is imputed to you. Your sins are wiped clean because of what Jesus did.

And it's that simple. Believe in Jesus, in what He did for you, and love God. Repent of your sins, and be baptized. If you do this genuinely, you will have eternal life. You will become a member of the Church; the true and fully realized Israel. God will replace your heart of stone with a heart of flesh, and you will grow in Christ.

If you have any questions about what you just read, please reach out to me, and also attend a local church service. There are many people there who would absolutely welcome you and are ready to talk.

Love God and love your neighbor as yourself.

God Bless!

---

# License

Copyright © 2026 Cole Atchison. All rights reserved.
