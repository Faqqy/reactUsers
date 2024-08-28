export interface User {
    id: number;
    name: string;
  }
  
export interface UserDetails {
    id: number;
    name: string;
    avatar: string;
    details: {
      city: string;
      company: string;
      position: string;
    };
  }
  
export interface UserContextType {
    selectedUser: User | null;
    setSelectedUser: (user: User | null) => void;
    userDetails: UserDetails | null;
    loading: boolean;
  }