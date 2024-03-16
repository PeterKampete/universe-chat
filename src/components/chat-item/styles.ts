import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';

const styles = StyleSheet.create({
  assistantContainer: {
    backgroundColor: 'rgba(255,255,255, 0.2)',
    height: 'auto',
    padding: 16,
    borderRadius: 14,
    position: 'relative',
    paddingBottom: DEVICE_HEIGHT * 0.05,
  },

  userContainer: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    width: '80%',
    alignSelf: 'flex-end',
    borderRadius: 14,
    borderBottomRightRadius: 0,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    position: 'absolute',
    bottom: -10,
    left: 16,
  },
  actionButton: {
    borderRadius: 15,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  actionText: {
    fontSize: 12,
    marginLeft: 4,
  },
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-evenly',
  },
  image: {
    width: DEVICE_WIDTH * 0.35,
    height: DEVICE_WIDTH * 0.35,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 14,
    marginTop: 10,
  },
});

export default styles;
