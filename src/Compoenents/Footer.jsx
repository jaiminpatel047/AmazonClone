import "./Footer.css";
import { GettoKnowUs, ConnectwithUs, MakeMoneywithUs, LetUsHelpYou } from "../Details/FooterDetail";
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Footer = () => {
  return (
    <div id="footer-container">
      <div className="btn" style={{padding: '1rem 0rem'}} onClick={() => { window.scrollTo({ top : 0, behavior: 'smooth' }) }}>Back to top</div>
      <div className="footer-section">
        <div className="footer-menu">
         <FooterUiLi heading='Get to Know Us' FootertInfom={GettoKnowUs}/>
         <FooterUiLi heading='Connect with Us' FootertInfom={ConnectwithUs}/>
         <FooterUiLi heading='Make Money with Us' FootertInfom={MakeMoneywithUs}/>
         <FooterUiLi heading='Let Us Help You' FootertInfom={LetUsHelpYou}/>
        </div>
      </div>
      <div className="saperater"></div>
      <div className="footer-section top-bottom-padding flexBox">
      <div className="logo">
            <Link to={'/'}>
               <img className="image" src="./image/amazonlog.png" alt="" />
            </Link>
      </div>
      <div className='footer-box'> 
             <LanguageIcon />
            <span>English</span>
            <span className="changeLANG"> 
               <ArrowDropUpIcon />
               <ArrowDropDownIcon />
            </span>
      </div>
      </div>
      <div className="footer-section conteries flexBox">
         <span>Australia</span>
         <span>Brazil</span>
         <span>Canada</span>
         <span>China</span>
         <span>France</span>
         <span>Germany</span>
         <span>Italy</span>
         <span>Japan</span>
         <span>Mexico</span>
         <span>Netherlands</span>
         <span>Poland</span>
         <span>Singapore</span>
         <span>Spain</span>
         <span>Turkey</span>
         <span>United Arab Emirates</span>
         <span>United Kingdom</span>
         <span>United States</span>
      </div>
    </div>
  );
};

export default Footer;

export const FooterUiLi = (props) => {
  const { heading, FootertInfom } = props;
  return (
    <>
      <ul>
        <h4>{heading}</h4>
        {FootertInfom.map((item) => (
          <li key={item.id}>{item.item1}</li>
        ))}
      </ul>
     </>
  );
};
