import { Box, Center, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SearchBox from "../../components/form/SearchBox";
import Header from "../../components/Header";
import ModalTaskDetail from "../../components/Modal/ModalTaskDetail";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface NotFoundProps {
  isTaskDetailOpen: boolean;
  onTaskDetailClose: () => void;
  selectedTask: Task;
  taskNotFound: string;
}

function NotFound({
  isTaskDetailOpen,
  onTaskDetailClose,
  selectedTask,
  taskNotFound,
}: NotFoundProps) {
  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectedTask}
      />
      <Box>
        <Header />
        <SearchBox />
        <Center mt="4" textAlign="center" display="flex" flexDirection="column">
          <Heading>Não encontramos resultados para:</Heading>
          <Text fontSize="xl" color="gray.300" fontWeight="bold">
            {taskNotFound}
          </Text>
          <Box
            mt="6"
            w={["80%", "40%"]}
            padding="6"
            boxShadow="base"
            bg="white"
          >
            <Stack>
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="20px"
                borderRadius="20px"
                w="80%"
              />
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="20px"
                borderRadius="20px"
                w="60%"
              />
            </Stack>
            <Stack mt="5">
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="15px"
                borderRadius="15px"
              />
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="15px"
                borderRadius="15px"
              />
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
}

export default NotFound;
