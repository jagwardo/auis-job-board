import React from "react";

import { Container, Header, Main, Footer, Cards, Meta } from "@components";
import { Search } from "@components/filter";
const Home: React.FC = () => {
  return (
    <Container>
      <Meta />
      <Header children={[
        {name: 'find a job', url: '/job-search'},
        {name: 'Company Review', url: '/company-review'},
        {name: 'about', url: '/about'}
        ]} />
      <Main />
      <Search />
      <Cards />
      <Footer />
    </Container>
  );
};

export default Home;
