import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

export default StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 15,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    color: COLORS.blue_dark,
  },
  inputContainer: {
    marginTop: 10,
  },
  actionsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
