import React from "react";

import { Container, Header, Footer, Cards, Meta, CompanySearch } from "@components";
import { CompanyList } from "@components/cards/company-list";

const Home: React.FC = () => {
  return (
    <Container>
      <Meta title="Company Review" />
      <Header children={[
        {name: 'find a job', url: '/'},
        {name: 'Company Review', url: '/company-review'},
        {name: 'about', url: '/about'}
        ]} />
      <CompanySearch />
      <div className="grid lg:flex lg:px-10 my-8 gap-5">
        <CompanyList className="lg-flex-2" />
      </div>
      <Footer is_loginScreen={false} />
    </Container>
  );
};

export default Home;
