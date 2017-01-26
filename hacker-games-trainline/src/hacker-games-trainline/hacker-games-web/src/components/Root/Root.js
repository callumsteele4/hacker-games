import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { getUser } from '../../actions/sessionActions';

const styles = StyleSheet.create({
  root: {
    width: 375,
    minHeight: '100vh',
    margin: '0px auto'
  }
});

class Root extends React.Component {
  componentWillMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    const { children } = this.props;

    return (
      <div className={css(styles.root)}>
        { children }
      </div>
    );
  }
}

export default connect(null, dispatch => ({
  getUser: () => { getUser()(dispatch) }
}))(Root);