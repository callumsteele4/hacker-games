import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { styles as familyStyles } from './FamilyDetailStyles';

const FamilyDetailField = ({ title, info }) => (
  <div className={css(familyStyles.row)}>
    <span className={css(familyStyles.title)}>
      {title}
    </span>
    <span className={css(familyStyles.info)}>
      {info}
    </span>
  </div>
);

export default FamilyDetailField;