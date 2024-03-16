import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT } from '../../constants/sizes';

const styles = StyleSheet.create({
  swipeModal: {
    height: DEVICE_HEIGHT * 0.6,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  signupText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  checkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberText: { color: '#fff', fontSize: 13 },
});

export default styles;
