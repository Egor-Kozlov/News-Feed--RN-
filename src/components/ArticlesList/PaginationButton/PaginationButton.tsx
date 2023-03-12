import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

import COLORS from '../../../constants/colors';

interface PaginationButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const PaginationButton: FC<PaginationButtonProps> = ({
  label,
  onPress,
  disabled,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        mode="text"
        onPress={onPress}
        disabled={disabled}
        labelStyle={
          disabled ? [styles.label, styles.labelInactive] : styles.label
        }>
        {label}
      </Button>
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
  labelInactive: {
    color: COLORS.gray,
  },
});
