import { colors } from './colors';
import { StyleSheet } from 'aphrodite/no-important';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,

  },
  largeBtn: {
    color: colors.white,
    width: '320px',
    height: '90px',
    borderRadius: '8px',
    fontSize: '24px',
    border: 0,
    margin: '12px 0',
    display: 'block'
  },
  topaz: {
    backgroundColor: colors.topaz
  },
  darkSkyBlue: {
    backgroundColor: colors.darkSkyBlue
  },
  squash: {
    backgroundColor: colors.squash
  }
});
