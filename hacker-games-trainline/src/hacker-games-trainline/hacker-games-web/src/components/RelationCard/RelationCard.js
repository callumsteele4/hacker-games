import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import sample from '../../images/sample.png';

const styles = StyleSheet.create({
  container: {
    width: 250,
    margin: '20px auto'
  },
  name: {
    margin: 0
  },
  imageContainer: {
    height: 200,
    overflow: 'hidden'
  },
  image: {
    width: '100%'
  },
  description: {
    backgroundColor: '#F5F4F4',
    padding: 20,
  }
});

const RelationCard = ({ relation }) => (
  <div className={css(styles.container)}>
    <div className={css(styles.imageContainer)}>
      <img className={css(styles.image)} src={sample}/>
    </div>
    <div className={css(styles.description)}>
      <h2 className={css(styles.name)}>{ relation.name }</h2>
      <div>Relation: your {relation.relation}</div>
    </div>
  </div>
);

export default RelationCard;
