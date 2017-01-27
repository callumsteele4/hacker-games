import React from 'react';
import Progress from '../Progress/Progress';
import { StyleSheet, css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { startQuiz, getQuestion, answerQuestion } from '../../actions/quizActions';
import SmallButton from '../SmallButton/SmallButton';
import Input from '../Input/Input';

const styles = StyleSheet.create({
  container: {
    width: 320,
    margin: '0px auto'
  },
  imageContainer: {
    height: 300,
    overflow: 'hidden'
  },
  picture: {
    width: '100%'
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'TL-Circular',
    color: '#6c6c6c'
  }
});

class Quiz extends React.Component {

  state = {
    questionType: Math.round(Math.random()),
    value: '',
    tried: 0,
    timing: false
  }

  static contextTypes = {
    router: React.PropTypes.object
  };

  componentWillMount() {
    this.props.startQuiz(); // Start the quiz and fetch first question
  }

  onGetAnswer = () => {
    const { quiz, questions } = this.props;
    const lastQuestion = questions[quiz.lastQuestionId];

    this.setState({
      value: lastQuestion.name
    });
  }

  answerQuestion = (currentQuestion, isCorrect) => {
    // const computedTried = !isCorrect && tried === 0 ? 1 : undefined;

    this.setState({
      questionType: Math.round(Math.random()),
      value: '',
      tried: 0
    });

    this.props.answerQuestion({
      ...currentQuestion,
      correct: isCorrect
    }).then(() => {
      this.props.getQuestion();
    });
  };

  onNext(currentQuestion) {
    const { questions } = this.props;
    const { tried, value } = this.state;
    const isCorrect = currentQuestion.name === value;
    const isEnd = Object.keys(questions).length === 9;

    // First try not correct
    if (!isCorrect && tried === 0) {
      this.setState({
        tried: 1
      });

      return;
    }

    // Second try still not correct
    if (!isCorrect && tried === 1) {
      this.setState({
        value: currentQuestion.name,
        timing: true
      });

      setTimeout(() => {
        if (isEnd) {
          this.context.router.push('quiz/result');
        } else {
          this.setState({ timing: false });
          this.answerQuestion(currentQuestion, isCorrect);
        }
      }, 1000);

      return;
    }

    // Response correct
    if (isEnd) {
      this.context.router.push('quiz/result');
    } else {
      this.answerQuestion(currentQuestion, isCorrect);
    }
  }

  onChangeInput = (evt) => {
    this.setState({
      value: evt.target.value
    });
  }

  render() {
    const { quiz, questions } = this.props;

    let lastQuestion = null;
    let current = 0;

    if (questions) {
      lastQuestion = questions[quiz.lastQuestionId];
      current = Object.keys(questions).length;
    }

    const pp = lastQuestion && lastQuestion.picturePaths.find(p => p.isCorrectPicture).picturePath;

    return (
      <div className={css(styles.container)}>
        <Progress current={current}/>
        <div className={css(styles.imageContainer)}>
          <img className={css(styles.picture)} src={pp} role="presentation"/>
        </div>
        <h1 className={css(styles.title)}>
          What's their name ?
        </h1>
        <Input
          onChange={this.onChangeInput}
          isCorrect={lastQuestion && lastQuestion.name === this.state.value}
          isWrong={this.state.tried === 1}
          value={this.state.value}/>
        <div className={css(styles.navigation)}>
          <SmallButton onClick={this.onGetAnswer}>
            Solution
          </SmallButton>
          <SmallButton onClick={this.onNext.bind(this, lastQuestion)} color="#1abc9c" disable={this.state.timing}>
            Next
          </SmallButton>
        </div>
      </div>
    );
  }
};

export default connect((state, props) => {
  const lastQuiz = state.quiz[state.quiz.length - 1];
  const lastQuestion = lastQuiz && lastQuiz.questions[lastQuiz.lastQuestionId];

  return {
    quiz: lastQuiz,
    questions: lastQuiz && lastQuiz.questions,
    lastQuestion
  }
}, dispatch => ({
  startQuiz: () => dispatch(startQuiz()),
  getQuestion: () => dispatch(getQuestion()),
  answerQuestion: (...args) => dispatch(answerQuestion(...args))
}))(Quiz);
