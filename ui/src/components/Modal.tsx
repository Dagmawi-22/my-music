import React, { FC, ReactNode, useState } from "react";
import { ModalProps } from "../interfaces/Interface";
import {
  ModalCloseButton,
  ModalContainer,
  ModalOverlay,
} from "../styles/styled";

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <ModalOverlay>
      <ModalContainer>
        {children}
        <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
      </ModalContainer>
    </ModalOverlay>
  ) : null;
};

export default Modal;
