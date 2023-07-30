import React from "react";
import chevronDown from "../images/chevron-down.svg";
import { colors } from "../theme";
import { get } from "lodash";
import styled from "styled-components";
import { useState } from "react";

const Icon = styled.img`
  height: 20px;
`;

const Text = styled.div`
  font-size: 14px;
  color: ${colors.default};
  font-family: "Roboto", sans-serif;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1000px) {
    gap: 16px;
  }
`;

const Question = styled.div`
  border-radius: 8px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: ${(p) => (p.expanded ? "flex-start" : "center")};
  cursor: pointer;
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.15);
  @media (max-width: 1000px) {
    padding: 20px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50px;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FAQ = ({ data }) => {
  const [activeItem, setActiveItem] = useState(null);
  const questions = get(data, "questions", []);

  return (
    <Container>
      {questions.map((question, i) => {
        const expanded = activeItem === i;
        return (
          <Question
            lightWithBorder={data.lightWithBorder}
            key={i}
            expanded={expanded}
            index={i}
            onClick={() => setActiveItem(expanded ? null : i)}
          >
            <div style={{ marginTop: expanded ? "4px" : "0px" }}>
              <Text style={{ fontSize: "20px", fontWeight: 600 }}>
                {question.question}
              </Text>
              {expanded && (
                <Text
                  style={{
                    color: "#1d293d",
                    fontSize: "18px",
                    margin: "10px 0 0 0",
                    fontWeight: 300,
                  }}
                >
                  {question.answer}
                </Text>
              )}
            </div>
            <IconContainer>
              <Icon
                src={chevronDown}
                style={{
                  margin: "0 0 0 5px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
            </IconContainer>
          </Question>
        );
      })}
    </Container>
  );
};

export default FAQ;
