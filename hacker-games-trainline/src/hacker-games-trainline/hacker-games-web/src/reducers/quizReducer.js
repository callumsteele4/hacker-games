import { START_QUIZ, ADD_QUESTION, ADD_RESPONSE } from '../constants/quizConstants';

const newQuiz = (question) => ({
  max: 10,
  questions: { [question.guid]: question },
  lastQuestionId: question.guid
});

const initialState = [];

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case START_QUIZ: {
      return [].concat(state, [newQuiz(payload)]);
    }

    case ADD_QUESTION: {
      const mutableState = [].concat(state);

      const last = mutableState[mutableState.length - 1];
      last.questions[payload.guid] = payload;
      last.lastQuestionId = payload.guid;
      mutableState[mutableState.length - 1] = last;

      return mutableState;
    }

    case ADD_RESPONSE: {
      const mutableState = [].concat(state);

      const last = mutableState[mutableState.length - 1];
      const { questionId, correct } = payload;
      last.questions[questionId].correct = correct;

      return mutableState;
    }

    default: {
      return state;
    }
  }
}
