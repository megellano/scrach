import React from 'react';
import './Menu.css';

function Menu(props) {
  return (
    <div  className={props.menuopen ? 'menu_block active': 'menu_block'}>
        <div className='menu_block_wrap'>
          <div className='menu_add_wrap'>
            <a href="/add" className='menu_add_link'>Add photo</a>
          </div>
          <div className='menu_tag_wrap'>
            <ul>
              <li className='menu_tag_li'>
                 <a href="/tag/boobs" className='menu_tag_link'>Boobs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Menu;