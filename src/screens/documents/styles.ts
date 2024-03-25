import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import {
  darkBlue,
  extraDarkBlue,
  lightAccent,
  lightBlue,
} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tabNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    borderColor: 'rgba(42, 51, 67,0.2)',
    borderWidth: 1,
    gap: 2,
  },
  navText: {
    color: '#fff',
    fontSize: 15,
  },
  navItem: {
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'red',
  },
  statsCard: {
    width: '100%',
    height: DEVICE_HEIGHT * 0.23,
    marginTop: DEVICE_HEIGHT * 0.04,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  rightStatsData: {
    height: '100%',
    justifyContent: 'space-between',
  },
  statsLabel: {
    color: lightBlue,
    marginBottom: 4,
  },
  statsValue: {
    fontSize: 35,
    color: '#fff',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadTypes: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
    marginTop: DEVICE_HEIGHT * 0.14,
    marginBottom: DEVICE_HEIGHT * 0.04,
  },
  uploadType: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    height: DEVICE_HEIGHT * 0.08,
    width: '47.5%',
    alignItems: 'center',
  },
  uploadTypeTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  uploadTypeLabel: {
    color: lightAccent,
  },
  uploadTypeIcon: {
    height: '100%',
    width: DEVICE_WIDTH * 0.09,
    resizeMode: 'contain',
    marginRight: 10,
  },
  uploadTypePlusIcon: {
    padding: 4,
    backgroundColor: '#007517',
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentHeading: {
    fontWeight: 'bold',
    // fontSize: 16,
    color: darkBlue,
    marginBottom: 6,
  },
  recents: {
    gap: 16,
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: DEVICE_HEIGHT * 0.085,
  },
  recentDate: {
    padding: 4,
    position: 'absolute',
    right: 10,
    bottom: 10,
    color: lightAccent,
    fontSize: 12,
  },
  recentIcon: {
    width: DEVICE_WIDTH * 0.11,
    borderRadius: 10,
  },
  swipeModal: {
    width: DEVICE_WIDTH,
    paddingHorizontal: 20,
  },
  languagesView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingVertical: 16,
    justifyContent: 'space-evenly',
  },
  langItem: {
    borderWidth: 1,
    borderColor: darkBlue,
    borderRadius: 10,
    padding: 9,
    paddingHorizontal: 20,
  },
  translateView: {
    padding: 16,
    height: DEVICE_HEIGHT * 0.1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: DEVICE_HEIGHT * 0.04,
    borderRadius: 20,

  },
  translatingHeading: {},
  translatingLabel: {
    color: lightBlue,
    marginBottom: 4,
    fontSize: 11,
  },
  circularTranslateProgress: {},
});

export default styles;
