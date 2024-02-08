import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  user: {},
};

const SET_USER = "SET_USER";
const UPDATE_USER_STANDS = "UPDATE_USER_STANDS";
const DELETE_USER_STANDS = "DELETE_USER_STANDS";

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload.user };
    case UPDATE_USER_STANDS:
      return {
        ...state,
        user: {
          ...state.user,
          newsStands: [...state.user.newsStands, action.payload],
        },
      };
    case DELETE_USER_STANDS:
      return {
        ...state,
        user: {
          ...state.user,
          newsStands: state.user.newsStands.filter(
            (stand) => stand !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export {
  UserProvider,
  useUserContext,
  SET_USER,
  UPDATE_USER_STANDS,
  DELETE_USER_STANDS,
};
