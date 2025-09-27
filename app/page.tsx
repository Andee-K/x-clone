import HomePage from "@/components/HomePage";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (  
    <main className={styles.main}>
      <HomePage></HomePage>
    </main>
    
  );
}
