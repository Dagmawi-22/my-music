import styled from "styled-components";
import backgroundImage from "../imgs/bg.jpg";
import {
  IoHeadset,
  IoPlay,
  IoPause,
  IoTrash,
  IoPlayForward,
} from "react-icons/io5";

export const IndexPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 5px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden; /* Prevent horizontal scrolling */
`;

export const IndexPageContent = styled.div`
  padding: 20px 30px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
`;

export const HeaderHeading = styled.h1`
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

export const HeaderAddButton = styled.button`
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

export const HeaderModalOverlay = styled.div`
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

export const HeaderModalContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  max-width: 85%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative; /* Added relative positioning */
`;

export const HeaderCloseButton = styled.button`
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

export const HeaderTextField = styled.input`
  width: 95%;
  padding: 8px;
  margin-bottom: 16px;
`;

export const HeaderSubmitButton = styled.button`
  background: #1db954;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
`;

export const ListingPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
  font-family: "Raleway", sans-serif;
`;

export const ListingTableSection = styled.div`
  flex-grow: 1;
  width: 100%;
  margin-bottom: 20px;
`;

export const ListingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const ListingTableHeader = styled.th`
  background-color: rgba(52, 152, 219, 0.7);
  color: white;
  padding: 10px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ListingTableRow = styled.tr`
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

export const ListingTableCell = styled.td`
  padding: 10px;
  color: white;
`;

export const ListingPlayIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #1db954;
  border-radius: 50%;
  cursor: pointer;
`;

export const ListingEditIconWrapper = styled.div`
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

export const ListingPlayIcon = styled(IoPlay)`
  color: #fff;
  font-size: 20px;
`;

export const ListingPauseIcon = styled(IoPause)`
  color: #fff;
  font-size: 20px;
`;

export const ListingDeleteIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #ffcccc;
  border-radius: 50%;
  cursor: pointer;
`;

export const ListingDeleteIcon = styled(IoTrash)`
  color: #fff;
  font-size: 20px;
`;

export const ListingDetailsSection = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const ListingDetailsHeading = styled.h2`
  font-size: 18px;
  white-space: nowrap;
`;

export const ListingPlaying = styled.div`
  display: flex;
  color: white;
`;

export const ListingDetailsText = styled.p`
  margin-left: 15px;
  white-space: nowrap;
`;

export const ListingCounter = styled.div`
  font-size: 36px;
  margin-left: 30px;
`;

export const ListingIconWrapper = styled.div`
  background-color: #1db954;
  color: #fff;
  clip-path: circle();
  padding: 7px;
  font-size: 24px;
  margin-top: -12px;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
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

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ModalCloseButton = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
`;

export const StatisticsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
  margin-top: 140px;
`;

export const StatExpandButton = styled.button`
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

export const StatisticCard = styled.div`
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

export const StatIconWrapper = styled.div`
  background-color: #1db954;
  color: #fff;
  clip-path: circle();
  padding: 10px;
  font-size: 24px;
`;
