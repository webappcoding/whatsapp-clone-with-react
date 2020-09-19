import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const UserContext = createContext();

// Wrap our app and provide the Data layer
export const UserContextProvider = ({ reducer, initialState, children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);

// Pull information from the data layer
export const useUserState = () => useContext(UserContext);
