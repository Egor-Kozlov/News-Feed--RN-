import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Portal, Modal, TextInput} from 'react-native-paper';

import COLORS from '../../constants/colors';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

interface ModalWindowProps {
  visible: boolean;
  onDismiss: () => void;
  onEditArticle: (title: string) => void;
}

const ModalWindow: FC<ModalWindowProps> = ({
  visible,
  onDismiss,
  onEditArticle,
}) => {
  const [title, setTitle] = useState<string>();

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.container}>
        <Text style={styles.title}>Edit article title:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label="New title"
            value={title}
            onChange={event => {
              setTitle(event.nativeEvent.text);
            }}
          />
        </View>
        <View style={styles.actionsContainer}>
          <ButtonIcon
            iconName="check"
            label="Save"
            onPress={() => {
              onEditArticle(title);
              setTitle('');
            }}
          />
          <ButtonIcon iconName="close" label="Cancel" onPress={onDismiss} />
        </View>
      </Modal>
    </Portal>
  );
};

export default ModalWindow;

const styles = StyleSheet.create({
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
