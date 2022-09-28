import styled from "@emotion/styled";
import { AiOutlineDown } from "react-icons/ai";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/new_main.png");
  background-position: center;
  background-size: cover;
`;
const Container = styled.div`
  width: 100%;
  height: 85vh;
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
const Title = styled.div`
  font-size: 4.75rem;
  font-weight: 600;
  margin-top: 1rem;
`;
const ButtonBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;
const Button = styled.div`
  width: 178px;
  height: 63px;
  border-radius: 10px;
  background-color: rgba(0, 12, 30, 0.8);
  margin: 0.2rem;
  line-height: 63px;
  text-align: center;
  color: white;
`;
const IconsWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icons = styled(AiOutlineDown)`
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.5);
`;
const TossLandingPage = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>금융의 모든 것</Title>
          <Title>토스에서 쉽고 간편하게</Title>
        </Header>
        <ButtonBox>
          <Button>App Store</Button>
          <Button>Google Play</Button>
        </ButtonBox>
      </Container>
      <IconsWrapper>
        <Icons />
      </IconsWrapper>
    </Wrapper>
  );
};

export default TossLandingPage;
