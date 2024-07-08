import { Link, useMatch, useResolvedPath } from "react-router-dom";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";

export default function Navbar() {
  return (
    <nav className="nav navbar">
      <Container>
        <Link to="/" className="site-title">
          <div className="logo"></div>
          <h2>
            <i class="bi bi-hospital px-2"></i>
            Clinic Management
          </h2>
        </Link>
        <ul>
          <CustomLink to="/home">
            <i class="bi bi-house-door-fill px-1"></i> Home
          </CustomLink>
          <CustomLink to="/hospital">
            <i class="bi bi-hospital px-1"></i> Hospital
          </CustomLink>
          <CustomLink to="/patients">
            <i class="bi bi-clipboard2-plus-fill px-1"></i> Patient
          </CustomLink>

          <CustomLink to="/city">
            <i class="bi bi-stoplights-fill px-1"></i> City
          </CustomLink>
          <CustomLink to="/contact">
            <i class="bi bi-telephone-forward-fill px-1"></i> Contact
          </CustomLink>
        </ul>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Contents
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/home">Home</Dropdown.Item>
            <Dropdown.Item href="/hospital">Hospital</Dropdown.Item>
            <Dropdown.Item href="/city">City</Dropdown.Item>
            <Dropdown.Item href="/patients">Patient</Dropdown.Item>
            <Dropdown.Item href="/contact">Contact</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
