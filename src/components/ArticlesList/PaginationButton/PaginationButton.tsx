import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

import COLORS from '../../../constants/colors';

interface PaginationButtonProps {
  label: string;
}

const PaginationButton: FC<PaginationButtonProps> = ({label}) => {
  const Label = () => {
    return <Text style={styles.label}>{label}</Text>;
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        mode="text"
        children={<Label />}
        onPress={() => console.log('press')}
      />
    </View>
  );
};

export default PaginationButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 120,
  },
  label: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
