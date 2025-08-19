import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ✅ Store persistente con AsyncStorage
const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }), // guardar usuario
      logout: () => set({ user: null }), // limpiar sesión
    }),
    {
      name: 'auth-storage', // clave en AsyncStorage
      storage: createJSONStorage(() => AsyncStorage), // 👈 maneja async
    }
  )
);

export default useAuthStore;
