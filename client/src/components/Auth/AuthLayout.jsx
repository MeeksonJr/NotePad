import React, { useState } from 'react';
import Login from './../Auth/Login';
import Signup from './../Auth/Signup';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.redSide}>
          <button className={styles.toggleButton} onClick={toggleForm}>
            {isSignup ? 'Switch to Login' : 'Switch to Signup'}
          </button>
        </div>
        <div className={styles.appleSide}>
          {isSignup ? <Signup onLogin={onLogin} /> : <Login onLogin={onLogin} />}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
