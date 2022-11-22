import React from "react";
import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

import { Input } from "../../components/form/input";

interface SignUpData {
  handleSignUp: () => void;
  loading: boolean;
  errors: Partial<any>;
  register: any;
}

function SignUpForm({ handleSignUp, errors, register, loading }: SignUpData) {
  return (
    <Grid
      as="form"
      mt={["4", "4", "8"]}
      w={["100%", "100%", "40%", "40%"]}
      padding="30px 20px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      onSubmit={handleSignUp}
    >
      <Heading size="lg"> Crie sua conta</Heading>
      <VStack mt="6" spacing="5">
        <Input
          placeholder="Digite seu nome"
          icon={FaUser}
          label="Nome"
          error={errors.name}
          {...register("name")}
        />
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
        <Input
          placeholder="Confirme sua senha"
          icon={FaLock}
          label="Confirmação de senha"
          type="password"
          error={errors.confirm_password}
          {...register("confirm_password")}
        />
      </VStack>

      <Button
        mt="4"
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
        Finalizar cadastro
      </Button>
    </Grid>
  );
}

export default SignUpForm;
