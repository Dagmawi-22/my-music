import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import styled from "styled-components";
import Modal from "./Modal";

const HeaderContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 24px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: #3498db;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out, width 0.3s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
    width: 100%;
  }
`;

const AddButton = styled.button`
  background-color: #1db954;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 2px 15px;
  max-height: 30px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: #15a547;
  }
`;

interface HeaderProps {
  title: string;
  onAddClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onAddClick }) => {
  const [addSong, setAddSong] = useState<boolean>(false);

  return (
    <>
      <Modal isOpen={addSong} onClose={() => setAddSong(false)}>
        <h2>Add new song</h2>
        <p>This is the content of the modal.</p>
      </Modal>

      <HeaderContainer>
        <Heading>{title}</Heading>
        {onAddClick && (
          <AddButton onClick={() => setAddSong(true)}>{<IoAdd />}</AddButton>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
