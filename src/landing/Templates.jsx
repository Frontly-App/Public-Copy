import { Header } from "./Header";
import React from "react";
// import { Template } from "../appManagement/Template";
// import { demoApps } from "../appManagement/Templates";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(261px, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(261px, 1fr));
  }
`;

const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroText = styled.div`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;

const HeroDescription = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: #6e7b96;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 10px;
`;

const AppTemplates = () => {
  return (
    <PageContainer>
      <Header />
      <Container>
        <div>
          <HeroText>App Templates</HeroText>
          <HeroDescription>
            Choose an app template to jumpstart your business
          </HeroDescription>
        </div>

        <Grid>
          {/* {demoApps.map((app) => (
            <Template
              data={app}
              onClick={() =>
                (window.location.href = `https://app.frontly.ai/signup?template=${app.key}`)
              }
            />
          ))} */}
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default AppTemplates;
