import s from './Menu.module.css'
import { useContext } from 'react';
import { MenuContext } from '../../../ContextProviderMenu';
import { NavLink } from 'react-router-dom';

function Menu()
{
    const {IsMenuActive} = useContext(MenuContext);
    console.log(s.menu);
    return (
    <div className={IsMenuActive ? String(s.active) + ' ' + String(s.menu) : String(s.disable) + ' ' + String(s.menu)}>
        <ul className={s.MenuUl}>

            <li className={s.MenuLi}><NavLink to="/">Мәдинә</NavLink></li>
            <li className={s.MenuLi}><NavLink to="/login">Көйләүләр</NavLink></li>
        </ul>
    </div>)
}

export default Menu;