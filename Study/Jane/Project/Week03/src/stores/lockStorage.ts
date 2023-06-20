import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'appLock';

const lockStorage = {
  async get(): Promise<string | null> {
    try {
      const rawData = await AsyncStorage.getItem(key);
      if (!rawData) {
        return null;
      }
      const data = JSON.parse(rawData);
      console.log('success', data);
      return data;
    } catch (error) {
      console.log('Error retrieving app lock status:', error);
      return null;
    }
  },
  async set(lockResult: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(lockResult));
      console.log('success', lockResult);
    } catch (error) {
      console.log('Error setting app lock status:', error);
    }
  },
  async clear(): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
      console.log('clear');
    } catch (error) {
      console.log('Error clearing app lock status:', error);
    }
  },
};

export default lockStorage;
