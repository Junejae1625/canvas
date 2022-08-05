import styled from "@emotion/styled";

const Canvas = styled(canvas)`
  width: 400px;
  height: 700px;
`;

const Game = () => {
  //   let canvas = document.createElement("canvas");
  //   let ctx = canvas.getContext("2d");
  //   canvas.width = 400;
  //   canvas.height = 700;

  return (
    <div>
      <h1>First Game</h1>
      <Canvas></Canvas>
    </div>
  );
};

export default Game;
