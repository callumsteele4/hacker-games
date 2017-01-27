import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
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