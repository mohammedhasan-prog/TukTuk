import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';


const CaptainLogin = () => {
   const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userData, setUserData] = React.useState({});
    const {captain,setCaptain}=React.useContext(CaptainDataContext)
    const navigate = useNavigate();
  return (
      <div className="flex-col justify-center ">
          <div className="p-7 ">
            <img className="w-20 " src="logo.png" alt="" />
            <form onSubmit={async (e) =>{
              e.preventDefault();
              setUserData({email,password});

              const res= await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,userData);

              if(res.status === 200){
                const data=res.data;
                localStorage.setItem('token',data.token);
                setCaptain(data.captain);

                navigate('/captain-home');
              }

              // console.log(userData);
              setEmail("");
              setPassword("");
            }}>
              <h3 className="text-xl font-bold mb-2">What is Your email</h3>
              <input
                required
                type="email"
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                value={email}
                onChange={(e) => {setEmail(e.target.value)
              
                }}
                placeholder="email@gmail.com"
              />
              <h3 className="text-xl font-bold mb-2">Enter Password</h3>
    
              <div className="flex flex-col">
                <input
                  type="password"
                  value={password}
                  className="bg-[#eeeeee]  rounded px-4 py-2 w-full text-lg placeholder:text-base"
                  placeholder="password"
                  onChange={(e)=>{setPassword(e.target.value)
                  
                  }}
                />
                <button className="bg-black mt-5  text-xl text-white px-2 py-2 rounded ">
                  Login
                </button>
              </div>
            </form>
          </div>
          
          <div className=" flex gap-1 mt-1 justify-center ">
              
              <p className="text-lg mt-0">New here?</p>
              <Link to={"/captain-signup"} className="text-lg mt-0 text-blue-600">
              Register hear
              </Link>
            </div>

            <div className=" flex justify-center item-center">
            <Link
              to={"/login"}
              className="bg-[#c77028]  text-xl text-white px-4 py-2 rounded inline-block text-center w-[86%]"
            >
              Sign in as a User
            </Link>
            
          </div>
        </div>
  )
}

export default CaptainLogin
