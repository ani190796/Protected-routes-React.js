import React, { useState } from 'react'
import ButtonAtom from '../components/ButtonAtom';
import InputAtom from '../components/InputAtom';
import { useDispatch, useSelector } from "react-redux";
import {userSetDetails} from "../redux/acions/user.action"
import { Redirect ,useHistory} from "react-router-dom";
import { connect } from 'react-redux';


function Home({dispatchUserSetDetails}) {

    const history = useHistory()

    const dispatch = useDispatch();
    // const tokens = useSelector(state => state.user.details.token);
   
    // console.log(tokens)

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(1);


    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(userSetDetails({userName, password, token})) 
        // dispatchUserSetDetails({ userName, password, token: 1 });
        history.push('/home')
        // e.target.reset();
        // setUserName('')
        // setPassword("")
    }
 
    // if (tokens) return <Redirect to="/login" />;
    
    return (
        <>
              <div className='login-wrap'>
                <div className='login-content'>
                    <h1>Welcome</h1>
                         <p>Please Login to your account</p>
                              <form onSubmit={handleSubmit}>
                                    <InputAtom
                                        required
                                        label='User Name'
                                        placeholder='john doe'
                                        id='userName'
                                        name='username'
                                        handleInput={(e) => setUserName(e.target.value)}
                                        value={userName}
                                        type='text'
                                    />
                                    <InputAtom
                                        required
                                        label='Password'
                                        placeholder='xxxxx'
                                        id='password'
                                        name='password'
                                        handleInput={(e) => setPassword(e.target.value)}
                                        value={password}
                                        type='password'
                                    />
                                    <ButtonAtom label='Login' />
                                </form>
                    </div>
                </div>
        </>
    )
}

export default Home


// const mapDispatchToProps = (dispatch) => ({
//     dispatchUserSetDetails: (user) => dispatch(userSetDetails(user)),
//   });
  
//   export default connect(null, mapDispatchToProps)(Home);