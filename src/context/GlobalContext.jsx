import { createContext, useReducer } from "react";
export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, paylaod } = action;
  switch (type) {
    case "LOGIN":
      return { ...state, user: paylaod };
    case "LOGOUT":
      return { ...state, user: null };
    case "IS_AUTH_READY":
      return { ...state, isAuthReady: true };
    case "IS_PENDING":
      return { ...state, isPending: paylaod };
    case "ERROR":
      return { ...state, error: paylaod };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: false,
    isAuthReady: false,
    isPending: false,
    error: null,
  });
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
