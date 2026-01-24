import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'tecnico' | 'caixa';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (data: { name: string; email: string; password: string; companyName: string }) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao@techfix.com',
  role: 'admin',
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (email && password) {
      const loggedUser = { ...mockUser, email };
      setUser(loggedUser);
      localStorage.setItem('user', JSON.stringify(loggedUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (data: { name: string; email: string; password: string; companyName: string }): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (data.email && data.password) {
      const newUser = { ...mockUser, name: data.name, email: data.email };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
