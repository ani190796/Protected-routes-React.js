import { UserActionTypes } from '../acions/user.action';

const INITIAL_STATE = {
  details: null,
};



const userReducer = (state = INITIAL_STATE, action) => {
//   console.log(action.payload,'ani')
  switch (action.type) {
     case UserActionTypes.USER_SET_DETAILS:
          return {
              ...state,
              details:action.payload,
          };
          default:
               return state;
  }
};

export default userReducer;
