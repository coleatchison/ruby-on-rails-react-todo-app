import { useMemo } from "react";
import { type Todo as TodoType } from "../api/todos";
import Section from "./Section";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodoType[];
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onDelete }: TodoListProps) {
  const list = useMemo(
    () =>
      todos.map((todo) => (
        <Todo key={todo.id} {...todo} onDelete={onDelete} />
      )),
    [todos, onDelete],
  );

  return (
    <Section>
      <div className="flex grow flex-col gap-4">
        {list.length > 0 ? (
          list
        ) : (
          <div className="flex grow flex-col items-center gap-4">
            <p className="text-gray-500">No todos to display.</p>
          </div>
        )}
      </div>
    </Section>
  );
}
