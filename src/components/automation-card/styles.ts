import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT } from '../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    width: DEVICE_HEIGHT * 0.24,
    height: DEVICE_HEIGHT * 0.265,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12
  },
  image: {
    width: 28,
    height: 28,
    objectFit: 'contain',
  },
});

export default styles;
