// import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const {
    signInWithGoogle,
    signInWithGithub,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    toggleLogin,
    isLogin,
    handleResetPassword,
    setIsReload,
    error,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  //Redirect with Google
  const handleGoogleLogin = () => {
    signInWithGoogle().then(result => {
      history.push(redirect_uri);
    })
    .finally(() => setIsReload(false))
  };

  //Redirect with Google
  const handleGithubLogin = () => {
    signInWithGithub().then(result => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="text-center mt-5">
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button
          variant="dark"
          className=" btn btn-dark fs-5 google-btn"
          type="button"
          onClick={handleGoogleLogin}
        >
          <img
            className="me-1 img-fluid"
            src={'https://i.ibb.co/WcmT2rW/Google-32px.png'}
            alt=""
          />
          <span>Continue With Google</span>
        </Button>
        <Button
          variant="dark"
          className=" btn btn-dark fs-5 google-btn"
          type="button"
          onClick={handleGithubLogin}
        >
          <img
            className="me-1 img-fluid"
            src={'https://i.ibb.co/CVBTJCt/Git-Hub-32px.png'}
            alt=""
          />
          <span>Continue With Github</span>
        </Button>
        <h5 className="text-center">
          OR
          <hr className="w-50 mx-auto" />
        </h5>
      </div>
      <h2 className="my-3">Please {isLogin ? 'Login' : 'Register'} </h2>
      <form onSubmit={handleRegistration} className="w-50 m-auto text-start ">
        {!isLogin && (
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleNameChange}
                type="name"
                className="form-control"
                id="inputEmail3"
                required
              />
            </div>
          </div>
        )}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label ">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check d-flex align-items-center">
              <input
                onChange={toggleLogin}
                className="form-check-input me-2"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Haven't any account?
              </label>
              <button
                style={{ textDecoration: 'none', color: '#000' }}
                type="button"
                className="btn btn-link ms-5 reset-pass-btn"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger d-flex justify-content-evenly">
          {' '}
          {error}
        </div>
        <button
          type="submit"
          className="btn btn btn-success d-block w-50 mx-auto fw-bolder py-2 "
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
};;

export default Login;
