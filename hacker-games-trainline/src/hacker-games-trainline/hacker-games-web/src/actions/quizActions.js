import { START_QUIZ, ADD_QUESTION, ADD_RESPONSE } from '../constants/quizConstants';
import config from '../config.json';

const addQuestion = (payload) => ({
  type: ADD_QUESTION,
  payload
});

const addResponse = (questionId, correct) => ({
  type: ADD_RESPONSE,
  payload: {
    questionId,
    correct
  }
});

const startQuizRed = (question) => ({
  type: START_QUIZ,
  payload: question
});

export const startQuiz = () => dispatch => {
  return fetch(`${config.apiUrl}/questions`)
  .then(res => res.json())
  .then(res => dispatch(startQuizRed(res)))
};

export const getQuestion = () => dispatch => {
  return fetch(`${config.apiUrl}/questions`)
  .then(res => res.json())
  .then(res => dispatch(addQuestion(res)))
};

export const answerQuestion = (answer) => dispatch => {
  return fetch(`${config.apiUrl}/questions`, {
    method: 'POST',
    body: JSON.stringify(answer),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
    }
  })
  .then(res => dispatch(addResponse(answer.guid, answer.correct)))
};
