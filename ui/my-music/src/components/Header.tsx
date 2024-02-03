import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align content to the right */
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
    bottom: -2px; /* Adjust the distance from the text */
    left: 0;
    width: 50%; /* Initially, set the width to 50% */
    height: 2px; /* Underline height */
    background-color: #3498db; /* Underline color */
    transform: scaleX(
      0
    ); /* Initially, set the scale to 0 to make it invisible */
    transform-origin: bottom right;
    transition: transform 0.3s ease-out, width 0.3s ease-out; /* Add width transition */
  }

  &:hover:after {
    transform: scaleX(1); /* Scale up the underline on hover */
    transform-origin: bottom left;
    width: 100%; /* Expand the width to 100% on hover */
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Heading>My Songs</Heading>
    </HeaderContainer>
  );
}
