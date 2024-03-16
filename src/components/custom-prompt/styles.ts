import { StyleSheet } from 'react-native';
import { secondary, tertiary } from '../../constants/colors';
import { DEVICE_HEIGHT } from '../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    backgroundColor: tertiary,
    flexDirection: 'row',
    height: DEVICE_HEIGHT * 0.1,
    borderRadius: 16,
    alignItems: 'center'
  },
  icon: {
    width: DEVICE_HEIGHT * 0.06,
    height: DEVICE_HEIGHT * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: secondary,
    borderRadius: 16,
    marginRight: 16
  },
});

export default styles;
