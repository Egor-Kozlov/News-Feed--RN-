import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

import COLORS from '../../constants/colors';

interface ButtonIconProps {
  label: string;
  iconName: string;
  onPress: () => void;
}

const ButtonIcon: FC<ButtonIconProps> = ({label, iconName, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        icon={iconName}
        onPress={onPress}
        theme={{
          colors: {
            primary: COLORS.blue_dark,
          },
        }}>
        {label}
      </Button>
    </View>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  buttonContainer: {},
});
