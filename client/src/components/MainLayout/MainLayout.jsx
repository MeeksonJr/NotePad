import React, { useState } from 'react';
import Login from './../../components/Auth/Login';
import Signup from './../../components/Auth/Signup';
import styles from './MainLayout.module.css';

const MainLayout = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleForm = () => {
    setIsActive(true);
    setIsSignup(!isSignup);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${isActive ? styles.active : ''}`}>
        <div className={styles.redSide}>
          <button className={styles.toggleButton} onClick={toggleForm}>
            {isSignup ? 'Switch to Login' : 'Switch to Signup'}
          </button>
        </div>
        <div className={styles.appleSide}>
          {isSignup ? (
            <Signup onLogin={onLogin} />
          ) : (
            <Login onLogin={onLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
