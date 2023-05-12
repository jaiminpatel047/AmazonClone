import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { LeftMenuBox, LeftMenuBox2 } from './LeftMenuBox';
import { useContext } from 'react'
import { LeftBarItem, shopByCategory, ProgramsFeatures, Trending} from '../Details/LeftBarItem'
import Context from "../ContextApi/Context";
import CartContext from "../ContextApi/CartContext";

const LeftBar = () => {

  const {open, closeButton}  = useContext(CartContext);
  // function close(){
  //     let close = document.querySelector(`.leftBar-section`);
  //     let close2 = document.querySelector(`.leftBar-container`);
  //     console.log('close')
  //     close.classList.remove('active')
  //     close2.classList.remove('active')
  // }
  return (
    <>
      <div className={`leftBar-section ${open ? "active" : ''}`}>
        <div className={`leftBar-container ${open ? "active" : ''}`}>
            <div className="leftBar-header top-bottom-padding flexBox">
                <div className="avtar-section ">
                    <AccountCircleIcon />
                </div>
                <div><span>Hello, sign In</span></div>
            </div>
            <div className="leftBar-information">
                <LeftMenuBox2 title="Trending" listDetail={Trending}/>
                <LeftMenuBox title='Digital Content And Devices' listDetail={LeftBarItem} />
                <LeftMenuBox title='Shop By Category' listDetail={shopByCategory} />
                <LeftMenuBox title='Programs & Features' listDetail={ProgramsFeatures} />
            </div>

          <button className="leftbar-close-btn" onClick={() => closeButton()}>
            <CloseIcon className="leftBar-closeIcon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftBar;

// onClick={toggleButton}
