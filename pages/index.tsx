import React from "react";

import { Container, Header, Main, Footer, Cards, Meta } from "@components";

const Home: React.FC = () => {
  return (
    <Container>
      <Meta />
      <Header children={[
        {name: 'career opportunities', url: '/careers'},
        {name: 'partners', url: '/partners'},
        {name: 'about', url: '/about'}
        ]} />
      <Main />
      <Cards />
      <Footer />
    </Container>
  );
};

export default Home;
