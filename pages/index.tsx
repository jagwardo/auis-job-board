import React from "react";

import { Container, Header, Main, Footer, Cards, Meta } from "@components";

const Home: React.FC = () => {
  return (
    <Container>
      <Meta />
      <Header />
      <Main />
      <Cards />
      <Footer />
    </Container>
  );
};

export default Home;
