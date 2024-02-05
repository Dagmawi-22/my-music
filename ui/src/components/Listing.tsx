import React, { useState, useEffect, useRef } from "react";
import { MdEdit } from "react-icons/md";
import {
  HeaderCloseButton,
  HeaderModalContainer,
  HeaderModalOverlay,
  HeaderSubmitButton,
  HeaderTextField,
  ListingCounter,
  ListingDeleteIcon,
  ListingDeleteIconWrapper,
  ListingDetailsHeading,
  ListingDetailsSection,
  ListingDetailsText,
  ListingEditIconWrapper,
  ListingIconWrapper,
  ListingPageContainer,
  ListingPauseIcon,
  ListingPlayIcon,
  ListingPlayIconWrapper,
  ListingPlaying,
  ListingTable,
  ListingTableCell,
  ListingTableHeader,
  ListingTableRow,
  ListingTableSection,
} from "../styles/styled";
import { IoHeadset, IoPlayForward } from "react-icons/io5";
import Modal from "./Modal";
import { deleteSongStart, updateSongStart } from "../redux/songSlice";
import { useDispatch, useSelector } from "react-redux";
import { Song } from "../interfaces/Interface";

let tableData = [
  {
    id: 1,
    title: "Yemishit Kokeb",
    artist: "Dawit Mellesse",
    album: "Lottery",
    genre: "Dancehall",
  },
  {
    id: 2,
    title: "Mysterious Girl",
    artist: "Peter Andre",
    album: "Natural",
    genre: "Reggae",
  },
  {
    id: 3,
    title: "Brackets",
    artist: "J. Cole",
    album: "KOD",
    genre: "Hip hop",
  },
];

const StyledTable = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: any) => state?.songs);

  const [playingIndex, setPlayingIndex] = useState<number>(-1);
  const [counter, setCounter] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [deleteSong, setDeleteSong] = useState<boolean>(false);

  const [editSong, setEditSong] = useState<boolean>(false);
  const [editSongId, setEditSongId] = useState<any>(0);
  const [deleteSongId, setDeleteSongId] = useState<any>(0);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateSongStart({ title: songTitle, album, artist, genre }));
    setEditSong(false);
  };

  const handleEdit = (item: Song) => {
    setEditSongId(item?.id);
    setEditSong(true);
    setSongTitle(item?.title);
    setArtist(item?.artist);
    setAlbum(item?.album);
    setGenre(item?.genre);
  };

  const handleDelete = (item: number) => {
    dispatch(deleteSongStart({ id: item }));
    setDeleteSong(false);
  };

  useEffect(() => {
    if (songs) {
      tableData = [...tableData, songs];
    }
    let interval: NodeJS.Timer;

    if (playingIndex !== -1) {
      setCounter(0);
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [playingIndex]);

  const handlePlayClick = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(-1);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    } else {
      setPlayingIndex(index);
      if (audioRef.current) {
        audioRef.current.src = "/audio/sample.mp3";
        audioRef.current.loop = true;
        audioRef.current.play();
      }
    }
  };

  const playingSong = playingIndex !== -1 ? tableData[playingIndex] : null;

  const handleForward = () => {
    if (playingIndex == tableData?.length - 1) {
      setPlayingIndex(0);
      if (audioRef.current) {
        audioRef.current.src = "/audio/sample.mp3";
        audioRef.current.loop = true;
        audioRef.current.play();
      }
      return;
    }
    setPlayingIndex(playingIndex + 1);
    if (audioRef.current) {
      audioRef.current.src = "/audio/sample.mp3";
      audioRef.current.loop = true;
      audioRef.current.play();
    }
  };

  return (
    <ListingPageContainer>
      <Modal isOpen={editSong} onClose={() => setEditSong(false)}>
        <h2>Add new song</h2>
        <HeaderModalOverlay>
          <HeaderModalContainer>
            <h2>Add new song</h2>

            <form onSubmit={handleSubmit}>
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
            <HeaderCloseButton onClick={() => setEditSong(false)}>
              &times;
            </HeaderCloseButton>
          </HeaderModalContainer>
        </HeaderModalOverlay>
      </Modal>

      <Modal isOpen={deleteSong} onClose={() => setDeleteSong(false)}>
        <h2>Delete a song</h2>
        <HeaderModalOverlay>
          <HeaderModalContainer>
            <h2>Delete a song</h2>
            <h4>Are you sure you want to delete the song?</h4>
            <HeaderSubmitButton onClick={() => handleDelete(deleteSongId)}>
              Yes
            </HeaderSubmitButton>
            <HeaderCloseButton onClick={() => setDeleteSong(false)}>
              &times;
            </HeaderCloseButton>
          </HeaderModalContainer>
        </HeaderModalOverlay>
      </Modal>

      <ListingDetailsSection>
        {playingSong && (
          <ListingPlaying>
            <ListingDetailsHeading>Now Playing:</ListingDetailsHeading>
            <ListingDetailsText>
              {playingSong.artist?.toUpperCase()}
            </ListingDetailsText>
            <ListingDetailsText>-</ListingDetailsText>
            <ListingDetailsText>
              {playingSong.title?.toUpperCase()}
            </ListingDetailsText>
            <ListingDetailsText>
              <ListingIconWrapper>
                <IoPlayForward onClick={handleForward} />
              </ListingIconWrapper>
            </ListingDetailsText>
            <ListingCounter>
              {String(Math.floor(counter / 60)).padStart(2, "0")}:
              {String(counter % 60).padStart(2, "0")}
            </ListingCounter>
          </ListingPlaying>
        )}
        <audio ref={audioRef} />
      </ListingDetailsSection>
      <ListingTableSection>
        <ListingTable>
          <thead>
            <ListingTableRow>
              <ListingTableHeader>#</ListingTableHeader>
              <ListingTableHeader>Title</ListingTableHeader>
              <ListingTableHeader>Artist</ListingTableHeader>
              <ListingTableHeader>Album</ListingTableHeader>
              <ListingTableHeader>Genre</ListingTableHeader>
            </ListingTableRow>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <ListingTableRow key={item.id}>
                <ListingTableCell>
                  <IoHeadset size={24} />
                </ListingTableCell>
                <ListingTableCell>{item.title}</ListingTableCell>
                <ListingTableCell>{item.artist}</ListingTableCell>
                <ListingTableCell>{item.album}</ListingTableCell>
                <ListingTableCell>{item.genre}</ListingTableCell>
                <ListingTableCell>
                  <ListingPlayIconWrapper
                    onClick={() => handlePlayClick(index)}
                  >
                    {playingIndex === index ? (
                      <ListingPauseIcon />
                    ) : (
                      <ListingPlayIcon />
                    )}
                  </ListingPlayIconWrapper>
                </ListingTableCell>
                <ListingTableCell>
                  <ListingEditIconWrapper onClick={() => handleEdit(item)}>
                    <MdEdit />
                  </ListingEditIconWrapper>
                </ListingTableCell>
                <ListingTableCell>
                  <ListingDeleteIconWrapper
                    onClick={() => {
                      setDeleteSongId(item?.id);
                      setDeleteSong(true);
                    }}
                  >
                    <ListingDeleteIcon />
                  </ListingDeleteIconWrapper>
                </ListingTableCell>
              </ListingTableRow>
            ))}
          </tbody>
        </ListingTable>
      </ListingTableSection>
    </ListingPageContainer>
  );
};

export default StyledTable;
