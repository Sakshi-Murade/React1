import React from 'react';
import { AppBar, Toolbar, Typography, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ cartSize }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196F3' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Food Website
        </Typography>
        <Badge badgeContent={cartSize} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;