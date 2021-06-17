import {React} from '../../imports/common-imports';
import {navItems} from './nav-items';
import '../../stylesheets/Navbar/navbar.css'
import {CgMenu} from '../../imports/icons';
const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-menu">
                <CgMenu/>
            </div>
            <div className="nav-items">
                {navItems.map(items => <div className='items'>{items.icon ? items.icon : items.name}</div>)}
            </div>
        </div>
    );
}

export default Navbar;