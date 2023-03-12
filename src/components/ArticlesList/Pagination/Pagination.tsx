import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import COLORS from '../../../constants/colors';
import PaginationButton from '../PaginationButton/PaginationButton';

const Pagination = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <PaginationButton label="< Previous" />
        <PaginationButton label="Next >" />
      </View>
      <SafeAreaView style={styles.safeArea} />
    </>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.red,
  },
  safeArea: {
    backgroundColor: COLORS.red,
  },
  buttonContainer: {
    width: 120,
  },
});
