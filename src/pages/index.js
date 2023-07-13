import "./styles.css";

import FAQ from "./landing/FAQ";
import FeatureBlocks from "./landing/FeatureBlocks";
import React from "react";
import arrowRight from "../images/arrow-right.svg";
import { colors } from "../theme";
import highFive from "../images/high-five.png";
import play from "../images/play.svg";
import styled from "styled-components";

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
    display: none;
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
  width: 560px;
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
  max-width: 500px;
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
  background: #2f6ad0;
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

  // useEffect(() => {
  //   if (isFrontlyAdmin && isMixpanelInitialized) {
  //     mixpanel.track("Landing Page View");
  //   }
  // }, [isMixpanelInitialized]);

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
          onClick={() =>
            (window.location.href = "https://app.frontly.ai/app_templates")
          }
        >
          Templates
        </HeaderLink>
        <HeaderLink onClick={() => navigate("pricing")}>Pricing</HeaderLink>
        <HeaderLink onClick={() => window.open("https://help.frontly.ai")}>
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
        <HeroText>Build custom software, fast.</HeroText>
        <HeroDescription>
          Create custom dashboards and internal tools for your business starting
          with a single text prompt, and unlimited customization.
        </HeroDescription>
        <HeroCTARow>
          <CTAButton
            large
            onClick={() => {
              window.location.href = `https://app.frontly.ai/signup`;
            }}
          >
            <div>Get started free</div>
            <Icon
              src={arrowRight}
              style={{ margin: "0 0 0 5px", cursor: "pointer" }}
            />
          </CTAButton>
          <WatchVideoContainer
            onClick={() => {
              // mixpanel.track("Landing Page Video Click");
              window.open("https://www.youtube.com/watch?v=v8nRyUTq2AQ");
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
      <HeroImage background="https://res.cloudinary.com/frontly/image/upload/v1673419641/frontly-shot-new_wid2t7.png">
        <div>
          <HeroPlayButton
            onClick={() => {
              // mixpanel.track("Landing Page Video Click");
              window.open("https://www.youtube.com/watch?v=v8nRyUTq2AQ");
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
        "Frontly is a powerful software platform enabling users without any coding experience to build custom internal business tools that enable their team and clients to securely view and manage data without the need for a developer.",
    },
    {
      question: "How does Frontly build apps with no code?",
      answer:
        "We code so you don't have to. Frontly's team of experienced software developers have invested thousands of hours coding a platform that allows users to build apps without needing to understand or write software code. The 'No Code' movement is changing the way business users empower their teams and clients with custom software, without hiring expensive developers.",
    },
    {
      question: "What kind of tools can be built with Frontly?",
      answer:
        "Frontly is optimized for building client portals and internal tools that allow seamless workflows for your team and clients. For example, a dashboard where your customers can login to edit their work orders, or an inventory management dashboard for your internal team.",
    },
    {
      question: "Why use Frontly compared to off-the-shelf software?",
      answer:
        "Off-the-shelf software solves specific, common problems, but allows little customization. With Frontly, you can create completely custom apps enabling your clients and team to view and manage important data with a workflow that fits your unique use-case perfectly.",
    },
    {
      question: "Why use Frontly instead of hiring a developer?",
      answer:
        "App development is expensive and time consuming if you have development resources at your disposal, and next to impossible if you don't. Frontly apps work perfectly for use cases when you can't justify custom development costs, you need something done quickly, or you want control over what you're building.",
    },
    {
      question: "How quickly can I launch an app?",
      answer:
        "With our generative AI technology, you can create a basic app in about one minute, and continue refining it over time as you learn more about the software and your needs. Our team is happy to chat about your project to help you make the most efficient plans.",
    },
  ];

  return (
    <Container>
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
                Build custom software <CTAColor>in minutes</CTAColor>
              </CTAText>
              <Row style={{ alignItems: "center", gap: "30px" }}>
                <CTAButton
                  onClick={() => {
                    window.location.href = `https://app.frontly.ai/signup`;
                  }}
                  large
                >
                  Get started free
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
