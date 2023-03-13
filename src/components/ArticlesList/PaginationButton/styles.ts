import {StyleSheet} from 'react-native';

import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  buttonContainer: {
    width: 120,
  },
  label: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  labelInactive: {
    color: COLORS.gray,
  },
});
