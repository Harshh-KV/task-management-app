import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = ({ taskId, todoName, dueDate, description }) => {
    console.log(`New Item Added: ${todoName} Date: ${dueDate}`);
    const newTodoItems = [
      ...todoItems,
      { taskId, name: todoName, dueDate, description },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (taskId) => {
    const newTodoItems = todoItems.filter((item) => item.taskId !== taskId);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
