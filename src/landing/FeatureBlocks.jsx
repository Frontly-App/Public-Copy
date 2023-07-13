import React from "react";
import check from "../images/check.svg";
import { colors } from "../theme";
import { get } from "lodash";
import styled from "styled-components";

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
  height: 16px;
`;

const BlocksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

const FeatureBlockContainer = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.reverse ? "row" : "row-reverse")};
  justify-content: space-between;
  gap: 50px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 0px;
  }
`;

const FeatureBlockImageContainer = styled.div`
  height: ${(p) => p.height || "320px"};
  width: 430px;
  background: #f3f5f7;
  border-radius: 10px;
  @media (max-width: 1000px) {
    height: 200px;
    width: 100%;
    margin-top: 30px;
  }
`;

const FeatureBlockImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  padding: 32px;
  @media (max-width: 1000px) {
    padding: 20px;
  }
`;

const FeatureBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  width: 460px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const FeatureBlockTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: #20262f;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;

const FeatureBlockDescription = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #20262f;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BenefitRow = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const BenefitText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #20262f;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const blocks = [
  {
    reverse: false,
    url: "https://res.cloudinary.com/frontly/image/upload/h_500/v1679800949/spreadsheet-icons_eseqsz.png",
    title: "Turn your spreadsheets into business apps",
    height: "280px",
    description:
      "Frontly turns your regular spreadsheet into a secure, self-serve client portal without the need for any coding or developers.",
    benefits: [
      "Google Sheets & Excel Spreadsheets",
      "Review data in a format you're familiar with",
      "Keep your spreadsheet as the single source of truth",
    ],
  },
  {
    reverse: true,
    url: "https://res.cloudinary.com/frontly/image/upload/h_500/v1678055979/blocks-graphic_vrgmop.png",
    title: "Powerful building blocks with no code required",
    description:
      "With our pre-built blocks such as Tables, Lists, Forms, and Charts, you can effortlessly create a client portal in just a few minutes without any code. All you have to do is pick a block, choose a spreadsheet, and you're ready to go!",
    benefits: [
      "Build custom workflows",
      "Create, update and delete records",
      "Drag and drop builder",
    ],
  },
  {
    reverse: false,
    url: "https://res.cloudinary.com/frontly/image/upload/h_500/v1678047162/access-control-graphic_n1zedy.png",
    title: "Define custom permissions and access levels",
    description:
      "Ensure that only the appropriate users have access to view and modify specific information from your application with granular permissions. All data is securely stored in your spreadsheet.",
    benefits: [
      "Email & password login for each user",
      "Role-based access permissions",
      "Define advanced rules",
    ],
  },
];

const FeatureBlock = ({ data }) => {
  return (
    <FeatureBlockContainer reverse={data.reverse}>
      <FeatureBlockImageContainer height={data.height}>
        <FeatureBlockImage src={data.url} alt={data?.url?.substring(0, 10)} />
      </FeatureBlockImageContainer>
      <FeatureBlockLeft>
        <FeatureBlockTitle>{data.title}</FeatureBlockTitle>
        <FeatureBlockDescription>{data.description}</FeatureBlockDescription>
        <BenefitsContainer>
          {get(data, "benefits", []).map((b, i) => (
            <Benefit key={i} label={b} />
          ))}
        </BenefitsContainer>
      </FeatureBlockLeft>
    </FeatureBlockContainer>
  );
};

const FeatureBlocks = () => (
  <BlocksContainer>
    {blocks.map((b, i) => (
      <FeatureBlock key={i} data={b} />
    ))}
  </BlocksContainer>
);

export default FeatureBlocks;

const Benefit = ({ label }) => (
  <BenefitRow>
    <IconWrapper>
      <Icon src={check} />
    </IconWrapper>
    <BenefitText>{label}</BenefitText>
  </BenefitRow>
);
