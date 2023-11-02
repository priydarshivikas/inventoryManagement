import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


function LogoutButton() {
    const navigate = useNavigate();
  const navigateToLogin = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };
  return (
    <div>
      <Button onClick={navigateToLogin} variant="contained">
            Logout
          </Button>
    </div>
  )
}

export default LogoutButton;