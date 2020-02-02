import React, { FC } from 'react';
import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useTranslation } from 'react-i18next';

interface IAddProps {
  onPress: (event: GestureResponderEvent) => void;
}

export const Add: FC<IAddProps> = ({ onPress }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{t('list.add')}</Text>
      <Icon name="circle-with-plus" size={30} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 20,
  },
  text: {
    flex: 1,
    fontSize: 20,
  },
});

export default Add;
