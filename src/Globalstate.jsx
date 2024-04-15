
import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  loggedIn: false,
  email:"justeat@gmail.com"
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedIn: true };
    case 'LOGOUT':
      return { ...state, loggedIn: false };
      case 'UPDATE_EMAIL':
        return { ...state, email: action.payload };
    default:
      return state;
  }
};

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
