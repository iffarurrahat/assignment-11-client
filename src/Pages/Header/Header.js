import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import TopHeader from './../TopHeader/TopHeader';

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <TopHeader></TopHeader>
      <Navbar className="bg_color" expand="lg">
        <Container>
          <Navbar.Brand sticky="top">
            <Link to="/home" className="logo">
              <img src={'https://i.ibb.co/LYvZ1Gp/logo.png'} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '150px' }}
              navbarScroll
            >
              <Link to="/home" className="items">
                Home
              </Link>
              <Link to="/AddBooking" className="items">
                Add Booking
              </Link>
              <Link to="/myBookings" className="items">
                My Bookings
              </Link>
              <Link to="/manageBookings" className="items">
                Manage All Place
              </Link>
              {/* {user?.displayName} */}
              {user?.email ? (
                <Link
                  to="/home"
                  style={{ color: '#ff7f47' }}
                  onClick={logout}
                  className="items"
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="items">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import useAuth from '../../hooks/useAuth';
// import logo from '../../images/logo.png';
// import TopHeader from './../TopHeader/TopHeader';

// const Header = () => {
//   const { user, logOut } = useAuth();
//   return (
{
  /* <>
  <TopHeader></TopHeader>
  <Navbar bg="white" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
      <Navbar.Brand href="/home">
        <img src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle className="bg-dark" />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={Link} className="text-dark" to="/home">
          Home
        </Nav.Link>
        <Nav.Link as={Link} className="text-dark" to="/AddBooking">
          AddBooking
        </Nav.Link>
        <Nav.Link as={Link} className="text-dark" to="/myBookings">
          MyBooKing
        </Nav.Link>
        <Nav.Link as={Link} className="text-dark" to="/manageBookings">
          AllBooking
        </Nav.Link>
        <Navbar.Text className="text-dark">
          <a href="#login" className="text-dark">
            {user?.displayName}
          </a>
        </Navbar.Text>
        {!user?.email ? (
          <Nav.Link as={Link} className="text-dark" to="/login">
            Login
          </Nav.Link>
        ) : (
          <button onClick={logOut} variant="light">
            Logout
          </button>
        )}
      </Navbar.Collapse>
    </Container>
  </Navbar>
</>; */
}
//   );
// };

// export default Header;
