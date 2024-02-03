import React, { useState } from "react";
import styled from "styled-components";
import {
  IoAlbums,
  IoArrowDown,
  IoArrowUp,
  IoMusicalNote,
  IoMusicalNotes,
  IoPeople,
  IoPerson,
} from "react-icons/io5";

const StatisticsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

const ExpandButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #1db954;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

const StatisticCard = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Semi-transparent white background */
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333; /* Updated text color */

  @media (max-width: 768px) {
    min-width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const IconWrapper = styled.div`
  background-color: #1db954;
  color: #fff;
  clip-path: circle();
  padding: 10px;
  font-size: 24px;
`;

const Statistics = () => {
  const [expanded, setExpanded] = useState(true);

  const handleExpandCollapse = () => {
    setExpanded(!expanded);
  };

  return (
    <StatisticsContainer>
      <ExpandButton onClick={handleExpandCollapse}>
        {expanded ? <IoArrowUp /> : <IoArrowDown />}
      </ExpandButton>

      {expanded && (
        <>
          <StatisticCard>
            <IconWrapper>
              <IoMusicalNote />
            </IconWrapper>
            <div>
              <h3>All Songs</h3>
              <p>4</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <IconWrapper>
              <IoPeople />
            </IconWrapper>
            <div>
              <h3>Artists</h3>
              <p>3</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <IconWrapper>
              <IoAlbums />
            </IconWrapper>
            <div>
              <h3>Albums</h3>
              <p>2</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <IconWrapper>
              <IoMusicalNotes />
            </IconWrapper>
            <div>
              <h3>Genres</h3>
              <p>4</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <IconWrapper>
              <IoPerson />
            </IconWrapper>
            <div>
              <h3>J Cole</h3>
              <p>34 songs</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <IconWrapper>
              <IoPerson />
            </IconWrapper>
            <div>
              <h3>Dawit Melesse</h3>
              <p>2 songs</p>
            </div>
          </StatisticCard>
        </>
      )}
    </StatisticsContainer>
  );
};

export default Statistics;
