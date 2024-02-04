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
import {
  StatExpandButton,
  StatIconWrapper,
  StatisticCard,
  StatisticsContainer,
} from "../styles/styled";

const Statistics = () => {
  const [expanded, setExpanded] = useState(true);

  const handleExpandCollapse = () => {
    setExpanded(!expanded);
  };

  return (
    <StatisticsContainer>
      <StatExpandButton onClick={handleExpandCollapse}>
        {expanded ? <IoArrowUp /> : <IoArrowDown />}
      </StatExpandButton>

      {expanded && (
        <>
          <StatisticCard>
            <StatIconWrapper>
              <IoMusicalNote />
            </StatIconWrapper>
            <div>
              <h3>All Songs</h3>
              <p>4</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <StatIconWrapper>
              <IoPeople />
            </StatIconWrapper>
            <div>
              <h3>Artists</h3>
              <p>3</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <StatIconWrapper>
              <IoAlbums />
            </StatIconWrapper>
            <div>
              <h3>Albums</h3>
              <p>2</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <StatIconWrapper>
              <IoMusicalNotes />
            </StatIconWrapper>
            <div>
              <h3>Genres</h3>
              <p>4</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <StatIconWrapper>
              <IoPerson />
            </StatIconWrapper>
            <div>
              <h3>J Cole</h3>
              <p>34 songs</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <StatIconWrapper>
              <IoPerson />
            </StatIconWrapper>
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
