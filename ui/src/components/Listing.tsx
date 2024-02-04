import React, { useState, useEffect, useRef } from "react";
import { MdEdit } from "react-icons/md";
import {
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

const tableData = [
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
  const [playingIndex, setPlayingIndex] = useState<number>(-1);
  const [counter, setCounter] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEdit = (i: number) => {
    return true;
  };

  useEffect(() => {
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
                  <ListingEditIconWrapper onClick={() => handleEdit(index)}>
                    <MdEdit />
                  </ListingEditIconWrapper>
                </ListingTableCell>
                <ListingTableCell>
                  <ListingDeleteIconWrapper>
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
