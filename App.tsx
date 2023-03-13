import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider as ModalProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import RootRouter from './src/Router/RootRouter';
import store, {persistor} from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalProvider>
          <View style={styles.mainContainer}>
            <RootRouter />
          </View>
        </ModalProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
