import s from './Menu.module.css'
import { useContext } from 'react';
import { MenuContext } from '../../../ContextProviderMenu';
function Menu()
{
    const {IsMenuActive} = useContext(MenuContext);
    console.log(s.menu);
    return (
    <div className={IsMenuActive ? String(s.active) + ' ' + String(s.menu) : String(s.disable) + ' ' + String(s.menu)}>
        <ul>
            <li>Мәдинә</li>
            <li>Көйләүләр</li>
        </ul>
    </div>)
}

export default Menu;