import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  useTheme,
} from '@mui/material';
import {
  ShoppingCart,
  Brightness4,
  Brightness7,
  Login,
  Logout,
} from '@mui/icons-material';

const Navbar = ({ 
  isLoggedIn, 
  onLogin, 
  onLogout, 
  darkMode, 
  toggleDarkMode, 
  cartCount
}) => {
  const theme = useTheme();
  
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ShopApp
        </Typography>
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        {isLoggedIn ? (
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;