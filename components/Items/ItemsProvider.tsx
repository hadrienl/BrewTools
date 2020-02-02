import React, { FC, useCallback } from 'react';
import uuid from 'uuid/v4';

import context from './context';
import useBackup from '../useBackup';

export const ItemsProvider: FC = ({ children }) => {
  const [items, setItems] = useBackup<TItem[]>('items', []);

  const getById = (idToFind: string) =>
    items.find(({ id }) => idToFind === id) || null;

  const addItem = useCallback(
    (item?: TItem) => {
      const id = uuid();
      const newItem = item || {
        id,
        createdAt: new Date(Date.now()),
        firstDensity: 1000,
        lastDensity: 1000,
        sugar: 0,
      };
      setItems([...items, newItem]);
      return newItem.id;
    },
    [items, setItems],
  );

  const updateItem = useCallback(
    (item: TItem) => {
      setItems([...items.filter(({ id }) => id !== item.id), item]);
    },
    [items, setItems],
  );

  const removeItem = useCallback(
    (item: TItem) => setItems(items.filter(i => i !== item)),
    [items, setItems],
  );

  return (
    <context.Provider
      value={{ items, getById, addItem, updateItem, removeItem }}>
      {children}
    </context.Provider>
  );
};

export default ItemsProvider;
