import React from "react";

import { Container, Header, Main, Footer, Cards, Meta } from "@components";
import { JobCard } from "@components/cards/job-card";
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
      <JobCard />
      <Footer />
    </Container>
  );
};

export default Home;
