import { useTranslation } from "react-i18next";
import classes from "../styles/navBar.module.css";
import logoImg from "../assets/mos2.png";
import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import SocialContact from "./SocialContact";

const NavBar = () => {
  const [dropMenuOpen, setDropMenuOpen] = useState(false);

  const { t } = useTranslation();
  //i18n.changeLanguage("ar");

  const dropIconClickHandler = () => {
    setDropMenuOpen(!dropMenuOpen);
  };
  return (
    <div className={classes.nav}>
      <Link to="/">
        <img src={logoImg} />
      </Link>
      <div onClick={dropIconClickHandler} className={classes.navDropIcon}>
        <span
          className={`${
            dropMenuOpen
              ? classes.navDropIconSpanOpenFirst
              : classes.navDropIconSpan
          }`}
        ></span>
        <span
          className={`${
            dropMenuOpen
              ? classes.navDropIconSpanOpenSecond
              : classes.navDropIconSpan
          }`}
        ></span>
        <span
          className={`${
            dropMenuOpen
              ? classes.navDropIconSpanOpenThird
              : classes.navDropIconSpan
          }`}
        ></span>
        <ul
          className={`${
            dropMenuOpen ? classes.navDropListOpen : classes.navDropListClose
          } `}
        >
          <li>
            <Link className={classes.navDropListItem} to="/">
              {t("الرئيسيّة")}
            </Link>
          </li>
          <li>
            <Link
              to="/aboutUs/aboutUsInShort"
              className={classes.navDropListItem}
            >
              من نحن
            </Link>
          </li>
          <li>
            <Link to="/student/acadimics" className={classes.navDropListItem}>
              امتيازات خريجي المعهد
            </Link>
          </li>


          <li>
            <Link to="/leadership" className={classes.navDropListItem}>
              المنهج
            </Link>
          </li>
          <li>
            <Link to="/acceptingAndHelping" className={classes.navDropListItem}>
              التسجيل
            </Link>
          </li>
          {/* <li className={classes.navDropListItem}>{t("English")}</li> */}
        </ul>
      </div>
      <ul className={classes.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${classes.navListItemActive} ${classes.navListItem}`
                : classes.navListItem
            }
          >
            {t("الرئيسيّة")}
          </NavLink>
        </li>

        <NavLink
          to="/aboutUs/aboutUsInShort"
          className={({ isActive }) =>
            isActive
              ? `${classes.navListItemListActive} ${classes.navListItemList}`
              : classes.navListItemList
          }
        >
          {t("من نحن")}
        </NavLink>
        <li>
          <NavLink
            to="/leadership"
            className={({ isActive }) =>
              isActive
                ? `${classes.navListItemActive} ${classes.navListItem}`
                : classes.navListItem
            }
          >
            {t("المنهج")}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="acceptingAndHelping"
            className={({ isActive }) =>
              isActive
                ? `${classes.navListItemActive} ${classes.navListItem}`
                : classes.navListItem
            }
          >
            التسجيل
          </NavLink>
        </li>
        <NavLink
          to="/student/acadimics"
          className={({ isActive }) =>
            isActive
              ? `${classes.navListItemListActive} ${classes.navListItemList}`
              : classes.navListItemList
          }
        >
          امتيازات خريجي المعهد
        </NavLink>
        {/* <li className={classes.navListItem}>{t("English")}</li> */}
      </ul> 

        <div className={classes.socialDiv}> 
          <SocialContact/>
        </div>
    </div>
  );
};

export default NavBar;
