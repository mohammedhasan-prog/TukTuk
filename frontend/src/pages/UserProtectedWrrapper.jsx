import React,{useContext} from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom';

const UserProtectedWrrapper = ({children}) => {
    const {user}= useContext(UserDataContext);
    const navigate = useNavigate();
    
    if(!user.email){
        navigate('/login')
    }
  return (
    <div>
     {children}
    </div>
  )
}

export default UserProtectedWrrapper
