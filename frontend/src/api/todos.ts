import { TODOS_URL } from "./config";

export interface Todo {
  id: number;
  todo_name: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

class TodosApi {
  async get(): Promise<Todo[]> {
    try {
      const response = await fetch(TODOS_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  }

  async create(todo_name: string): Promise<Todo> {
    try {
      const response = await fetch(TODOS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: { todo_name: todo_name, completed: false },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create todo");
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error;
    }
  }

  async update({
    id,
    todo_name,
    completed,
  }: {
    id: number;
    todo_name?: string;
    completed?: boolean;
  }): Promise<Todo> {
    try {
      const response = await fetch(`${TODOS_URL}${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: {
            ...(todo_name !== undefined && { todo_name }),
            ...(completed !== undefined && { completed }),
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update todo with id ${id}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error updating todo:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const response = await fetch(`${TODOS_URL}${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete todo with id ${id}`);
      }

      return true;
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  }
}

export default new TodosApi();
