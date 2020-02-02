import React, { useContext, useEffect, useState } from 'react';
import { NavigationContext } from 'react-navigation';
import { Text } from 'react-native';
import { ItemsContext } from '../../components/Items';
import Alcohol from '../Alcohol';

export const Item = () => {
  const navigation = useContext(NavigationContext);
  const id = navigation.getParam('id');
  const { getById, updateItem } = useContext(ItemsContext);
  const [item, setItem] = useState<TItem | null>(null);
  console.log(item);
  useEffect(() => {
    setItem(getById(id));
  }, [getById, id]);

  const save = (newItem: TItem) => {
    updateItem(newItem);
  };

  if (!item) {
    return <Text>Wait</Text>;
  }

  return <Alcohol item={item} onChange={save} />;
};

export default Item;
