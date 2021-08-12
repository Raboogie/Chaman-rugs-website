import {Link} from "react-router-dom"
import {useState} from "react"
import {NavBarData} from "./NavBarData";
import './NavBar.css';

const NavBar = () => {
    // eslint-disable-next-line
    const [links, setLinks] = useState(NavBarData)
    return (
        <>
            <nav className="nav-bar">
                <div className="nav-logo">
                    <h1>CHAMAN</h1>
                    <h6>ANTIQUE RUG GALLERY</h6>
                </div>

                <div className="nav-bar-menu">
                    <ul>
                        {links.map(({id, title, url}) => {
                            return (
                                <li key={id} >
                                    <Link to={url}><button className="nav-bar-btn">{title}</button></Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </nav>
        </>
    );
};
export default NavBar;

