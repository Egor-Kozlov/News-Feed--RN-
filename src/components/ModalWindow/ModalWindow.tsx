import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {Portal, Modal, TextInput} from 'react-native-paper';

import ButtonIcon from '../ButtonIcon/ButtonIcon';

import styles from './styles';

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
