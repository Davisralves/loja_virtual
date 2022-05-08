import React, { useState } from 'react';
import AppContext from './context';

function Provider({ children }) {
  const [username, setUsername] = useState('Default');
  const [admin, setAdmin] = useState(false);
  const contextValue = {
    username,
    setUsername,
    admin,
    setAdmin,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;