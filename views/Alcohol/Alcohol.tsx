import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { useTranslation } from 'react-i18next';
import { useIntl } from 'react-intl';

import { calculateAlcohol } from '../../services/alcohol';

interface IAlcoholProps {
  item: TItem;
  onChange: (item: TItem) => void;
}

export const Alcohol: FC<IAlcoholProps> = ({ item, onChange }) => {
  const intl = useIntl();

  const { t } = useTranslation();

  const alcohol = intl.formatNumber(
    calculateAlcohol(
      item.firstDensity / 1000,
      item.lastDensity / 1000,
      item.sugar,
    ),
    {
      maximumFractionDigits: 1,
      style: 'percent',
    },
  );

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View style={styles.row}>
          <Text>{t('alcohol.firstDensity')}</Text>
          <NumericInput
            initValue={item.firstDensity}
            onChange={value =>
              onChange({
                ...item,
                firstDensity: value,
              })
            }
            rounded
            step={5}
          />
        </View>
      </View>
      <View style={styles.line}>
        <View style={styles.row}>
          <Text>{t('alcohol.lastDensity')}</Text>
          <NumericInput
            initValue={item.lastDensity}
            onChange={value =>
              onChange({
                ...item,
                lastDensity: value,
              })
            }
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
                initValue={item.sugar}
                onChange={value =>
                  onChange({
                    ...item,
                    sugar: value,
                  })
                }
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
    padding: 50,
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
