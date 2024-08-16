import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoIosCloseCircle} from 'react-icons/io'
import Buttons from '../Buttons'
import GameResultView from '../GameResultView'

import {
  MainContainer,
  ScoreContainer,
  Heading,
  ItemsContainer,
  ParagraphScore,
  ScoreCardContainer,
  ScoreSpan,
  ButtonsContainer,
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  CloseButtonContainer,
  RulesImage,
  CloseButton,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    resultMessage: 0,
    score: 0,
  }
  onChangeGame = () => this.setState({showResult: false})

  getResultsView = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state

    return (
      <GameResultView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onChangeGame}
      />
    )
  }

  onGetButtonId = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  renderButtons = () => {
    const {choicesList} = this.props
    return (
      <ButtonsContainer>
        {choicesList.map(eachItem => (
          <Buttons
            buttonDetails={eachItem}
            key={eachItem.id}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ButtonsContainer>
    )
  }

  render() {
    const {score, showResult} = this.state
    return (
      <MainContainer>
        <ScoreContainer>
          <ItemsContainer>
            <Heading>
              ROCK <br /> PAPER <br /> SCISSORS
            </Heading>
          </ItemsContainer>
          <ScoreCardContainer>
            <ParagraphScore>Score</ParagraphScore>
            <ScoreSpan>{score}</ScoreSpan>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.getResultsView() : this.renderButtons()}

        <PopUpContainer>
          <Popup modal trigger={<PopUpButton>RULES</PopUpButton>}>
            {close => (
              <RulesImageContainer>
                <CloseButtonContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <IoIosCloseCircle size="30" />
                  </CloseButton>
                </CloseButtonContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}

export default Game
