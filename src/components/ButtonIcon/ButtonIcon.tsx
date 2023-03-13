import React, {FC} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

import COLORS from '../../constants/colors';

interface IButtonIconProps {
  label: string;
  iconName: string;
  onPress: () => void;
}

const ButtonIcon: FC<IButtonIconProps> = ({label, iconName, onPress}) => {
  return (
    <View>
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
