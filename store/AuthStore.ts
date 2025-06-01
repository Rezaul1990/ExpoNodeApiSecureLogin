import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string | null;
  role: string | null;
  user: User | null;
  setAuth: (token: string, role: string, user: User) => void;
  clearAuth: () => Promise<void>;
  hydrateAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  role: null,
  user: null,

  setAuth: (token, role, user) => {
    // AsyncStorage doesn't need to be awaited here
    AsyncStorage.setItem('token', token);
    AsyncStorage.setItem('role', role);
    AsyncStorage.setItem('user', JSON.stringify(user));

    set({ token, role, user });
  },

  clearAuth: async () => {
    await AsyncStorage.multiRemove(['token', 'role', 'user']);
    set({ token: null, role: null, user: null });
  },

  hydrateAuth: async () => {
    const token = await AsyncStorage.getItem('token');
    const role = await AsyncStorage.getItem('role');
    const userJson = await AsyncStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;

    set({ token, role, user });
  },
}));
