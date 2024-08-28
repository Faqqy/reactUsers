// UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserDetails, UserContextType } from '../common/types';

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (selectedUser) {
      setLoading(true);
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selectedUser.id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setUserDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
          setLoading(false);
        });
    }
  }, [selectedUser]);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser, userDetails, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
