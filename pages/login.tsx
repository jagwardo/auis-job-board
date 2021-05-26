import React from "react";

import { Container, Footer, Meta, LoginScreen } from "@components";

const Login: React.FC = () => {
  return (
    <Container>
      <Meta />
      <LoginScreen />
      <Footer is_loginScreen={true} />
    </Container>
  );
};

export default Login;