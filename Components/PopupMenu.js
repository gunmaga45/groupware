import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputScreen from './InputScreen';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    Container: {
        width: '800px',
        height: '800px'
    },
    PopupButton: {
        width: '800px',
        height: '800px',
        disableRipple: 'true',
    },
});

export default function PopupMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  

  return (
    <div>
      <Button 
      aria-controls="simple-menu" 
      aria-haspopup="true" 
      onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        className = 'Container'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
        className = 'PopupButton'
        disableRipple = 'true'
        >
            <InputScreen
            title='First Cat'
            date='September.1.2020'
            />
        </MenuItem>
      </Menu>
    </div>
  );
}