import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export const sections = {
  quiz: {
    label: 'Quiz',
    color: '#1ABC9C'
  },
  family: {
    label: 'Family',
    color: '#3498DB'
  },
  add: {
    label: 'Add',
    color: '#F39C12'
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 50,
    display: 'flex',
    justifyContent: 'column'
  },
  title: {
    color: 'white',
    fontFamily: 'TL-Circular',
    margin: 0,
    textAlign: 'right'
  },
  item: {
    flex: 1,
    display: 'flex',
    alignSelf: 'center'
  }
});

// section: 'quiz' | 'family' | 'add'
const Header = ({ section, leftItem }) => {
  const currentSection = sections[section];

  return (
    <div
      className={css(styles.container)}
      style={{ backgroundColor: currentSection.color }}>
      <div className={css(styles.item)}>{ leftItem }</div>
      <div className={css(styles.item)} style={{ justifyContent: 'flex-end'}}>
        <h2 className={css(styles.title)}>{ currentSection.label }</h2>
      </div>
    </div>
  );
};

export default Header;
