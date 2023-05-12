import { useContext, useState } from "react";
import NavBarItem from "../Details/NavBarItem"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LeftBar from "./LeftBar";
import CartContext from "../ContextApi/CartContext";

const NavBar = () => {

  const { openButton }  = useContext(CartContext);

  return (
    <>
      <div id="Navbar-container" className="flexBox">
        <div className="leftBarSection">
            <div onClick={() => openButton()}><MenuIcon /></div>
            <div className="bold">All</div>
             <LeftBar/>
        </div>
        <div className="Navbar-menu">
            <ul>
                {
                  NavBarItem.map((item)=>(<li className="Navbar-menu-item" key={item.id}>{item.MenuItem}</li>))
                }
            </ul>
        </div>
        <div className="offer-section flexBox">
            <div>
                <p>CITADEL</p>
            </div>
            <div className="between-Border"></div>
            <div className="offer-date">
                <span className="date">ddd</span>
                <span className="count-down">ddd</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default NavBar