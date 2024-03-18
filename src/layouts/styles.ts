import { StyleSheet } from 'react-native';
import { tertiary2 } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  patch: {
    width: 160,
    height: 160,
    borderRadius: 100,
    backgroundColor: tertiary2,
  },
});

export default styles;
