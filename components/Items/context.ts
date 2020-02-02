import { createContext } from 'react';

export default createContext<{
  items: TItem[];
  getById:(id: string) => TItem | null;
  updateItem: (id: TItem) => void;
  addItem: (item?: TItem) => string;
  removeItem: (item: TItem) => void;
}>({
  items: [],
  getById: () => null,
  updateItem() {},
  addItem: () => '',
  removeItem() {},
});
