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
import { useSelector } from "react-redux";
import { ArtistStats } from "../interfaces/Interface";

const Statistics = () => {
  const [expanded, setExpanded] = useState(true);

  const stats = useSelector((state: any) => state?.stats);

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
              <p>{stats?.totalSongs}</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <StatIconWrapper>
              <IoPeople />
            </StatIconWrapper>
            <div>
              <h3>Artists</h3>
              <p>{stats?.totalArtists}</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <StatIconWrapper>
              <IoAlbums />
            </StatIconWrapper>
            <div>
              <h3>Albums</h3>
              <p>{stats?.totalAlbums}</p>
            </div>
          </StatisticCard>

          <StatisticCard>
            <StatIconWrapper>
              <IoMusicalNotes />
            </StatIconWrapper>
            <div>
              <h3>Genres</h3>
              <p>{stats?.totalGenres}</p>
            </div>
          </StatisticCard>

          {stats?.artistsStats?.map((item: ArtistStats, index: number) => (
            <StatisticCard key={index}>
              <StatIconWrapper>
                <IoPerson />
              </StatIconWrapper>
              <div>
                <h3>{item?._id}</h3>
                <p>{item?.count}</p>
              </div>
            </StatisticCard>
          ))}
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
