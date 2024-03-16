import { StyleSheet } from 'react-native';
import { secondary, tertiary2 } from '../../constants/colors';
import { DEVICE_WIDTH } from '../../constants/sizes';

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
  animatedBall: {
    width: DEVICE_WIDTH * 0.15,
    height: DEVICE_WIDTH * 0.15,
    marginBottom: 10,
    marginRight: 20,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  recent: {
    padding: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
  },
});

export default styles;
