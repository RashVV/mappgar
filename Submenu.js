/*import React, {useState} from 'react'
import { Menu, MenuItem } from '@mui/material'


class SubMenuItems extends React.Component {
    state = {
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

    render(  ) {
        const [anchorEl, setAnchorEl] = state => this.useState(null);
        const open = Boolean(anchorEl);
        const handleClose = () => {
            setAnchorEl(null);
           };

     

    return (
        
            <Menu
                id={SubMenuItems.name}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                onClose={handleClose}
                >   
                {this.state.categoriess.map((cat) =>
                <MenuItem key={this.name} title={this.cat}>{this.cat}</MenuItem>
                )}
            </Menu>  
        
    )
     };
};
        
    



export default SubMenuItems;


  
	*/