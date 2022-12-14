import React from "react";
import { Grid, Heading, Image, Text } from "@chakra-ui/react";
import LogoSecondary from "../../assets/logo-secondary.svg";

function LoginInfo() {
  return (
    <Grid
      w={["100%", "100%", "50%", "40%"]}
      paddingRight={["0px", "0px", "100px", "100px"]}
    >
      <Image
        src={LogoSecondary}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <Heading mt="4" as="h1">
        O jeito fácil, grátis
      </Heading>
      <Text w={["250px", "250px", "350px"]}>
        Flexível e atrativo de gerenciar
        <b> seus projetos em uma única plataforma</b>
      </Text>
    </Grid>
  );
}

export default LoginInfo;
