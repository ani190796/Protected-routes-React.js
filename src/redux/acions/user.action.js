    
    // import { hashHistory } from "../../AppRouter";


    export const UserActionTypes = {
        USER_SET_DETAILS: 'USER_SET_DETAILS',
    };
  
    export const userSetDetails = (user) => ({
        type: UserActionTypes.USER_SET_DETAILS,
        payload: user,
    });



  
    