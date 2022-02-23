import React, {useState} from 'react';
import { NavItems } from './NavItems';
import DropdownA from "./DropdownA";
import { Link } from "react-router-dom";




export default function MenuButtonA( ) {
    
  const [dropdown, setDropdown] = useState(false);

      return(
        <div className='btn__box2'>
          <ul className="nav-items">
           {NavItems.map((item) => {
            if (item.title === 'All movies'  ) {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <DropdownA />}
                </li>
              );
            }
            return (
              <div className='box2'>
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
              </div>
            );
          })}
        </ul>
        </div>
      )
  
}