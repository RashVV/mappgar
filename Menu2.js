/*import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const menus = ['Premieres', 'All movies', 'TV series', 'Tape','Videos','News'].map(direction => (
  <Menu menuButton={<MenuButton>{direction}</MenuButton>}

  {id: 2,  categories:['Search movies', 'Collections', 'Recommendations', 'Search by name' ]},
  {id: 3,  categories:['Popular', 'My series', 'My calendar' ]},
  {id: 4,  categories:['Friends', 'Favorites' ]},
  {id: 5,  categories:['Trailers', 'Reviews' ]},
  {id: 6,  categories: []},

  <MenuItem onClick={handleClose}>
              {categoriess.map(category=>
               <MenuItem title={category.categories} key={categoriess.id}>
                 
                 {category.categories}</MenuItem>
                )}
  </MenuItem>
   const [anchorEl, setAnchorEl] = React.useState(false);
   const open = Boolean(anchorEl);

class SubMenuItems extends React.Component {
  constructor(props) {
      this.state = {
      categoriess: [
      {
          name: 'Premieres',
          categor1: 'In the movies',
          categor2: 'Online',
          categor3: 'Shortly',
          categor4: ''
      },
      {
          name: 'All movies',
          categor1: 'Search movies',   
          categor2: 'Collections',
          categor3: 'Recommendations',
          categor4: 'Search by name'
      },
      {
          name: 'TV series',
          categor1: 'Popular',  
          categor2: 'My series',
          categor3: 'My calendar',
          categor4: ''
      },
      {
          name: 'Tape',
          categor1: 'Friends', 
          categor2: 'Favorites',
          categor3: '',
          categor4: ''
      },
      {
          name: 'Videos',
          categor1: 'Trailers', 
          categor2: 'Reviews',
          categor3: '',
          categor4: '' 
      },
      {
          name: 'News',
          categor1: '', 
          categor2: '',
          categor3: '',
          categor4: ''

      },

  ]
  };
};

};
export default function Submenu( props ) {
    
  const { categoriess } = this.state;


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  

  const handleClose = () => {
      setAnchorEl(null);
     };
  const {name}=this.state.categoriess.name
return (
  <div>
      <Menu
      id={name}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      onClose={handleClose}
      
    >
        
    
     </Menu>  
  </div>
)
}

export default function Menu2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
<Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Серіали
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
        <MenuItem onClick={handleClose}>Популярні</MenuItem>
        <MenuItem onClick={handleClose}>Мої серіали</MenuItem>
        <MenuItem onClick={handleClose}>Мій календар</MenuItem>
      </Menu>
       </div>
       );
     }
     */