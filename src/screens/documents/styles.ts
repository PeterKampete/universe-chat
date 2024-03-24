import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { darkBlue, lightBlue } from '../../constants/colors';

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
    marginTop: DEVICE_HEIGHT * 0.05,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  rightStatsData: {
    height: '100%',
    justifyContent: 'space-between'
  },
  statsLabel: {
    color: lightBlue,
    marginBottom: 4
  },
  statsValue: {
    fontSize: 35,
    color: '#fff',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default styles;
