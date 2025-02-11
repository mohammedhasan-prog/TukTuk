import React,{useContext} from 'react'
// import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom';

const UserProtectedWrrapper = ({children}) => {
  const token= localStorage.getItem('token');
    // const {user}= useContext(UserDataContext);
    const navigate = useNavigate();
    
    if(!token){
        navigate('/login')
    }
  return (
    <div>
     {children}
    </div>
  )
}

export default UserProtectedWrrapper
