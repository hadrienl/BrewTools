import React, { useRef } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import List from '../List';
import { createAppContainer } from 'react-navigation';
import Item from '../Item';
import { useTranslation } from 'react-i18next';
import ItemsProvider from '../../components/Items';

export const Home = () => {
  const { t } = useTranslation();

  const Navigator = useRef(
    createAppContainer(
      createStackNavigator({
        List: {
          screen: List,
          navigationOptions: {
            title: t('list.title'),
          },
        },
        Item: {
          screen: Item,
          path: '/items/:id',
          navigationOptions: {
            title: t('item.title'),
          },
        },
      }),
    ),
  );

  return (
    <ItemsProvider>
      <Navigator.current />
    </ItemsProvider>
  );
};

export default Home;
