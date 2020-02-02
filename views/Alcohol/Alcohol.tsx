import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { useTranslation } from 'react-i18next';
import { useIntl } from 'react-intl';

import useBackup from '../../components/useBackup';
import { calculateAlcohol } from '../../services/alcohol';

export const Alcohol = () => {
  const intl = useIntl();
  const [firstDensity, setFirstDensity] = useBackup<number>(
    'firstDensity',
    1050,
  );
  const [lastDensity, setLastDensity] = useBackup<number>('lastDensity', 1010);
  const [sugar, setSugar] = useBackup<number>('sugar', 5);
  const [alcohol, setAlcohol] = useState('0');
  const { t } = useTranslation();

  useEffect(() => {
    setAlcohol(
      intl.formatNumber(
        calculateAlcohol(firstDensity / 1000, lastDensity / 1000, sugar),
        {
          maximumFractionDigits: 1,
          style: 'percent',
        },
      ),
    );
  }, [lastDensity, firstDensity, intl, sugar]);

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text>{t('alcohol.title')}</Text>
      </View>
      <View style={styles.line}>
        <View style={styles.row}>
          <Text>{t('alcohol.firstDensity')}</Text>
          <NumericInput
            initValue={firstDensity}
            onChange={setFirstDensity}
            rounded
            step={5}
          />
        </View>
      </View>
      <View style={styles.line}>
        <View style={styles.row}>
          <Text>{t('alcohol.lastDensity')}</Text>
          <NumericInput
            initValue={lastDensity}
            onChange={setLastDensity}
            rounded
            step={5}
          />
        </View>
      </View>
      <View style={styles.line}>
        <View style={styles.row}>
          <Text>{t('alcohol.sugar')}</Text>
          <View style={styles.line}>
            <View style={styles.sugarInput}>
              <NumericInput
                initValue={sugar}
                onChange={setSugar}
                rounded
                step={1}
              />
            </View>
            <Text style={styles.sugarText}>{t('alcohol.gl')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.line}>
        <Text style={styles.result}>{t('alcohol.result', { alcohol })}</Text>
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
  row: {
    flexDirection: 'column',
  },
  sugarInput: { marginLeft: 40 },
  sugarText: {
    fontSize: 20,
    marginTop: 30,
    marginLeft: 10,
    width: 30,
  },
  result: {
    fontSize: 30,
  },
});

export default Alcohol;
