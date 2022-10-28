import styled from "styled-components";

export default function HamModal({ onClose }) {
  return (
    <HamburgerWrapper onClick={onClose}>
      <Hamburger>
        <HamburgerItem>홍유진 님</HamburgerItem>
        <HamburgerItem>마이페이지</HamburgerItem>
        <HamburgerItem>고객센터</HamburgerItem>
        <HamburgerItem>로그아웃</HamburgerItem>
      </Hamburger>
    </HamburgerWrapper>
  );
}

const HamburgerWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  inset: 60px 0 0;

  display: flex;
  flex-direction: row-reverse;

  /* background-color: rgba(0, 0, 0, 45%); */
`;

const Hamburger = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  background-color: white;
`;

const HamburgerItem = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  border-bottom: 1px solid #111;
  background-color: white;
`;
