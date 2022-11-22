import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/AuthContext";
import LoginInfo from "./LoginInfo";
import LoginForm from "./LoginForm";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("senha obrigatória"),
});

export interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    setLoading(true);
    signIn(data)
      .then((_) => {
        navigate("/dashboard");
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  };

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      height={["auto", "auto", "100vh", "100vh"]}
      justifyContent="center"
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "85%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <LoginInfo />
        <LoginForm
          errors={errors}
          handleSignIn={handleSubmit(handleSignIn)}
          loading={loading}
          register={register}
        />
      </Flex>
    </Flex>
  );
};
