import initializeFirebaseApp from './../useFirebase/useFirebase.init';
import { useState, useEffect } from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from 'firebase/auth';

initializeFirebaseApp();

const useFirebase = () => {
  //google or github state
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  //email or password state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //Sign In With Google
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  //Sign In With Github
  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  //Toggle
  const toggleLogin = e => {
    setIsLogin(e.target.checked);
  };

  //Input Name Change
  const handleNameChange = e => {
    setName(e.target.value);
  };

  //Input Email Change
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  //Input Password Change
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  //Input Submit btn
  const handleRegistration = e => {
    console.log(email, password);
    e.preventDefault();
    if (password.length < 6) {
      setError('Password Must be at latest 6 characters long');
      return;
    }

    if (!/((?=.*[A-Z].*[A-Z]))/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      });
  };
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      });
  };

  //Name Change
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then(result => {});
  };

  //verifyEmail
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(result => {
      console.log(result);
    });
  };

  //Reset Password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => {})
      .catch(error => {
        setError(error.message);
      });
  };

  //Logout
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  //State Change Manage Users
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        // console.log('insude state change', user);
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    error,
    isLogin,
    signInWithGoogle,
    signInWithGithub,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    toggleLogin,
    handleResetPassword,
    logout,
  };
};

export default useFirebase;
