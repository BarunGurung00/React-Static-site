import image from "./Assets/logo.png";

function Header() {
  const HeaderStyle = {
    width: "100%",
    height: "",
    display: "flex",
    "justify-content": "space-between",
    padding: "0 15px",
    position: 'fixed',
    top: '0'
  };
  const NavStyle = {
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "list-style": "none",
    "column-gap": "10px",
  };
  return (
    <header style={HeaderStyle}>
      <img src={image} height="69px" width="" alt="React logo" />
      <nav>
        <ul style={NavStyle}>
          <li>Home</li>
          <li>About</li>
          <li>Info</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
