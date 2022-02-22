/*import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MainMenu from './Header'
import MenuItem from '@mui/material/MenuItem';


export default function MovMenu( props, children ) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  console.log(props.title);

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <MenuItem onClick={handleClose}>
            <MainMenu category={props.category}>
              {props.category}
            </MainMenu>
            {props.children}
            </MenuItem>
          <MenuItem onClick={handleClose}>Онлайн</MenuItem>
      </Menu>
    </div>
  );
};*/
