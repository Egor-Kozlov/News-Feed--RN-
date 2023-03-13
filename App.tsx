import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider as ModalProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

import RootRouter from './src/Router/RootRouter';
import store from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <View style={styles.mainContainer}>
          <RootRouter />
        </View>
      </ModalProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
