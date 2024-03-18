import { StyleSheet } from 'react-native';
import { secondary, tertiary2 } from '../../constants/colors';
import { DEVICE_WIDTH } from '../../constants/sizes';

const styles = StyleSheet.create({
  image: {
    width: DEVICE_WIDTH * 0.85,
    height: DEVICE_WIDTH * 0.85,
    alignSelf: 'center',
    marginBottom: 30,
  },
});

export default styles;
