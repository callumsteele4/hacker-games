import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';
import { styles as familyStyles } from './FamilyDetailStyles';

const styles = StyleSheet.create({
  relationRow: {
    padding: '10px 20px',
    borderBottom: 0,
    display: 'block',
  },
  relationContainer: {
    width: '100px',
    textAlign: 'center',
    padding: '0 10px 17px 10px'
  },
  relationItemsContainer: {
    display: 'flex',
  },
  thumbnailContainer: {
    width: '75px',
    height: '75px',
    overflow: 'hidden',
    borderRadius: '50%',
    margin: '10px auto'
  },
  thumbnail: {
    width: '75px',
  },
  name: {
    color: '#6d6d6d'
  }
});

class RelationField extends React.Component {
  render() {
    const { title, relations } = this.props;
    if(!relations) {
      return null;
    }

    const relationItems = relations.map((rel) => (
      <div key={rel.id} className={css(styles.relationContainer)}>
        <div className={css(styles.thumbnailContainer)}>
          <img className={css(styles.thumbnail)} src={rel && rel.picturePath} alt={rel.name}/>
        </div>
        <div className={css(styles.name)}>
          {rel.name}
        </div>
      </div>
    ));
    return(
      <div className={css(styles.relationRow)}>
        <div className={css(familyStyles.title)}>
          {title}
        </div>
        <div className={css(styles.relationItemsContainer)}>
          {relationItems}
        </div>
      </div>
    )
  }
};

const relationId = (state, props) => {
  const relations = props.connections && props.connections.map((con) => {
    if (con === 0 ) {
      return state.session.user
    }

    return state.users[con]
  });

  return {
    relations
  };
}

export default connect(relationId, null)(RelationField);
