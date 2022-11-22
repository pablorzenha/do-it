import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaClipboard } from "react-icons/fa";
import Header from "../../components/Header";
import ModalCreateTask from "../../components/Modal/ModalCreateTask";

function FirstTask() {
  const {
    isOpen: isCreateTaskOpen,
    onClose: onCreateTaskClose,
    onOpen: onCreateTaskOpen,
  } = useDisclosure();
  return (
    <>
      <ModalCreateTask isOpen={isCreateTaskOpen} onClose={onCreateTaskClose} />
      <Header />
      <Box
        mt="4"
        w="90vw"
        paddingY="16"
        ml="5vw"
        justifyContent="center"
        textAlign="center"
        borderWidth="2px"
        borderColor="gray.200"
        borderStyle="dashed"
      >
        <Center fontSize="5xl">
          <FaClipboard color="#bdbdbd" />
        </Center>
        <Heading as="h1" mt="4" fontSize="2xl">
          Vamos criar sua primeira tarefa
        </Heading>
        <Text mt="6">
          Insira sua meta e mostra a você mesmo <br />
          sua capacidade em cumprir suas atividades
        </Text>
        <Button
          padding="6"
          mt="6"
          bgColor="purple.800"
          color="white"
          _hover={{ bg: "purple.900" }}
          onClick={onCreateTaskOpen}
        >
          Criar sua primeira tarefa
        </Button>
      </Box>
    </>
  );
}

export default FirstTask;
