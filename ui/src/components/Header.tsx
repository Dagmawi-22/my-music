import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import styled from "styled-components";
import Modal from "./Modal";
import {
  HeaderAddButton,
  HeaderCloseButton,
  HeaderContainer,
  HeaderHeading,
  HeaderModalContainer,
  HeaderModalOverlay,
  HeaderSubmitButton,
  HeaderTextField,
} from "../styles/styled";

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
        <HeaderModalOverlay>
          <HeaderModalContainer>
            <h2>Add new song</h2>

            <form>
              <HeaderTextField
                type="text"
                placeholder="Title"
                value={songTitle}
                onChange={handleTitleChange}
                required
              />

              <HeaderTextField
                type="text"
                placeholder="Album"
                value={album}
                onChange={handleAlbumChange}
                required
              />

              <HeaderTextField
                type="text"
                placeholder="Artist"
                value={artist}
                onChange={handleArtistChange}
                required
              />

              <HeaderTextField
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={handleGenreChange}
                required
              />

              <HeaderSubmitButton type="submit">Submit</HeaderSubmitButton>
            </form>
            <HeaderCloseButton onClick={() => setAddSong(false)}>
              &times;
            </HeaderCloseButton>
          </HeaderModalContainer>
        </HeaderModalOverlay>
      </Modal>

      <HeaderContainer>
        <HeaderHeading>{title}</HeaderHeading>
        {onAddClick && (
          <HeaderAddButton onClick={() => setAddSong(true)}>
            {<IoAdd />}
          </HeaderAddButton>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
