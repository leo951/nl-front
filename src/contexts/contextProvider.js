import React, { useState } from 'react';
import Context from './context';

const ContextProvider = ({ children }) => {
  const [isModalLogin, setIsModalLogin] = useState(null);

  return (
    <Context.Provider value={{ isModalLogin, setIsModalLogin }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;