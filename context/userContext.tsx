import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '@/types/user';

type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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