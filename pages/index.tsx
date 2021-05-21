import React from "react";

import { Container, Header, Main, Footer, Cards, Meta } from "@components";
import { Panel } from "@components/panel";
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
      <div className="flex justify-between">
        <Panel />
        <Cards />
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
