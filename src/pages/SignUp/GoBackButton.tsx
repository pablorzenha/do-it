import React from "react";
import { Center } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";

interface GoBackButtonProps {
  top: string[];
  left: string[];
}

function GoBackButton({ top, left }: GoBackButtonProps) {
  const navigate = useNavigate();
  return (
    <Center
      as="button"
      position="absolute"
      top={top}
      left={left}
      w={["60px", "80px", "60px", "80px"]}
      h="60px"
      backgroundColor="purple.500"
      fontSize="2xl"
      borderRadius="md"
      _hover={{ bg: "purple.600" }}
      onClick={() => navigate("/")}
    >
      <FaArrowLeft color={theme.colors.white} />
    </Center>
  );
}

export default GoBackButton;
