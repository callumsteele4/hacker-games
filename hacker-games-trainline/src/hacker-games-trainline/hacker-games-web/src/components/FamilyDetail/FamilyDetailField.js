import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: 'solid 1px #d4d4d4',
    lineHeight: '26px'
  },
  title: {
    color: colors.greyish,
    fontWeight: 'bold',
    fontSize: '20px'
  },
  info: {
    color: colors.brownishGrey,
    fontWeight: 'normal',
    fontSize: '16px'
  }
});

const FamilyDetailField = ({ title, info }) => (
  <div className={css(styles.row)}>
    <span className={css(styles.title)}>
      {title}
    </span>
    <span className={css(styles.info)}>
      {info}
    </span>
  </div>
);

export default FamilyDetailField;