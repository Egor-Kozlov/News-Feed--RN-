import {StyleSheet} from 'react-native';

import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.gray,
  },
  titleContainer: {
    width: '100%',
    paddingLeft: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.blue_dark,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
