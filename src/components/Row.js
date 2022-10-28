import React from "react";
import styled from "styled-components";

export default function Row() {
  return (
    <Wrapper>
      <RowContainer>1</RowContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const RowContainer = styled.div`
  flex-basis: 975px;
  height: 300px;
  margin-top: 30px;
  background-color: #b6ebba;
`;
