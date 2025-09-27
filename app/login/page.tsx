// app/login/page.tsx
"use client";

import { useState } from "react";
import { auth } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import styles from "./Login.module.scss";
import { PiXLogoBold } from "react-icons/pi";
import Toast from "@/components/Toast";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowToast(true);
      router.push("/");
    } catch (error) {
      setError("Failed to login. Please check your email and password.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.logo}>
          <PiXLogoBold className={`${styles.icon} ${styles.logo}`} />
        </div>
        <h1 className={styles.header}>Sign in to X</h1>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="email"
            placeholder="Phone, email address, or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button
            type="submit"
            className={styles.button}
            disabled={!email || !password}
          >
            Next
          </button>
        </form>
        <Link href="#forgotPassword" className={styles.forgotPassword}>
          Forgot password?
        </Link>
        <div className={styles.signupLink}>
          Don’t have an account? <Link href="/signup">Sign up</Link>
        </div>
      </div>
      {showToast && (
        <Toast
          message="Successfully signed in"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}