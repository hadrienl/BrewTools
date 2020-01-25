import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { IntlProvider } from 'react-intl';

import Alcohol from './views/Alcohol';
import './config/i18n';

const App: FC = () => {
  return (
    <IntlProvider locale="en">
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Alcohol />
        </SafeAreaView>
      </>
    </IntlProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
