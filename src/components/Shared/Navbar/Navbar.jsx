import s from './Navbar.module.css';
import burger_icon from './icons/burger.svg'

function Navbar() {
    return (
    <header>
        <div className={s.header_content}>
            <div className={s.left_part}>ИкеТель</div>
            <div className={s.right_part}>
                <ul>
                    <li>Мәдинә</li>
                    <li>Көйләүләр</li>
                </ul>
            </div>

            <div className={s.right_part_mobile}>
                <a href="">
                    <img src={burger_icon} alt="" />
                </a>
            </div>

        </div>


    </header>);
}

export default Navbar;