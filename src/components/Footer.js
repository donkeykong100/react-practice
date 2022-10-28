import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <AA>
      <BB>
        <SS>
          <YeoreumL>yeoreum</YeoreumL>
          <YeoreumLink>
            <YL>개인정보처리방침</YL>
          </YeoreumLink>
          <YeoreumLink>
            <YL>이용약관</YL>
          </YeoreumLink>
        </SS>
        <DD>
          <YLink>여름 소개</YLink>
          <YLink>고객센터</YLink>
          <YLink>모던애자일</YLink>
          <YLink>인덕대학교</YLink>
        </DD>
        <YeoreumDesc>
          <Rights>ⓒ 모던애자일 Rights Reserved.</Rights>
        </YeoreumDesc>
      </BB>
    </AA>
  );
}
const AA = styled.footer`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  padding: 30px 0;
  border-top: 1px solid rgb(25, 25, 25, 10%);
  margin-top: 30px;
  @media (max-width: 769px) {
    padding: 0;
    border-top: none;
    background-color: rgb(25, 25, 25, 10%);
  }
`;

const BB = styled.div`
  width: 600px;
  /* background-color: rgba(0, 0, 0, 20%); */
  display: flex;
  flex-direction: column;
  @media (max-width: 769px) {
    width: 100%;
  }
`;

const SS = styled.div`
  padding: 0 10px;
  margin: 10px 0;
  @media (max-width: 769px) {
    text-align: center;
    order: 1;
  }
`;

const YeoreumL = styled.span`
  color: #ff2b37;
  margin-bottom: 4px;
  font-size: 22px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

const YeoreumLink = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: -3px;
  color: #666;
  ::before {
    content: "|";
    color: #111;
    margin: 0 10px;
    display: inline-block;
  }
`;

const YL = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const DD = styled.div`
  /* background-color: rgba(0, 0, 0, 20%); */
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    a {
      border-top: 1px solid rgb(25, 25, 25, 20%);
    }
    a:last-of-type {
      border-bottom: 1px solid rgb(25, 25, 25, 20%);
    }
  }
`;

const YLink = styled.a`
  font-size: 15px;
  padding: 0 10px;
  color: #666;
  text-decoration: none;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media (max-width: 769px) {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    padding: 15px 0;
    margin-bottom: 0;
    &:hover {
      background-color: rgba(0, 0, 0, 25%);
      text-decoration: none;
      color: white;
    }
  }
`;

const YeoreumDesc = styled.div`
  margin-top: 30px;
  @media (max-width: 769px) {
    margin-top: 10px;
    order: 2;
  }
`;

const Rights = styled.h2`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;
