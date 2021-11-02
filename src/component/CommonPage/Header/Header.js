import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import TopHeader from '../TopHeader/TopHeader';
import './Header.css';

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
              <Link to="/ourOrder" className="items">
                Our Order
              </Link>
              <Link to="/addPlace" className="items">
                Add Place
              </Link>
              <Link to="/manageAllPlace" className="items">
                Manage All Place
              </Link>

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
