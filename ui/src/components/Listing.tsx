import React, { useState, useEffect, useRef } from "react";
import {
  IoHeadset,
  IoPlay,
  IoPause,
  IoTrash,
  IoPlayForward,
} from "react-icons/io5";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";

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

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
  font-family: "Raleway", sans-serif;
`;

const TableSection = styled.div`
  flex-grow: 1;
  width: 100%;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: rgba(52, 152, 219, 0.7);
  color: white;
  padding: 10px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: transparent;
  }

  white-space: nowrap;
  border-bottom: 1px solid #ddd;

  td {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
  }

  @media (min-width: 768px) {
    td {
      max-width: none;
    }
  }
`;

const TableCell = styled.td`
  padding: 10px;
  color: white;
`;

const PlayIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #1db954;
  border-radius: 50%;
  cursor: pointer;
`;

const EditIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #f6f6ff;
  color: #000;
  border-radius: 50%;
  cursor: pointer;
`;

const PlayIcon = styled(IoPlay)`
  color: #fff;
  font-size: 20px;
`;

const PauseIcon = styled(IoPause)`
  color: #fff;
  font-size: 20px;
`;

const DeleteIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #ffcccc;
  border-radius: 50%;
  cursor: pointer;
`;

const DeleteIcon = styled(IoTrash)`
  color: #fff;
  font-size: 20px;
`;

const DetailsSection = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

const DetailsHeading = styled.h2`
  font-size: 18px;
  white-space: nowrap;
`;

const Playing = styled.div`
  display: flex;
  color: white;
`;

const DetailsText = styled.p`
  margin-left: 15px;
  white-space: nowrap;
`;

const Counter = styled.div`
  font-size: 36px;
  margin-left: 30px;
`;

const IconWrapper = styled.div`
  background-color: #1db954;
  color: #fff;
  clip-path: circle();
  padding: 7px;
  font-size: 24px;
  margin-top: -12px;
  cursor: pointer;
`;

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
    <PageContainer>
      <DetailsSection>
        {playingSong && (
          <Playing>
            <DetailsHeading>Now Playing:</DetailsHeading>
            <DetailsText>{playingSong.artist?.toUpperCase()}</DetailsText>
            <DetailsText>-</DetailsText>
            <DetailsText>{playingSong.title?.toUpperCase()}</DetailsText>
            <DetailsText>
              <IconWrapper>
                <IoPlayForward onClick={handleForward} />
              </IconWrapper>
            </DetailsText>
            <Counter>
              {String(Math.floor(counter / 60)).padStart(2, "0")}:
              {String(counter % 60).padStart(2, "0")}
            </Counter>
          </Playing>
        )}
        <audio ref={audioRef} />
      </DetailsSection>
      <TableSection>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>#</TableHeader>
              <TableHeader>Title</TableHeader>
              <TableHeader>Artist</TableHeader>
              <TableHeader>Album</TableHeader>
              <TableHeader>Genre</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>
                  <IoHeadset size={24} />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.artist}</TableCell>
                <TableCell>{item.album}</TableCell>
                <TableCell>{item.genre}</TableCell>
                <TableCell>
                  <PlayIconWrapper onClick={() => handlePlayClick(index)}>
                    {playingIndex === index ? <PauseIcon /> : <PlayIcon />}
                  </PlayIconWrapper>
                </TableCell>
                <TableCell>
                  <EditIconWrapper onClick={() => handleEdit(index)}>
                    <MdEdit />
                  </EditIconWrapper>
                </TableCell>
                <TableCell>
                  <DeleteIconWrapper>
                    <DeleteIcon />
                  </DeleteIconWrapper>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableSection>
    </PageContainer>
  );
};

export default StyledTable;
