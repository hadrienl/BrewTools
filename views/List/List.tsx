import React, { FC, useContext } from 'react';
import { ScrollView } from 'react-native';
import { NavigationContext } from 'react-navigation';
import { SwipeListView } from 'react-native-swipe-list-view';

import { ItemsContext } from '../../components/Items';
import ListItem, { ListItemOptions } from './ListItem';
import Add from './Add';

export const List: FC = () => {
  const navigation = useContext(NavigationContext);
  const { items, addItem, removeItem } = useContext(ItemsContext);

  const add = () => {
    navigation.navigate('Item', {
      id: addItem(),
    });
  };

  return (
    <ScrollView>
      <Add onPress={add} />
      <SwipeListView
        inverted
        data={items}
        renderItem={({ item }) => (
          <ListItem
            onPress={() =>
              navigation.navigate('Item', {
                id: item.id,
              })
            }
            item={item}
          />
        )}
        renderHiddenItem={({ item }) => (
          <ListItemOptions onDelete={() => removeItem(item)} />
        )}
        rightOpenValue={-75}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default List;
