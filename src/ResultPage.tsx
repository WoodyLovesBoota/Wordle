import { styled, keyframes } from "styled-components";
import { IResult, STATUS, answerState } from "./atoms";
import { useRecoilValue } from "recoil";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div<IResult>`
  background-color: rgba(0, 0, 0, 0.9);
  top: ${(props) => (props.result === STATUS.NOT_FINISHED ? "-200vh" : 0)};
  width: 100vw;
  height: 100vh;
  position: fixed;
  transition: top 1.5s ease-in-out;
  padding: 8%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 2.5rem;
  font-weight: 400;
`;

const Answer = styled.div`
  display: flex;
`;

const AnswerWord = styled.h2`
  font-size: 4.5rem;
  width: 7.5rem;
  height: 7.5rem;
  font-weight: 700;
  margin-right: 1.25rem;
  background-color: #539165;
  border-radius: 0.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotationAni = keyframes`
  0% {transform: rotate(0deg)};
  100% {transform: rotate(360deg)};
`;

const Button = styled.button`
  margin-top: 3.75rem;
  border: none;
  color: white;
  background-color: transparent;

  cursor: pointer;
  span {
    display: block;
    font-size: 3rem;
    &:hover {
      animation: ${rotationAni} 2s linear infinite;
    }
  }
`;

const Restart = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

const refreshPage = () => {
  window.location.reload();
};

const ResultPage = ({ result }: IResult) => {
  const answer = useRecoilValue(answerState);
  return (
    <Container result={result}>
      <Title>{result === STATUS.WIN ? "GOOD !!!" : "So Close..."}</Title>
      <Title>The Answer is...</Title>
      <Answer>
        <AnswerWord>{answer[0]?.toUpperCase()}</AnswerWord>
        <AnswerWord>{answer[1]?.toUpperCase()}</AnswerWord>
        <AnswerWord>{answer[2]?.toUpperCase()}</AnswerWord>
        <AnswerWord>{answer[3]?.toUpperCase()}</AnswerWord>
        <AnswerWord>{answer[4]?.toUpperCase()}</AnswerWord>
      </Answer>
      <Button onClick={refreshPage}>
        <span>
          <FontAwesomeIcon icon={faRotateRight}></FontAwesomeIcon>
        </span>
        <Restart>Restart</Restart>
      </Button>
    </Container>
  );
};

export default ResultPage;
