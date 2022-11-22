import react, { useEffect, useState } from "react";
import { useTasks } from "../../contexts/TasksContext";
import { useAuth } from "../../contexts/AuthContext";
import { useDisclosure } from "@chakra-ui/core";
import ModalTaskDetail from "../../components/Modal/ModalTaskDetail";
import TasksLists from "./TasksLists";
import FirstTask from "./FirstTask";
import NotFound from "./NotFound";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const { user, accessToken } = useAuth();
  const { tasks, loadTasks, notFound, taskNotFound } = useTasks();

  const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

  const {
    isOpen: isTaskDetailOpen,
    onClose: onTaskDetailClose,
    onOpen: onTaskDetailOpen,
  } = useDisclosure();

  const handleClick = (task: Task) => {
    setSelectedTask(task);
    onTaskDetailOpen();
  };
  useEffect(() => {
    loadTasks(user.id, accessToken).then((res) => setLoading(false));
  }, []);

  if (notFound) {
    return (
      <NotFound
        isTaskDetailOpen={isTaskDetailOpen}
        onTaskDetailClose={onTaskDetailClose}
        selectedTask={selectedTask}
        taskNotFound={taskNotFound}
      />
    );
  }
  console.log(loading, tasks.length);
  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectedTask}
      />
      {!loading && !tasks.length ? (
        <FirstTask />
      ) : (
        <TasksLists loading={loading} tasks={tasks} handleClick={handleClick} />
      )}
    </>
  );
}

export default Dashboard;
