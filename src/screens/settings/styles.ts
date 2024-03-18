import { StyleSheet } from 'react-native';
import { secondary, tertiary2 } from '../../constants/colors';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';

const styles = StyleSheet.create({
  image: {
    width: DEVICE_WIDTH * 0.85,
    height: DEVICE_WIDTH * 0.85,
    alignSelf: 'center',
    marginBottom: 30,
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginRight: 7,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginBottom: DEVICE_HEIGHT * 0.04,
  },
});

export default styles;
