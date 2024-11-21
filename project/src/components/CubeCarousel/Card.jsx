import { motion } from "motion/react";
import styled from "styled-components";

const Card = ({ index, count, color }) => {
  const width = 200;
  const height = 200;
  const x = index % 2 === 0 ? 0 : width;
  const rotateY = -(360 / count) * index;
  console.log(x);
  console.log(rotateY);

  return (
    <div>
      <Container
        initial={{
          x: x,
          y: height / 2,
          rotateY: rotateY,
        }}
        animate={
          {
            // rotateY: [0, -60], // Y축으로 회전
            // x: [0, 45]
          }
        }
        transition={{
          duration: 1, // 2초마다 한 번 회전
          // ease: "linear", // 일정한 속도로 회전
          // repeat: Infinity, // 무한 반복
          // repeatDelay: 1,
        }}
        width={width}
        height={height}
        bgColor={color}
      >
        {index}
      </Container>
    </div>
  );
};

export default Card;

const Container = styled(motion.div)`
  position: absolute;
  border: 5px solid black;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.bgColor || "#26539c"};
  color: aquamarine;
`;
