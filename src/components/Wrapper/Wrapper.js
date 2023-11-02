import React, {useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./wrapper.css";
import SideBar from "../SideBar/Index";
import Header from "../Header/Header";
import AuthContext from "../Contexts/AuthContexts";

function Wrapper({ children }) {
  const navigate = useNavigate(); 
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (!userInfo.token) {
      navigate("/login"); 
    }
  }, [userInfo, navigate]); 

  return (
    <>
      <SideBar />
      <Header />
      <div className="content-wrapper">{children}</div>
    </>
  );
}

export default Wrapper;
