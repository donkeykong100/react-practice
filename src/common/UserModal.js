import React from "react";
import styled from "styled-components";

export default function UserModal({ onClose }) {
  return (
    <UserModalWrapper onClick={onClose}>
      <ModalWrapper>
        <ModalBubble />
        <UserModalBox></UserModalBox>
      </ModalWrapper>
    </UserModalWrapper>
  );
}

const UserModalWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  inset: 0;

  display: flex;
  flex-direction: row-reverse;

  background-color: rgba(0, 0, 0, 0%);
`;

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 48px;
  right: 21px;
  width: 302px;
  height: 300px;
  @media (min-width: 975px) {
    right: calc((100% - 964px) / 2);
  }
`;

const ModalBubble = styled.div`
  position: absolute;
  left: 264px;
  top: 5px;
  width: 20px;
  height: 20px;
  background-color: white;
  transform: rotate(45deg);
  border-top: 1px solid #888;
  border-left: 1px solid #888;
  border-top-left-radius: 4px;
  z-index: 10;
`;

const UserModalBox = styled.div`
  position: absolute;
  top: 15px;
  width: 300px;
  height: 300px;
  background-color: white;
  border: 1px solid #888;
  border-radius: 4px;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 25%), 2px 2px 4px rgba(0, 0, 0, 25%);
`;
