// 사용법

// 1. 라이브러리 설치
// npm install react-swipeable
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
// npm install styled-components

// 2. 컴포넌트 사용(props로 )
// <Carousel/>

import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSwipeable } from "react-swipeable";

const Carousel = () => {
  // 슬라이드 이미지 SRC 배열
  const items = [
    "https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_640.jpg",
    "https://cdn.pixabay.com/photo/2023/01/04/13/21/animals-7696695_640.jpg",
    "https://cdn.pixabay.com/photo/2017/08/01/09/04/dog-2563759_640.jpg",
    "https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124948_640.jpg",
  ];

  // 현재 슬라이드 위치
  const [currentIndex, setCurrentIndex] = useState(0);

  // 다음 버튼 클릭 시
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // 이전 버튼 클릭 시
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  // 스와이프 hooks
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(), // 좌측 스와이프 감지
    onSwipedRight: () => handlePrev(), // 우측 스와이프 감지
    trackMouse: true, // 마우스 드래그 지원
    preventScrollOnSwipe: true, // 스와이프 중 스크롤 방지
  });

  return (
    <>
      {/* 캐러셀 컨테이너 */}
      <CarouselContainer className="Carousel" {...handlers}>
        {/* 슬라이드 컨테이너 */}
        <SlideContainer currentIndex={currentIndex}>
          {items.map((item, index) => (
            <SlideImage key={index} src={items[index]} alt="" />
          ))}
        </SlideContainer>

        {/* 이전 버튼 */}
        <NavigationButton onClick={handlePrev} className="left">
          <ArrowBackIosNewIcon />
        </NavigationButton>

        {/* 다음 버튼 */}
        <NavigationButton onClick={handleNext} className="right">
          <ArrowForwardIosIcon />
        </NavigationButton>

        {/* 인디케이터 */}
        <IndicatorContainer>
          {items.map((_, index) => (
            <Indicator key={index} active={currentIndex === index} />
          ))}
        </IndicatorContainer>
      </CarouselContainer>
    </>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  /* border: 3px solid #26539c; */
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  transition: transform 0.5s ease-in-out; // 애니메이팅 조절
`;

const SlideImage = styled.img`
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationButton = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.8); /* 반투명한 배경색 */
  backdrop-filter: blur(10px); /* 배경을 블러 처리 */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    background-color: #ddd;
  }
  &.left {
    left: 20px; /* 왼쪽에 위치 */
  }
  &.right {
    right: 20px; /* 오른쪽에 위치 */
  }
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  padding: 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8); /* 반투명한 배경색 */
  backdrop-filter: blur(10px); /* 배경을 블러 처리 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#333" : "#aaa")};
  margin: 0 5px;
  transition: background-color 0.5s; // 인디케이터 색 변화시 애니메이팅
`;
