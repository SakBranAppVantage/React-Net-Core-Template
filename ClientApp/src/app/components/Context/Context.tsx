import React, { ReactNode, createContext, useState } from 'react';
export type Payload = {
  data?: UserPayload;
  updateData?: (newData: UserPayload) => void;
};
export type UserPayload = {
  role?: string;
  userId?: string;
  isSignedIn?: boolean;
};
// Create a new context
export const Context = createContext<Payload>({
  data: {
    role: 'admin',
    isSignedIn: false,
  },
});

// Optional: Create a custom hook for accessing the context
export const useCustomContext = () => React.useContext(Context);

type Props = {
  children: ReactNode;
};
// Create a context provider component
export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<UserPayload>({
    role: 'admin',
    isSignedIn: false,
  });

  const updateData = (newData: UserPayload) => {
    setData(newData);
  };

  return (
    <Context.Provider value={{ data, updateData }}>{children}</Context.Provider>
  );
};
