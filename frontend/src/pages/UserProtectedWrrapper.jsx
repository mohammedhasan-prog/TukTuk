import React,{useContext,useEffect} from 'react'
// import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom';

const UserProtectedWrrapper = ({children}) => {
  const token= localStorage.getItem('token');
    // const {user}= useContext(UserDataContext);
    const navigate = useNavigate();

    useEffect(()=>{
      if(!token){
        navigate('/login')
    }
    })
    
   
  return (
    <div>
     {children}
    </div>
  )
}

export default UserProtectedWrrapper
