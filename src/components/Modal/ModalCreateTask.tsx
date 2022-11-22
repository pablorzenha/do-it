import React from "react";
import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaClipboard } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { Input } from "../form/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextArea } from "../form/TextArea";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";
import { create } from "yup/lib/array";

interface ModalCreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
}
interface TaskData {
  title: string;
  description: string;
}

const createTaskSchema = yup.object().shape({
  title: yup.string().required("Campo Obrigatório"),
  description: yup.string().required(),
});

function ModalCreateTask({ isOpen, onClose }: ModalCreateTaskProps) {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TaskData>({
    resolver: yupResolver(createTaskSchema),
  });

  const { user, accessToken } = useAuth();

  const { createTask } = useTasks();

  function handleCreateTask(data: TaskData) {
    const newData = { ...data, userId: user.id, completed: false };
    createTask(newData, accessToken).then((res) => onClose());
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleCreateTask)}
        padding="2"
        bg="white"
        color="gray.800"
      >
        <ModalHeader display="flex">
          <Center bg="purple.600" w="30px" h="30px" borderRadius="5px">
            <FaClipboard color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            Adicionar
          </Text>
        </ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody textAlign="center">
          <VStack spacing="5">
            <Input
              label="title"
              error={errors.title}
              {...register("title")}
              placeholder="digite um titulo"
            />
            <TextArea
              label="decrição"
              error={errors.description}
              {...register("description")}
              placeholder="digite um descrição"
            />
          </VStack>
        </ModalBody>
        <ModalFooter flexDirection="column">
          <Button
            type="submit"
            bg="purple.500"
            color="white"
            w="100%"
            h="60px"
            _hover={{ bg: "puprle.600" }}
          >
            Adicionar Tarefa
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalCreateTask;
