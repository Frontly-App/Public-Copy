import "./styles.css";

import FAQ from "../landing/FAQ";
import FeatureBlocks from "../landing/FeatureBlocks";
import Helmet from "react-helmet";
import React from "react";
import arrowRight from "../images/arrow-right.svg";
import { colors } from "../theme";
import highFive from "../images/high-five.png";
import mixpanel from "mixpanel-browser";
import play from "../images/play.svg";
import styled from "styled-components";

mixpanel.init("24b88f3ea98cee756872d3abb2d7da40", {
  debug: false,
  persistence: "localStorage",
});
mixpanel.track("Landing Page View");

const Text = styled.div`
  font-size: 14px;
  color: ${colors.default};
`;

const Row = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  background: white;
`;

const Logo = styled.img`
  height: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLink = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  @media (max-width: 1000px) {
    ${(p) => p.hideMobile && "display: none;"}
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 30px auto 30px auto;
    align-items: center;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
  margin: 80px 0px 80px 0px;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0px;
    margin: 30px 0px 30px 0px;
  }
`;

const HeroImage = styled.div`
  background-image: url(${(p) => p.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  width: 600px;
  @media (max-width: 1000px) {
    height: 220px;
    width: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RequestDemoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const WatchVideoContainer = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const WatchVideoPlayButton = styled.div`
  background: ${colors.primary};
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HeroPlayButton = styled.div`
  background: ${colors.primary};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 400ms;
  cursor: pointer;
  border: 6px solid #d5e1f6;
  &:hover {
    width: 66px;
    height: 66px;
  }
`;

const HeroText = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: white;
  width: 480px;
  @media (max-width: 1000px) {
    font-size: 30px;
    text-align: center;
    width: 100%;
  }
`;

const HeroDescription = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: #939fb8;
  width: 530px;
  @media (max-width: 1000px) {
    font-size: 16px;
    text-align: center;
    width: 100%;
  }
`;

const FaqHeader = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #20262f;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 1000px) {
    font-size: 30px;
    text-align: center;
  }
`;

const CTASection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px 40px 0px;
  gap: 100px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 32px;
  }
`;

const CTATextHeader = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: #2f6ad0;
  @media (max-width: 1000px) {
    font-size: 20px;
    text-align: center;
  }
`;

const CTAText = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: white;
  margin: 5px 0 20px 0;
  max-width: 550px;
  @media (max-width: 1000px) {
    font-size: 28px;
    text-align: center;
  }
`;

const CTAImage = styled.img`
  height: 280px;
  @media (max-width: 1000px) {
    height: 180px;
  }
`;

const CTAColor = styled.span`
  color: #2f6ad0;
`;

const CTAButton = styled.div`
  background: #425cbd;
  color: white;
  padding: 12px;
  font-weight: 500;
  font-size: 15px;
  width: fit-content;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${(p) =>
    p.white &&
    `
    background: white;
    color: #2f6ad0;
  `}

  @media (max-width: 1000px) {
    padding: 12px;
    font-size: 14px;
  }

  ${(p) =>
    p.large &&
    `
    padding: 16px;
    font-weight: 500;
    font-size: 18px;

    @media (max-width: 1000px) {
      padding: 12px;
      font-size: 16px;
    }
    
  `}

  transition: 250ms;
  &:hover {
    background: #2356ae;
    color: white;
  }

  @media (max-width: 1000px) {
    ${(p) => p.hideMobile && "display: none;"}
  }
`;

const HeroCTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  margin: 10px 0 0 0;
`;

const CTATextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (max-width: 1000px) {
    align-items: center;
    max-width: 100%;
  }
`;

const BlueContent = styled.div`
  background: #14213d;
  width: 100%;
  padding-top: 10px;
`;

const Icon = styled.img`
  height: 30px;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 1100px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 16px;
  }
`;

const FaqContent = styled(Content)`
  margin-bottom: 50px;
  margin-top: 80px;
  @media (max-width: 1000px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

const FeatureBlocksContent = styled(Content)`
  margin-top: 50px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 30px 15px 30px 15px;
  }
`;

const Landing = () => {
  const navigate = (route) =>
    (window.location.href = `https://www.frontly.ai/${route}`);

  const header = (
    <HeaderContainer>
      <HeaderLeft>
        <Logo
          alt="Frontly Logo"
          src={
            "https://res.cloudinary.com/frontly/image/upload/v1686583732/admin/frontly_white_obpift.svg"
          }
        />
      </HeaderLeft>
      <HeaderRight>
        <HeaderLink
          hideMobile
          onClick={() =>
            (window.location.href = "https://app.frontly.ai/app_templates")
          }
        >
          Templates
        </HeaderLink>
        <HeaderLink hideMobile onClick={() => navigate("pricing")}>
          Pricing
        </HeaderLink>
        <HeaderLink
          hideMobile
          onClick={() => window.open("https://help.frontly.ai")}
        >
          Help Center
        </HeaderLink>
        <HeaderLink
          primary
          onClick={() => {
            // mixpanel.track("Login Button Click");
            window.location.href = `https://app.frontly.ai/login`;
          }}
        >
          Login
        </HeaderLink>
        <CTAButton
          hideMobile
          onClick={() => {
            // mixpanel.track("Signup Button Click");
            window.location.href = `https://app.frontly.ai/signup`;
          }}
        >
          Get started free
        </CTAButton>
      </HeaderRight>
    </HeaderContainer>
  );

  const hero = (
    <HeroContainer>
      <HeroContent>
        <HeroText>Supercharge your spreadsheets</HeroText>
        <HeroDescription>
          Turn your Google Sheets into custom analytics dashboards and internal
          business tools using AI.
        </HeroDescription>
        <HeroCTARow>
          <CTAButton
            large
            onClick={() => {
              window.location.href = `https://app.frontly.ai/signup`;
            }}
          >
            <div>Start Free</div>
            <Icon
              src={arrowRight}
              style={{ margin: "0 0 0 5px", cursor: "pointer" }}
            />
          </CTAButton>
          <WatchVideoContainer
            onClick={() => {
              // mixpanel.track("Landing Page Video Click");
              window.open("https://www.youtube.com/watch?v=IYBJOXenAs0");
            }}
          >
            <WatchVideoPlayButton>
              <Icon
                src={play}
                style={{
                  height: "20px",
                  margin: "0 0 0 3px",
                  cursor: "pointer",
                }}
              />
            </WatchVideoPlayButton>
            <div>
              <Text
                style={{ color: "white", fontSize: "16px", fontWeight: 500 }}
              >
                Watch demo
              </Text>
              <Text
                style={{
                  color: colors.grey3,
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                5 min
              </Text>
            </div>
          </WatchVideoContainer>
        </HeroCTARow>
      </HeroContent>
      <HeroImage background="https://res.cloudinary.com/frontly/image/upload/h_500/v1673419641/frontly-shot-new_wid2t7.png">
        <div>
          <HeroPlayButton
            onClick={() => {
              // mixpanel.track("Landing Page Video Click");
              window.open("https://www.youtube.com/watch?v=IYBJOXenAs0");
            }}
          >
            <Icon
              src={play}
              style={{ margin: "0 0 0 1px", cursor: "pointer" }}
            />
          </HeroPlayButton>
        </div>
      </HeroImage>
    </HeroContainer>
  );

  const questions = [
    {
      question: "What exactly is Frontly?",
      answer:
        "Frontly empowers business owners to turn their spreadsheets into custom analytics dashboards and internal business tools using the power of AI.",
    },
    {
      question: "Who is Frontly for?",
      answer:
        "Frontly is for business owners who want to improve access to valuable insights based on their spreadsheet data ",
    },
    {
      question: "What kind of tools can be built with Frontly?",
      answer:
        "Frontly is designed for building analytics dashboards and client login portals, allowing seamless workflows for your team and clients. For example, an analytics dashboard for your team to track key metrics from your spreadsheet data, or a dashboard where your customers can login to edit their work orders.",
    },
    {
      question:
        "Why use Frontly instead of custom-coding or hiring a developer?",
      answer:
        "Custom app development isn't suitable for most small businesses. Frontly delivers the same value of custom-coding an internal dashboard, but at just a fraction of the cost and time.",
    },
    {
      question: "How much time does it take?",
      answer:
        "With our generative AI technology, you can create a basic dashboard in about one minute, and continue refining it over time as you learn more about the software and your needs. Our team is happy to chat about your project to help you make the most efficient plans.",
    },
  ];

  return (
    <Container>
      <Helmet>
        <title>Frontly - Turn spreadsheets into business tools</title>
        <meta
          name="title"
          content="Frontly - Turn spreadsheets into business tools"
        />
        <meta
          name="description"
          content="Turn your Google Sheets into modern dashboards and internal business tools in minutes."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frontly.ai/" />
        <meta
          property="og:title"
          content="Frontly - Turn spreadsheets into business tools"
        />
        <meta
          property="og:description"
          content="Turn your Google Sheets into modern dashboards and internal business tools in minutes."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/frontly/image/upload/v1690685949/frontly-meta_xzukoh.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://frontly.ai/" />
        <meta
          property="twitter:title"
          content="Frontly - Turn spreadsheets into business tools"
        />
        <meta
          property="twitter:description"
          content="Turn your Google Sheets into modern dashboards and internal business tools in minutes."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/frontly/image/upload/v1690685949/frontly-meta_xzukoh.png"
        />
      </Helmet>
      <BlueContent>
        <Content>
          {header}
          {hero}
        </Content>
      </BlueContent>

      <FeatureBlocksContent>
        <FeatureBlocks />
      </FeatureBlocksContent>

      <FaqContent id="faq">
        <FaqHeader>Frequently Asked Questions</FaqHeader>
        <FAQ data={{ questions }} />
      </FaqContent>

      <BlueContent>
        <Content>
          <CTASection>
            <CTATextContainer>
              <CTATextHeader>Ready to try?</CTATextHeader>
              <CTAText>
                Build custom dashboards <CTAColor>in minutes</CTAColor>
              </CTAText>
              <Row style={{ alignItems: "center", gap: "30px" }}>
                <CTAButton
                  onClick={() => {
                    window.location.href = `https://app.frontly.ai/signup`;
                  }}
                  large
                >
                  Start Free
                </CTAButton>

                <RequestDemoRow
                  onClick={() =>
                    (window.location.href = "mailto:support@frontlyapp.com")
                  }
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    Contact our team
                  </Text>

                  <Icon
                    src={arrowRight}
                    style={{ margin: "0 0 0 5px", cursor: "pointer" }}
                  />
                </RequestDemoRow>
              </Row>
            </CTATextContainer>
            <CTAImage src={highFive} />
          </CTASection>
        </Content>
      </BlueContent>
    </Container>
  );
};

export default Landing;
