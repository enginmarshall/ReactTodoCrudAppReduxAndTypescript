import { useState } from "react";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { EditTodo } from "./components/EditTodo/EditTodo";
import { FilterTodo } from "./components/FilterTodo/FilterTodo";
import { TodoList } from "./components/TodoList/TodoList";

export interface TodoInterface {
  id: string;
  task: string;
  completed: boolean;
}

const App = () => {

  const { editTodo, setEditTodo } = useState<TodoInterface | null>(null);

  return (
    <main className="app">
      <div className="app__wrapper">
        <div className="app__header">
          <h1 className="app__title">

          </h1>
        </div>

        <div className="app__inputs-box">
          {editTodo?.id ? <EditTodo /> : <AddTodo />}
          <FilterTodo />
        </div>
        <TodoList />
      </div>
    </main>
  );
}

export default App;