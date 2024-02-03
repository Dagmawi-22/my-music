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
  max-width: 85%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative; /* Added relative positioning */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 27px;
  color: #fff;
  border: none;
  border-radius: 4px;
  color: red;
  cursor: pointer;
`;

const TextField = styled.input`
  width: 95%;
  padding: 8px;
  margin-bottom: 16px;
`;

const SubmitButton = styled.button`
  background: #1db954;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
`;

interface HeaderProps {
  title: string;
  onAddClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onAddClick }) => {
  const [addSong, setAddSong] = useState<boolean>(false);

  const [songTitle, setSongTitle] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const [genre, setGenre] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSongTitle(e.target.value);
  };

  const handleAlbumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbum(e.target.value);
  };

  const handleArtistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtist(e.target.value);
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  };

  return (
    <>
      <Modal isOpen={addSong} onClose={() => setAddSong(false)}>
        <h2>Add new song</h2>
        <ModalOverlay>
          <ModalContainer>
            <h2>Add new song</h2>

            <form>
              <TextField
                type="text"
                placeholder="Title"
                value={songTitle}
                onChange={handleTitleChange}
                required
              />

              <TextField
                type="text"
                placeholder="Album"
                value={album}
                onChange={handleAlbumChange}
                required
              />

              <TextField
                type="text"
                placeholder="Artist"
                value={artist}
                onChange={handleArtistChange}
                required
              />

              <TextField
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={handleGenreChange}
                required
              />

              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
            <CloseButton onClick={() => setAddSong(false)}>&times;</CloseButton>
          </ModalContainer>
        </ModalOverlay>
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
