import React from 'react'
import ButtonAtom from './ButtonAtom'
import { useDispatch, useSelector } from "react-redux";
import {userSetDetails} from "../redux/acions/user.action"
import { Redirect ,useHistory} from "react-router-dom";



function Logout() {

    const dispatch = useDispatch();
    const history = useHistory()

      const handleLogout = () => {
        dispatch(userSetDetails(null)) 
        // localStorage.clear();
        history.push('/')
      };


    return (
        <>
             <div className='home'>
                <div className='home-content'>
                    <h1>Welcome Home 👽</h1>
                    <ButtonAtom label='logout' type='button' handleClick={handleLogout} />
                </div>
             </div> 
        </>
    )
}

export default Logout
