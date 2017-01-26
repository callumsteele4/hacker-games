import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import sample from '../../images/sample.png';

const styles = StyleSheet.create({
  container: {
    width: 250,
    margin: '20px auto',
    boxShadow: '0px 1px 8px 0px #d8d8d8'
  },
  name: {
    margin: 0,
    fontSize: 24,
    color: '#6c6c6c'
  },
  imageContainer: {
    height: 200,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  description: {
    backgroundColor: '#F5F4F4',
    padding: 20,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
  relation: {
    color: '#a09d9d',
    fontSize: 14
  }
});

const RelationCard = ({ relation }) => (
  <div className={css(styles.container)}>
    <div className={css(styles.imageContainer)}>
      <img className={css(styles.image)} src={sample}/>
    </div>
    <div className={css(styles.description)}>
      <h2 className={css(styles.name)}>{ relation.name }</h2>
      <div className={css(styles.relation)}>Relation: your {relation.relation}</div>
    </div>
  </div>
);

export default RelationCard;
