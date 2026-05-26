import { useState, useEffect, useCallback } from "react";
import TodosApi, { type Todo as TodoType } from "./api/todos";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Card from "./components/Card";
import Section from "./components/Section";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await TodosApi.get();

      if (response) {
        setTodos(() => response);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = useCallback(
    (todo: TodoType) => {
      setTodos((prevTodos) => [todo, ...prevTodos]);
    },
    [setTodos],
  );

  const handleDeleteTodo = useCallback(
    (id: number) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [setTodos],
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-cyan-100 px-6 py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <Section>
          <Card classes="flex-col w-fit mx-auto gap-6">
            <Title count={todos.length} />
            <AddTodo onAdd={handleAddTodo} />
            <TodoList todos={todos} onDelete={handleDeleteTodo} />
          </Card>
        </Section>
      </div>
    </main>
  );
}

export default App;
