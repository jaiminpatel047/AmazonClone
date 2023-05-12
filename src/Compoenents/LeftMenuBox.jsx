import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const LeftMenuBox = (props) => {
  return (
    <div className="leftbar-menu-box">
      <h3 className="title">{props.title}</h3>
      <ul>
        {props.listDetail.map((item) => (
          <li className="leftMenu-item" key={item.id}>
            <div>{item.menuItem}</div>
            <div>
              <ArrowForwardIosIcon />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const LeftMenuBox2 = (props) => {

  const { title } = props;

  return (
    <div className="leftbar-menu-box">
      <h3 className="title">{title}</h3>
      <ul>
      {props.listDetail.map((item) => (
          <li className="leftMenu-item" key={item.id}>
            <div>{item.menuItem}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
