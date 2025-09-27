"use client";
import React from "react";
import styles from "./CookieBanner.module.scss";
import { useState, useEffect } from "react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };
  
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.textContainer}>
        <p className={styles.title}> Welcome to x.com!</p>
        <p className={styles.text}>
          We are letting you know that we are changin our URL, but your privacy
          and data protection setttings remain the same. For more details, see
          our Privacy Policy:{" "}
          <a
            href="https://x.com/en/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://x.com/en/privacy
          </a>
        </p>
      </div>
      <div className={styles.actions}>
        <button onClick={handleDismiss} className={styles.closeButton}>
          <span>&times;</span>
        </button>
      </div>
    </div>
  );
};
