import React, { useContext, useEffect } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectedWrarapper = ({ children }) => {
  const token = localStorage.getItem("token");
  // const {user}= useContext(UserDataContext);
  const navigate = useNavigate();
  const { captain, setCaptain } =
    useContext(CaptainDataContext);
const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }),
    [token];

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        if (res.data.captain) {
          setLoading(false);
          setCaptain(res.data.captain);
        }
      }
    })
    .catch((err) => {
      localStorage.removeItem("token");
      navigate("/captain-login") });

    if(loading)return<div>Loading...</div>

  return <div>{children}</div>;
};

export default CaptainProtectedWrarapper;
