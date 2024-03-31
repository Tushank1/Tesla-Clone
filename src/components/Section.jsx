import React from "react";
import styled from "styled-components";
import { JackInTheBox, Zoom } from "react-awesome-reveal";

function Section({
  title,
  description,
  leftBtnText,
  rightBtntext,
  backgroundImage,
}) {
  return (
    <Wrap bgimage={backgroundImage}>
      <Zoom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Zoom>
      <Buttons>
        <JackInTheBox>
          <ButtonGroup>
            <LeftButton>{leftBtnText} </LeftButton>
            {rightBtntext && <RightButton>{rightBtntext}</RightButton>}
          </ButtonGroup>
        </JackInTheBox>
        <DownArrow
          src="/images-20240330T174417Z-001/images/down-arrow.svg"
          alt="down arrow"
        />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw; // vw => view width
  height: 100vh; // vh => View Height
  /* background-image: url("/images-20240330T174417Z-001/images/model-s.jpg"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) =>
    `url("/images-20240330T174417Z-001/images/${props.bgimage}")`};
`;

const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled.div`
  background-color: white;
  height: 40px;
  width: 256px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  /* font-weight: bold; */
  opacity: 0.85;
  cursor: pointer;
  margin: 8px;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // This centers children horizontally
  justify-content: center; // This centers children vertically
`;
