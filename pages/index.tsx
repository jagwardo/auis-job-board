import React from "react";

import { Container, Header, Footer, Cards, Meta, JobSearch, JobPanel } from "@components";

const Home: React.FC = () => {
  return (
    <Container>
      <Meta title="AUIS Job Search" />
      <Header children={[
        {name: 'find a job', url: '/'},
        {name: 'Company Review', url: '/company-review'},
        {name: 'about', url: '/about'}
        ]} />
      {/* <Main /> */}
      <JobSearch />
      <div className="grid lg:flex lg:px-10 my-8 gap-5">
        <JobPanel />
        <Cards className="lg-flex-2" />
      </div>
      <Footer is_loginScreen={false} />
    </Container>
  );
};

export default Home;
