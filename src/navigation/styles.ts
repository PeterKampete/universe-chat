import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flexRow: { flexDirection: 'row', alignItems: 'center' },
  hairline: {
    height: 0.3,
    width: '100%',
    backgroundColor: 'grey',
    position: 'relative',
    bottom: 1,
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
    justifyContent: 'space-between',
  },
  bottomView: {
    width: '100%',
    padding: 20,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#000',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 25
  },
});

export default styles;
