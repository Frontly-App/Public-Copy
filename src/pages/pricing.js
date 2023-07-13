import FAQ from "../landing/FAQ";
import { Header } from "../landing/Header";
import React from "react";
import check from "../images/check.svg";
import { colors } from "../theme";
import mixpanel from "mixpanel-browser";
import styled from "styled-components";
import { useState } from "react";

mixpanel.init("24b88f3ea98cee756872d3abb2d7da40", {
  debug: false,
  persistence: "localStorage",
});
mixpanel.track("Pricing Page View");

const Button = styled.div`
  background: ${colors.primary};
  padding: 12px;
  color: white;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    filter: brightness(90%);
  }
`;

const IconWrapper = styled.div`
  background: ${colors.primary};
  border-radius: 12px;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  height: 20px;
`;

const Text = styled.div`
  font-size: 14px;
  color: ${colors.default};
`;

const Row = styled.div`
  display: flex;
`;

const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FrequencyToggleContainer = styled.div`
  display: flex;
  height: 38px;
  border-radius: 19px;
  border: 1px solid ${colors.grey2};
  margin: 40px 0 20px 0;
`;

const FrequencyToggleOption = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 0 20px 0 20px;
  height: 100%;
  border-radius: 19px;
  display: flex;
  align-items: center;
  background: ${(p) => (p.active ? colors.primary : "transparent")};
  color: ${(p) => (p.active ? "white" : colors.grey4)};
  cursor: pointer;
  margin-bottom: 20px;
`;

const PlansContainer = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const PlanContainer = styled.div`
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.15);
  padding: 24px;
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const ExtrasContainer = styled.div`
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.15);
  padding: 24px;
  border-radius: 8px;
  display: flex;
  width: 940px;
  margin-top: 30px;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const FAQContainer = styled.div`
  width: 940px;
  margin-top: 50px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 20px 0 20px 0;
`;

const Name = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: ${colors.primary};
`;

const Price = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const PriceFrequency = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #6b7b99;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 25px;
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FeatureText = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

const PopularText = styled.div`
  display: flex;
  background: #eaf0fa;
  border-radius: 8px;
  padding: 8px 5px 8px 5px;
  color: #5988d9;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
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
  margin-bottom: 20px;
  margin-top: 10px;
`;

const free = {
  name: "Setup",
  key: null,
  description: "Set up your app for free without publishing",
  price: "Free",
  includesText: "Setup includes:",
  editors: 1,
  apps: 1,
  users: 1,
  ai_tokens: 10,
  features: ["Build Without Publishing", "No Time Limit"],
};

const basic = {
  name: "Basic",
  key: "basic",
  description: "For getting started with custom tooling",
  price: 19,
  annualPrice: 179,
  includesText: "Basic includes:",
  apps: 1,
  editors: 1,
  users: 5,
  ai_tokens: 100,
  features: [
    "1 Published App",
    "1 Editor",
    "5 Users",
    "100 AI Tokens",
    "Custom Domain & Branding",
  ],
};

const growth = {
  name: "Growth",
  key: "growth",
  description: "For businesses scaling their operations",
  price: 99,
  annualPrice: 699,
  includesText: "Everything in Basic, plus:",
  feature: true,
  apps: 5,
  editors: 5,
  users: 100,
  ai_tokens: 500,
  features: [
    "5 Published Apps",
    "5 Editors",
    "100 Users",
    "500 AI Tokens",
    "Custom Domain & Branding",
    "Priority Support",
  ],
};

const PlanExtras = () => (
  <ExtrasContainer>
    <Name>Add-ons</Name>
    <div>
      <b>Editors:</b> $10/editor/month
    </div>
    <div>
      <b>Users:</b> $10/100 users/month
    </div>
    <div>
      <b>Apps:</b> $10/app/month
    </div>
    <div>
      <Row style={{ alignItems: "center", gap: "5px" }}>
        <b>Personalized Onboarding:</b>
        <Text
          onClick={() =>
            (window.location.href = "mailto:support@frontlyapp.com")
          }
          style={{ color: colors.primary, fontWeight: 500, cursor: "pointer" }}
        >
          Contact Us
        </Text>
      </Row>
    </div>
  </ExtrasContainer>
);

