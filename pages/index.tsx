import React from "react";

import { Container, Header, Main, Footer, Cards, Meta, Search, Panel } from "@components";

const Home: React.FC = () => {
  return (
    <Container>
      <Meta />
      <Header children={[
        {name: 'find a job', url: '/job-search'},
        {name: 'Company Review', url: '/company-review'},
        {name: 'about', url: '/about'}
        ]} />
      {/* <Main /> */}
      <Search />
      <div className="grid lg:flex lg:px-10 my-8 gap-5">
        <Panel />
        <Cards className="lg-flex-2" />
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
