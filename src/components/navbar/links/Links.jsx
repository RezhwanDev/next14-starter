"use client";
import { useState } from "react";
import styles from "./link.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
  const Navs = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const [open, setOpen] = useState(false);

  // Temp
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {Navs.map((nav) => (
          <NavLink item={nav} key={nav.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "./admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "./login" }} />
        )}
      </div>
      <button
        className={styles.menuBtb}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {Navs.map((nav) => (
            <NavLink item={nav} key={nav.title} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Links;
