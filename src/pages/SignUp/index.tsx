import { Flex, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/AuthContext";
import SignUpForm from "./SignUpForm";
import SignUpInfo from "./SignUpInfo";
import GoBackButton from "./GoBackButton";
import { api } from "../../services/api";
import ModalSuccess from "../../components/Modal/ModalSuccess";
import ModalError from "../../components/Modal/ModalError";
import { useNavigate } from "react-router-dom";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha")
    .oneOf([yup.ref("password")], "senhas estão diferentes"),
});

export interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();
  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const handleSignUp = ({ name, email, password }: SignUpData) => {
    setLoading(true);
    api
      .post("/register", { name, email, password })
      .then((response) => {
        console.log(response);
        setLoading(false);
        onModalSuccessOpen();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        onModalErrorOpen();
      });
  };

  return (
    <>
      <ModalSuccess
        buttonMessage="Ir para o login agora"
        message="Seu cadastro deu super certo, vamos lá"
        secondaryText="Você já pode começar criando suas listas de tarefas agora mesmo..."
        onClick={() => navigate("/")}
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
      />
      <ModalError isOpen={isModalErrorOpen} onClose={onModalErrorClose} />
      <Flex
        padding={["10px 15px", "10px 15px", "0px", "0px"]}
        alignItems="center"
        height={["auto", "auto", "100vh", "100vh"]}
        justifyContent="center"
        bgGradient={[
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
        ]}
        flexDirection={["row", "row", "column-reverse", "column-reverse"]}
        color="white"
      >
        <Flex
          w={["100%", "100%", "90%", "85%"]}
          justifyContent="center"
          flexDirection={["column-reverse", "column-reverse", "row", "row"]}
          alignItems="center"
        >
          <GoBackButton
            top={["30px", "30px", "90px", "90px"]}
            left={["80%", "80%", "10px", "25px"]}
          />
          <SignUpForm
            errors={errors}
            handleSignUp={handleSubmit(handleSignUp)}
            loading={loading}
            register={register}
          />
          <SignUpInfo />
        </Flex>
      </Flex>
    </>
  );
};
