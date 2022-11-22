import React from "react";
import { Center, Flex, Heading, Image } from "@chakra-ui/react";
import Logo from "../../assets/Icon.svg";
import Menu from "./Menu";
import { useDisclosure } from "@chakra-ui/core";
import { FaTh } from "react-icons/fa";
import { theme } from "../../styles/theme";

function Header() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <Flex
      h="80px"
      borderBottom="1px"
      borderBottomColor="f5f5f5"
      paddingX="8"
      paddingY="2"
    >
      <Flex align="center">
        <Image src={Logo} />
        <Heading ml="4" size="lg">
          Dashboard
        </Heading>
      </Flex>
      <Center ml="auto" onClick={onToggle} as="button" fontSize="2rem">
        <FaTh color={theme.colors.gray[300]} />
      </Center>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Header;
