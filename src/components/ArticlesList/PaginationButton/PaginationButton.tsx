import React, {FC} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

import styles from './styles';

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
