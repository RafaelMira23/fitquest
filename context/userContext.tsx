import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import * as SecureStore from 'expo-secure-store';
import { User } from '@/types/user';

type UserContextType = {
  user: User | null;
  token: string | null;
  login: (userData: User, authToken: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const [ storedUser, storedToken ] = await Promise.all([
          SecureStore.getItemAsync('user'),
          SecureStore.getItemAsync('token')
        ]);
        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        }
      } catch (error) {
        console.error("Error carregando as informações do usuário:", error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);
  
  const login = async (userData: User, authToken: string) => {
    try {
      await SecureStore.setItemAsync('user', JSON.stringify(userData));
      await SecureStore.setItemAsync('token', authToken);
      setUser(userData);
      setToken(authToken);
    } catch (error) {
      console.error("Error salvando as informações do usuário:", error);
    }
  }

  const logout = async () => {
    await SecureStore.deleteItemAsync('user');
    await SecureStore.deleteItemAsync('token');
    setUser(null);
    setToken(null);
  }

  return (
    <UserContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser precisa estar dentro do UserProvider");
  }

  return context;
}