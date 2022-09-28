import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 20px;
`;

const TransitionButton = styled.button`
  width: 180px;
  height: 40px;
  transition: width 0.5s ease 1s, background-color 0.5s ease-in-out;
  :hover {
    width: 250px;
    background-color: pink;
  }
`;

export default function Transition() {
  return (
    <Wrapper>
      <TransitionButton>마우스를 올리면 길어져요</TransitionButton>
    </Wrapper>
  );
}
