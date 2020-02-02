import React, { FC } from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  GestureResponderEvent,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useIntl } from 'react-intl';
import { useTranslation } from 'react-i18next';

interface IListItemProps {
  onPress: (event: GestureResponderEvent) => void;
  item: TItem;
}
export const ListItem: FC<IListItemProps> = ({
  onPress,
  item: { firstDensity, lastDensity, createdAt },
}) => {
  const { t } = useTranslation();
  const Intl = useIntl();

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.touchableContainer}
      underlayColor="white">
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {t('list.item.title', { date: Intl.formatDate(createdAt) })}
          </Text>
          <Text style={styles.subText}>
            {firstDensity} / {lastDensity}
          </Text>
        </View>
        <Icon name="chevron-right" size={30} color="black" />
      </View>
    </TouchableHighlight>
  );
};

interface IListItemOptionsProps {
  onDelete: () => void;
}

export const ListItemOptions: FC<IListItemOptionsProps> = ({ onDelete }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.optionsContainer}>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>{t('list.item.delete')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 20,
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  subText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  deleteButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 75,
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default ListItem;
