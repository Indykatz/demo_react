import { Link, Navigate } from "react-router-dom";
import { LiStyled, NavStyled } from "../styles/navbar.styled";

const Navbar = ({ user, setter }) => {
  return (
    <nav>
      {!user && <Navigate to="/" />}
      
      <NavStyled>
      
        <LiStyled>
          <Link to="/home">Home</Link>
        </LiStyled>
        <LiStyled>
          <Link to="/profile">Profile</Link>
        </LiStyled>
        <LiStyled>
          <Link to="/feed">Feed</Link>
        </LiStyled>
        <LiStyled>
          <Link to="/contests">Contest</Link>
        </LiStyled>
        <LiStyled
          onClick={() => {
            setter();
            localStorage.removeItem("myToken");
          }}
        >
          Log Out
        </LiStyled>
      
    </NavStyled>
    </nav>
  );
};

export default Navbar;
