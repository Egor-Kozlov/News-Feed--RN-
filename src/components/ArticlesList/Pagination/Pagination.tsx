import React, {FC} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';

import COLORS from '../../../constants/colors';
import PaginationButton from '../PaginationButton/PaginationButton';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  countOfPages: number;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  countOfPages,
}) => {
  const onPreviousPress = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPress = (): void => {
    if (currentPage < countOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <PaginationButton
          label="< Previous"
          onPress={onPreviousPress}
          disabled={currentPage === 1}
        />
        <View style={styles.paginationContainer}>
          {Array.from({length: countOfPages}, (_, index) => (
            <Text
              style={[
                styles.page,
                currentPage === index + 1 && styles.pageActive,
              ]}
              key={index}>
              {index + 1}
            </Text>
          ))}
        </View>
        <PaginationButton
          label="Next >"
          onPress={onNextPress}
          disabled={currentPage === countOfPages}
        />
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
  paginationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
  },
  page: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  pageActive: {
    fontSize: 15,
  },
});
