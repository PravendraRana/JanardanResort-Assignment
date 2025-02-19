import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  useTheme,
  Box,
} from '@mui/material';
import {
  ShoppingCart,
  Brightness4,
  Brightness7,
  Login,
  Logout,
} from '@mui/icons-material';
import SearchBar from './SearchBar'; 
import { GoogleLogin, googleLogout } from '@react-oauth/google'; 
import { jwtDecode } from 'jwt-decode';

const GoogleLoginComponent = ({ onLoginSuccess }) => {
  return (
    <GoogleLogin
      onSuccess={onLoginSuccess}
      onError={() => console.log('Login Failed')}
    />
  );
};

const Navbar = ({ 
  isLoggedIn, 
  onLogin, 
  onLogout, 
  darkMode, 
  toggleDarkMode, 
  cartCount,
  onSearch,
}) => {
  const theme = useTheme();
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (response) => {
    const decodedUser = jwtDecode(response.credential);
    setUser(decodedUser);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ShopApp
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mr: 28 }}>
          <SearchBar onSearch={onSearch} />
        </Box>
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        {/* {isLoggedIn ? (
          <Button 
            color="inherit" 
            onClick={onLogout} 
            startIcon={<Logout />}
          >
            Logout
          </Button>
        ) : (
          <Button 
            color="inherit" 
            onClick={onLogin} 
            startIcon={<Login />}
          >
            Login
          </Button>
        )} */}
        {user ? (
          <Button color="inherit" onClick={handleLogout} startIcon={<Logout />}>
            Logout
          </Button>
        ) : (
          <GoogleLoginComponent onLoginSuccess={handleLoginSuccess} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;