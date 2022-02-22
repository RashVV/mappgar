/*import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Menu1() {
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
        Всі фільми
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
        <MenuItem onClick={handleClose}>Пошук фільмів</MenuItem>
        <MenuItem onClick={handleClose}>Колекції</MenuItem>
        <MenuItem onClick={handleClose}>Рекомендації</MenuItem>
        <MenuItem onClick={handleClose}>Пошук за іменем</MenuItem>
      </Menu>
       </div>
       );
     }
     const menuItems =[
      {id:1, title:'Premieres', categories:['In the movies', 'Online', 'Shortly' ]},
      {id:2, title:'All movies', categories:['Search movies', 'Collections', 'Recommendations', 'Search by name' ]},
      {id:3, title:'TV series', categories:['Popular', 'My series', 'My calendar' ]},
      {id:4, title:'Tape', categories:['Friends', 'Favorites' ]},
      {id:5, title:'Videos', categories:['Trailers', 'Reviews' ]},
      {id:6, title:'News', categories: []},
    ];
     <MainMenu menuItems={menuItems}>
        {menuItems.map((menuItem) => (
          <MovMenu title={menuItem.title} key={menuItem.id} >
            {menuItem.categories.map((category) => (
            <MenuItem category={category} key={menuItem.id} />
          ))}
          </MovMenu>
        ))}
      </MainMenu>
      const submenus= [
        {id:1, ['In the movies', 'Online', 'Shortly']},
        {id:2, ['Search movies', 'Collections', 'Recommendations', 'Search by name']},
        {id:3, ['Popular', 'My series', 'My calendar']},
        {id:4, ['Friends', 'Favorites']},
        {id:5, ['Trailers', 'Reviews']},
        {id:6, []},
      ]
_______________________________________
      const menus  = [
        {id: 1, title: 'Premieres', },
        {id: 2, title: 'All movies'},
        {id: 3, title: 'TV series'},
        {id: 4, title: 'Tape'},
        {id: 5, title: 'Videos'},
        {id: 6, title: 'News'},
      ]
 
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        };
        return (
          <div className='maine__menuList'>    
              {menus.map(menu=>(
                <Button 
                  variant={menu.title} 
                  key={menu.id}
                  aria-controls={open ? {...menu.title} : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}>
                      {menu.title}
                </Button>
              ))}   
               
          </div>
        )
        */