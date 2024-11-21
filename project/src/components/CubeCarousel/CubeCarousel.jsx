import { motion } from "framer-motion";
import styled from "styled-components";

const CubeCarousel = () => {
  return (
    <Scene>
      <CubeContainer
        animate={{
          // rotateX: [0, 360],
          // rotateY: [0, 360],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Face className="front" color="#ff5722">
          Front
        </Face>
        <Face className="back" color="#673ab7">
          Back
        </Face>
        <Face className="left" color="#4caf50">
          Left
        </Face>
        <Face className="right" color="#2196f3">
          Right
        </Face>
        <Face className="top" color="#ffc107">
          Top
        </Face>
        <Face className="bottom" color="#e91e63">
          Bottom
        </Face>
      </CubeContainer>
    </Scene>
  );
};

export default CubeCarousel;

const Scene = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  background-color: black;
  align-items: center;
  perspective: 800px; /* 3D 원근감 */
`;

const CubeContainer = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d; // 3D 배치를 유지
`;

const Face = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;

  /* 각 면의 위치를 설정 */
  &.front {
    transform: translateZ(100px);
  }
  &.back {
    transform: rotateY(180deg) translateZ(100px);
    backface-visibility: visible; /* 뒷면도 보이도록 설정 */
  }
  &.left {
    transform: rotateY(-90deg) translateZ(100px);
  }
  &.right {
    transform: rotateY(90deg) translateZ(100px);
  }
  &.top {
    transform: rotateX(90deg) translateZ(100px);
  }
  &.bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }
`;
