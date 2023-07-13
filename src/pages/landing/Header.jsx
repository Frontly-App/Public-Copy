import React from "react";
import { colors } from "../../theme";
import styled from "styled-components";

const Button = styled.div`
  background: ${colors.primary};
  padding: 12px;
  color: white;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;
const HeaderLink = styled.div`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: ${colors.grey4};

  ${(p) =>
    p.hideMobile &&
    `
    @media screen and (max-width: 800px) {
      display: none;
    }
  `}
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

export const Header = () => {
  const navigate = (route) =>
    (window.location.href = `https://www.frontly.ai/${route}`);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Logo
          alt="Frontly Logo"
          src="https://res.cloudinary.com/frontly/image/upload/v1686583732/admin/frontly_black_abjsh6.svg"
          onClick={() => navigate("")}
        />
      </HeaderLeft>
      <HeaderRight>
        <HeaderLink hideMobile onClick={() => navigate("app_templates")}>
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
          hideMobile
          onClick={() =>
            (window.location.href = `https://app.frontly.ai/login`)
          }
        >
          Login
        </HeaderLink>
        <Button
          onClick={() =>
            (window.location.href = `https://app.frontly.ai/signup`)
          }
        >
          Start for free
        </Button>
      </HeaderRight>
    </HeaderContainer>
  );
};
