"use client";
import React from "react";
import styles from "./Signup.module.scss";
import { PiXLogoBold } from "react-icons/pi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "@/lib/firebaseConfig";

const SignUpPage = () => {
  const [fullName, setFullName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();

  const validateForm = (): boolean => {
    if (!email || !password || !fullName || !username) {
      setError("All fields are required.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError(""); // Clear previous errors
    return true;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update user's display name
      await updateProfile(user, {
        displayName: fullName,
      });

      // Save the username and additional info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        username,
        email: user.email,
        createdAt: new Date(),
      });

      setSuccess("Account created successfully! Redirecting...");
      setTimeout(() => {
        router.push("/");
      }, 2000); // Redirect after 2 seconds
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else {
        setError("Failed to create an account. Please try again.");
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.signupContainer}>
      <div className={styles.logoContainer}>
        <PiXLogoBold className={styles.logo} />
      </div>
      <h1 className={styles.title}>Join X Today</h1>
      <form onSubmit={handleSignUp} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Signing Up..." : "Create Account"}
        </button>
      </form>

      <p className={styles.footerText}>
        By signing up, you agree to the{" "}
        <Link href="#termsofservice" className={styles.link}>
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="#privacypolicy" className={styles.link}>
          Privacy Policy
        </Link>
        , including{" "}
        <Link href="#cookieuse" className={styles.link}>
          Cookie Use
        </Link>
        .
      </p>

      <p className={styles.footerText}>
        Have an account already?{" "}
        <Link href="/login" className={styles.link}>
          Log in
        </Link>
      </p>
    </section>
  );
};

export default SignUpPage;
