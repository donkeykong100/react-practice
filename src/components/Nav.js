import React, { useState } from "react";
import styled from "styled-components";
import ModalPortal from "../common/ModalPortal";
import useModalResize from "../hooks/useModalResize";
import HamModal from "../common/HamModal";
import UserModal from "../common/UserModal";
import HambugerBtn from "../common/HambugerBtn";
import useScroll from "../hooks/useScroll";

function Nav() {
  const [hamModalOpen, setHamModalOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const { y } = useScroll();

  useModalResize("above", 769, () => setHamModalOpen(false));
  useModalResize("below", 769, () => setUserModalOpen(false));

  return (
    <>
      <Container show={y > 0 ? true : false}>
        <NavContainer>
          <YeoreumLogo>yeoreum</YeoreumLogo>
          <NavMenu>
            <NavMenuItem>게시판</NavMenuItem>
            <NavMenuItem>글쓰기</NavMenuItem>
            <NavMenuItem>채팅</NavMenuItem>
          </NavMenu>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ProfileImg onClick={() => setUserModalOpen((prev) => !prev)} />
            <Arrow toggle={userModalOpen} />
            <HambugerBtn
              toggle={hamModalOpen}
              onClick={() => setHamModalOpen((prev) => !prev)}
            />
          </div>
        </NavContainer>
      </Container>
      {/* <div style={{ height: "60px" }} /> */}
      {hamModalOpen && (
        <ModalPortal>
          <HamModal onClose={() => setHamModalOpen(false)} />
        </ModalPortal>
      )}
      {userModalOpen && (
        <ModalPortal>
          <UserModal onClose={() => setUserModalOpen(false)} />
        </ModalPortal>
      )}
    </>
  );
}

export default Nav;

const Container = styled.nav`
  display: flex;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 60px;
  box-shadow: ${({ show }) => (show ? "0 1px 2px rgba(0, 0, 0, 25%)" : "none")};
  background-color: ${({ show }) =>
    show ? "white" : "rgba(255, 255, 255, 0)"};
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const NavContainer = styled.div`
  box-sizing: border-box;
  min-width: 975px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 975px) {
    min-width: 95vw;
  }
`;

const YeoreumLogo = styled.div`
  color: #ff2b37;
  margin-bottom: 8px;
  font-size: 30px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  @media (max-width: 769px) {
    display: none;
  }
`;

const NavMenuItem = styled.div`
  padding: 0 30px;
  font-weight: 600;
  display: flex;
  min-width: 48px;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 50%);
  }
`;

const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: red;
  display: block;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 4px;
  height: 4px;
  margin: ${({ toggle }) => (toggle ? "3px 0 0" : "0 0 3px")};
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  transform: ${({ toggle }) => (toggle ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: 0.1s all;
  @media (max-width: 769px) {
    display: none;
  }
`;
