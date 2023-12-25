import "./MainCard.scss";

const MainCard = ({ children }) => {
  return (
    <div id="main-card" className="main-card">
      {children}
    </div>
  );
};

export default MainCard;
