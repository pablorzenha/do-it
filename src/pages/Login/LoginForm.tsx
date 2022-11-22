import React from "react";
import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { Input } from "../../components/form/input";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  handleSignIn: () => void;
  loading: boolean;
  errors: Partial<any>;
  register: any;
}

function LoginForm({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginFormProps) {
  const navigate = useNavigate();

  return (
    <Grid
      as="form"
      mt={["4", "4", "8"]}
      w={["100%", "100%", "40%", "40%"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      onSubmit={handleSignIn}
    >
      <Heading size="lg"> Bem vindo de volta</Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%">
          <Input
            placeholder="Digite seu login"
            icon={FaEnvelope}
            label="Login"
            type="email"
            error={errors.email}
            {...register("email")}
          />
          {!errors.email && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: pablo@mail.com
            </Text>
          )}
        </Box>
        <Input
          placeholder="Digite sua senha"
          icon={FaLock}
          label="Senha"
          type="password"
          error={errors.password}
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
          bg="purple.800"
          w="100%"
          color="white"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "purple.900",
          }}
          type="submit"
        >
          Enviar
        </Button>
        <Text color="gray.400">Ainda não possui uma conta</Text>
        <Button
          bg="gray.100"
          w="100%"
          color="gray.300"
          h="60px"
          borderRadius="8px"
          onClick={() => navigate("/signup")}
          _hover={{
            background: "gray.200",
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
}

export default LoginForm;
