import { StyleSheet } from 'react-native';
import {
  lightGrey,
  primary,
  secondary,
  tertiary2,
} from '../../constants/colors';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';

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
  image: {
    width: DEVICE_WIDTH * 0.2,
    height: DEVICE_WIDTH * 0.2,
    marginBottom: 10,
  },
  customPrompts: {
    gap: 16,
    marginTop: 20,
  },
  menuButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: 45,
    height: 45,
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
  },
  topText: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 20,
  },
  bottomInput: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: DEVICE_WIDTH,
    paddingVertical: 15,
    backgroundColor: '#000',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  sendIcon: {
    backgroundColor: primary,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 24,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  translateView: {
    alignSelf: 'center',
    width: '90%',
    paddingVertical: 30,
    backgroundColor: '#000',
  },
  thumbnail: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginRight: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
  langText: {
    color: '#fff',
    fontSize: 17
  }
});

export default styles;
