import {
  ShowResultContainer,
  ResultYou,
  ResultImageItem,
  ResultsTextImageContainer,
  ResultsImageContainer,
  ResultText,
  PlayAgainButton,
  PlayAgainButtonContainer,
} from './styledComponents'
const GameResultView = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props
  const {imageUrl} = opponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultsTextImageContainer>
        <ResultsImageContainer>
          <ResultYou>YOU</ResultYou>
          <ResultImageItem src={myChoice[1]} alt="your choice" />
        </ResultsImageContainer>
        <ResultsImageContainer>
          <ResultYou>OPPONENT</ResultYou>
          <ResultImageItem src={imageUrl} alt="opponent choice" />
        </ResultsImageContainer>
      </ResultsTextImageContainer>

      <ResultText>{resultMessage}</ResultText>
      <PlayAgainButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </PlayAgainButton>
      </PlayAgainButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResultView
