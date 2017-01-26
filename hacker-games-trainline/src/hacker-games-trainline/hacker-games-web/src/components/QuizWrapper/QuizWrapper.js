import React from 'react';
import Header from '../Header/Header';
import Cross from '../../icons/cross';
import { browserHitory } from 'react-router';

class QuizWrapper extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  };

  onLeaveQuiz() {
    if (browserHitory) {
      browserHitory.goBack();
    } else {
      this.context.router.push('/');
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Header
          section="quiz"
          leftItem={(<Cross onClick={this.onLeaveQuiz.bind(this)}/>)}/>
          {
            children
          }
      </div>
    );
  }
}

export default QuizWrapper;
