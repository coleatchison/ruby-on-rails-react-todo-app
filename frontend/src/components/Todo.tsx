import { useCallback, useState } from "react";
import Card from "./Card";
import TodosApi, { type Todo } from "../api/todos";
import { Pencil, Trash2 } from "lucide-react";
import { cn } from "../utils/cn";
import TextInput from "./TextInput";

interface TodoProps extends Todo {
  onDelete: (id: number) => void;
}

export default function Todo({
  id,
  todo_name,
  completed: completedProp,
  onDelete,
}: TodoProps) {
  const [completed, setCompleted] = useState<boolean>(completedProp);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todoName, setTodoName] = useState<string>(todo_name);
  const [editedTitle, setEditedTitle] = useState<string>(todo_name);

  const handleCompleted = useCallback(async () => {
    const response = await TodosApi.update({ id, completed: !completed });

    if (response && response.completed === !completed) {
      setCompleted(() => response.completed);
    }
  }, [completed, id]);

  const handleDelete = useCallback(async () => {
    const response = await TodosApi.delete(id);

    if (!response) {
      return;
    }

    onDelete(id);
  }, [id, onDelete]);

  const toggleIsEditing = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, [setIsEditing]);

  const handleEditCancel = useCallback(() => {
    toggleIsEditing();
    setEditedTitle(() => todoName);
  }, [setEditedTitle, toggleIsEditing, todoName]);

  const handleUpdateTitle = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setEditedTitle(() => e.target.value);
    },
    [setEditedTitle],
  );

  const handleSave = useCallback(async () => {
    if (editedTitle.trim() === "") {
      return;
    }

    if (editedTitle === todoName) {
      setIsEditing(() => false);
      return;
    }

    const response = await TodosApi.update({ id, todo_name: editedTitle });

    if (response && response.todo_name === editedTitle) {
      setIsEditing(() => false);
      setTodoName(() => response.todo_name);
      setEditedTitle(() => response.todo_name);
    }
  }, [
    todoName,
    setTodoName,
    editedTitle,
    setEditedTitle,
    setIsEditing,
    id,
    todo_name,
  ]);

  return (
    <Card
      classes={cn(
        "relative overflow-hidden border-l-4 hover:-translate-y-0.5",
        completed ? "border-l-emerald-400" : "border-l-violet-400",
      )}
    >
      <div className="flex flex-col w-full sm:flex-row sm:grow items-center sm:justify-between gap-6">
        <div className="flex flex-1 w-full items-center gap-4">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCompleted}
            disabled={isEditing}
            className={cn(
              "min-h-5 min-w-5 cursor-pointer rounded-md border-gray-300 text-violet-500 focus:ring-violet-400",
              isEditing && "cursor-not-allowed opacity-50",
            )}
          />
          {!isEditing && (
            <h3
              className={cn(
                "text-lg font-medium text-gray-800",
                completed && "line-through text-gray-400",
              )}
            >
              {todoName}
            </h3>
          )}
          {isEditing && (
            <div className="relative flex flex-1 w-full">
              <TextInput
                value={editedTitle}
                isError={editedTitle.trim() === ""}
                onChange={handleUpdateTitle}
              />
              {editedTitle.trim() === "" && (
                <span className="absolute top-full text-red-500 text-sm">
                  Title cannot be empty
                </span>
              )}
            </div>
          )}
        </div>

        {!isEditing && (
          <div className="flex w-full sm:w-fit gap-2 justify-center">
            {!completed && (
              <Button
                onClick={toggleIsEditing}
                classes="bg-white/50 border-white/30 text-gray-700 hover:bg-violet-100 hover:text-violet-600"
              >
                <Pencil />
              </Button>
            )}
            <Button
              onClick={handleDelete}
              classes="text-red-500 hover:bg-red-100 hover:text-red-600"
            >
              <Trash2 />
            </Button>
          </div>
        )}
        {isEditing && (
          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2 font-medium text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:cursor-pointer"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-gray-600 transition-colors duration-200 hover:bg-white/40 hover:text-gray-800 hover:cursor-pointer"
              onClick={handleEditCancel}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}

const Button = ({
  children,
  onClick,
  classes,
}: {
  children: React.ReactNode;
  onClick: () => void;
  classes?: string;
}) => (
  <button
    type="button"
    className={cn(
      "flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 border border-white/30backdrop-blur-md transition-all duration-200 hover:cursor-pointer hover:scale-105",
      classes,
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
