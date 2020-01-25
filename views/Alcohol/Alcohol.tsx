import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { useTranslation } from 'react-i18next';
import { useIntl } from 'react-intl';

import { calculateAlcohol } from '../../services/alcohol';

export const Alcohol = () => {
  const intl = useIntl();
  const [densityMoult, setDensityMoult] = useState(1000);
  const [densityBeer, setDensityBeer] = useState(1000);
  const [sugar, setSugar] = useState(0);
  const [alcohol, setAlcohol] = useState('0');
  const { t } = useTranslation();

  useEffect(() => {
    setAlcohol(
      intl.formatNumber(
        calculateAlcohol(densityMoult / 1000, densityBeer / 1000, sugar),
        {
          maximumFractionDigits: 1,
          style: 'percent',
        },
      ),
    );
  }, [densityBeer, densityMoult, intl, sugar]);

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text>{t('alcohol.title')}</Text>
      </View>
      <View style={styles.line}>
        <NumericInput
          value={densityMoult}
          onChange={setDensityMoult}
          rounded
          step={5}
        />
      </View>
      <View style={styles.line}>
        <NumericInput
          value={densityBeer}
          onChange={setDensityBeer}
          rounded
          step={5}
        />
      </View>
      <View style={styles.line}>
        <NumericInput value={sugar} onChange={setSugar} rounded step={1} />
        <Text>g</Text>
      </View>
      <View style={styles.line}>
        <Text>{t('alcohol.result', { alcohol })}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  line: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Alcohol;
