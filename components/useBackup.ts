import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const useBackup = <T = any>(
  key: string,
  initialValue: T,
): [T, (v: T) => void] => {
  const keyName = `@${key}`;
  const [value, setValue] = useState<T>(initialValue);

  const getter = useCallback(async () => {
    try {
      const v = await AsyncStorage.getItem(keyName);
      if (v) {
        setValue(JSON.parse(v));
      }
    } catch (e) {
      //
    }
  }, [keyName]);

  const setter = useCallback(
    async (newValue: T) => {
      setValue(newValue);
      try {
        await AsyncStorage.setItem(keyName, JSON.stringify(newValue));
      } catch (error) {
        // Error saving data
      }
    },
    [keyName],
  );

  useEffect(() => {
    getter();
  }, [getter]);

  return [value, setter];
};

export default useBackup;