const PlansFAQ = () => {
  const questions = [
    {
      question: "What does the free Setup plan include?",
      answer:
        "The free set up plan includes full access to all of Frontly's features with no time limit on the creation of the portal. Once you are ready to Publish your app (make it live for customers), you will need to select one of our paid plans, starting at $49/month.",
    },
    {
      question: "What is an AI Token?",
      answer:
        "AI Tokens are used to generate pages and spreadsheets based on your descriptions. Each individual usage of AI Generation consumes 2 tokens.",
    },
    {
      question: "What is an Editor?",
      answer:
        "An Editor has full access to your app admin. They can make create, modify and delete pages, mange users, and access all data.",
    },
    {
      question: "What is a User?",
      answer:
        "A User is a client, customer, or partner who can login to your portal with an email and password. This is an end-user, so they do not have access to your admin or any editing capabilities other than what you've built into your portal.",
    },
    {
      question: "What is an App?",
      answer:
        "An App in Frontly is a distinct published project with its own pages, users, navigation and domain name. Multiple apps can be used if you need to launch multiple separate projects under one company account.",
    },
    {
      question: "Can I use my logo, brand colors and web address?",
      answer:
        "Yes! Your Frontly portal can be fully branded with your colors and logo and custom website domain name. You can setup your site at a primary domain like yourapp.com, or at a subdomain like clients.yourapp.com.",
    },
  ];

  return (
    <FAQContainer>
      <Text
        data={{
          text: "Frequently Asked Questions",
          fontStyle: "headingXl",
          margin: "0 0 20px 0",
        }}
      />
      <FAQ data={{ questions, lightWithBorder: true }} />
    </FAQContainer>
  );
};

const Pricing = () => {
  const plans = [free, basic, growth].map((p) => ({
    ...p,
    onClick: () => (window.location.href = "https://app.frontly.ai/signup"),
    buttonText: "Start for free",
  }));

  const [frequency, setFrequency] = useState("monthly");

  return (
    <PageContainer>
      <Header />
      <Container>
        <div>
          <HeroText>Pricing</HeroText>
          <HeroDescription>
            Plans for every stage of your business
          </HeroDescription>
        </div>
        <Plans
          plans={plans}
          frequency={frequency}
          setFrequency={setFrequency}
        />
        <PlanExtras />
        <PlansFAQ />
      </Container>
    </PageContainer>
  );
};

export default Pricing;

const Plans = ({ plans, frequency, setFrequency }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FrequencyToggleContainer>
        <FrequencyToggleOption
          active={frequency === "monthly"}
          onClick={() => setFrequency("monthly")}
        >
          Monthly
        </FrequencyToggleOption>
        <FrequencyToggleOption
          active={frequency === "annual"}
          onClick={() => setFrequency("annual")}
        >
          Annually
        </FrequencyToggleOption>
      </FrequencyToggleContainer>
      <PlansContainer>
        {plans.map((plan, i) => (
          <PlanContainer key={i}>
            <div>
              <NameRow>
                <Name>{plan.name}</Name>
                {plan.feature && <PopularText>BEST DEAL</PopularText>}
              </NameRow>
              <Description>{plan.description}</Description>

              {plan.price === "Free" ? (
                <Price>Free</Price>
              ) : (
                <PriceRow>
                  <Price>
                    ${frequency === "monthly" ? plan.price : plan.annualPrice}
                  </Price>
                  <PriceFrequency>
                    {frequency === "monthly" ? "/month" : "/year"}
                  </PriceFrequency>
                </PriceRow>
              )}

              {/* <IncludesText>{plan.includesText}</IncludesText> */}
              <FeaturesContainer>
                {plan.features.map((feature, fi) => (
                  <FeatureRow key={fi}>
                    <IconWrapper>
                      <Icon src={check} />
                    </IconWrapper>
                    <FeatureText>{feature}</FeatureText>
                  </FeatureRow>
                ))}
              </FeaturesContainer>
            </div>

            <Button onClick={plan.onClick}>{plan.buttonText}</Button>
          </PlanContainer>
        ))}
      </PlansContainer>
    </div>
  );
};
