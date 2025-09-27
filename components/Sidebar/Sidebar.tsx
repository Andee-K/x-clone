"use client";

import { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineMail,
  HiHome,
} from "react-icons/hi";
import { PiSealCheckFill, PiXLogoBold } from "react-icons/pi";
import { RiFileList2Line, RiBookmarkLine } from "react-icons/ri";
import { FiHash, FiMoreHorizontal } from "react-icons/fi";
import { BsLightningCharge, BsPerson, BsBriefcase } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import { useAuth } from "@/context/AuthContext";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  avatarUrl: string;
}

export default function Sidebar({ avatarUrl }: SidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <div>
          <PiXLogoBold className={`${styles.icon} ${styles.logo}`} />
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <HiHome className={styles.icon} /> Home
          </li>
          <li className={styles.menuItem}>
            <HiOutlineSearch className={styles.icon} /> Explore
          </li>
          <li className={styles.menuItem}>
            <HiOutlineBell className={styles.icon} /> Notifications
          </li>
          <li className={styles.menuItem}>
            <HiOutlineMail className={styles.icon} /> Messages
          </li>
          <li className={styles.menuItem}>
            <BsLightningCharge className={styles.icon} /> Grok
          </li>
          <li className={styles.menuItem}>
            <FiHash className={styles.icon} /> Premium
          </li>
          <li className={styles.menuItem}>
            <RiFileList2Line className={styles.icon} /> Lists
          </li>
          <li className={styles.menuItem}>
            <RiBookmarkLine className={styles.icon} /> Bookmarks
          </li>
          <li className={styles.menuItem}>
            <BsBriefcase className={styles.icon} /> Jobs
          </li>
          <li className={styles.menuItem}>
            <MdOutlineGroups className={styles.icon} /> Communities
          </li>
          <li className={styles.menuItem}>
            <BsPerson className={styles.icon} /> Profile
          </li>
          <li className={styles.menuItem}>
            <FiMoreHorizontal className={styles.icon} /> More
          </li>
        </ul>
        <button className={styles.postButton}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={styles.featherIcon}
            fill="white"
          >
            <g>
              <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
            </g>
          </svg>
          <span className={styles.postText}>Post</span>
        </button>
      </div>

      {user ? (
        <div className={styles.miniProfile} onClick={toggleMenu}>
          <img src={avatarUrl} alt="User" className={styles.avatar} />
          <div className={styles.profileDetails}>
            <span className={styles.name}>
              {user.displayName || "User"}{" "}
              <PiSealCheckFill className={styles.verifiedIcon} />
            </span>
            <span className={styles.username}>
              @{user.displayName || "guest"}
            </span>
          </div>
          <FiMoreHorizontal className={styles.moreIcon} />
          {isMenuOpen && (
            <div className={styles.profileMenu}>
              <div className={styles.profileMenuItem} onClick={handleSignOut}>
                Log out @{user.displayName || "guest"}
              </div>
            </div>
          )}
        </div>
      ) : (
        <button onClick={handleSignOut} className={styles.loginButton}>
          Log in
        </button>
      )}

      {showToast && <div className={styles.toast}>Signed out successfully</div>}
    </div>
  );
}