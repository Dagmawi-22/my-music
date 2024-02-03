import React, { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import { ModalProps } from "../interfaces/Interface";

// Styled Components

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
`;

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <ModalOverlay>
      <ModalContainer>
        {children}
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  ) : null;
};

export default Modal;
