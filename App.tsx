import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Alcohol from './views/Alcohol';
import './config/i18n';

const App: FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Alcohol />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
