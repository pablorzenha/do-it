import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/Card";
import SearchBox from "../../components/form/SearchBox";
import Header from "../../components/Header";
import { CardSkeleton } from "../../components/skeleton/CardSkeleton";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TasksListsProsps {
  loading: boolean;
  tasks: Task[];
  handleClick: (task: Task) => void;
}

function TasksLists({ loading, tasks, handleClick }: TasksListsProsps) {
  return (
    <Box>
      <Header />
      <SearchBox />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(420px,1fr))"
        gap={10}
        paddingX="8"
        mt="8"
      >
        {loading ? (
          <CardSkeleton repeatCount={6} />
        ) : (
          tasks.map((task) => (
            <Card onClick={handleClick} key={task.title} task={task} />
          ))
        )}
      </Grid>
    </Box>
  );
}

export default TasksLists;
