import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import tasks from "./components/Task";
import TaskTotal from "./components/TaskTotal";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="app">
      <div className="task-container">
        <Header />
        {/* <TaskForm /> */}
        <TaskTotal tasks={tasks} completedTasks={completedTasks} />
      <TaskList />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
