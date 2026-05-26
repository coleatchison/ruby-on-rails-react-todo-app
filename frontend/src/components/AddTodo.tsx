import { useCallback, useState } from "react";
import TodosApi, { type Todo } from "../api/todos";
import { Plus } from "lucide-react";
import Section from "./Section";
import TextInput from "./TextInput";

interface AddTodoProps {
  onAdd: (todo: Todo) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = useCallback(
    async (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();

      const response = await TodosApi.create(title);

      if (response) {
        onAdd(response);
        setTitle(() => "");
      }
    },
    [onAdd, title, setTitle],
  );

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTitle(() => e.target.value);
    },
    [setTitle],
  );

  return (
    <Section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full sm:flex-row sm:grow items-center max-w-4xl gap-4"
      >
        <TextInput
          value={title}
          onChange={handleTitleChange}
          placeholder="Add a new todo..."
        />
        <button
          type="submit"
          className="flex items-center gap-2 rounded-xl whitespace-nowrap bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 font-medium text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/30 active:scale-[0.98]"
        >
          Add Todo <Plus />
        </button>
      </form>
    </Section>
  );
}
