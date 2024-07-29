import Head from "next/head";
import styles from "./Header.module.scss";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

export function Header() {
  return (
    <div>
      <header className={`${styles.header} `}>
        <div className={`${styles.container}`}>
          <div className={`${styles.logo} text-center`}>
            <h1>
              <a href="/">一家団欒</a>
            </h1>
          </div>
          {/* <div
              className={`${styles.section} col-12 col-md-3 d-flex flex-column align-items-center`}
            >
              <h2 className={`${styles.title} `}>グループSNS</h2>
              <div className={`${styles.icons}  d-flex justify-content-center`}>
                <a href="#" className={`${styles.icon}`}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="fa-brands fa-x-twitter"
                    style={{ fontSize: "1.5em", color: "#1DA1F2" }}
                  />
                </a>
                <a href="#" className={`${styles.icon}`}>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="fab fa-youtube"
                    style={{ fontSize: "1.5em", color: "#FF0000" }}
                  />
                </a>
                <a href="#" className={`${styles.icon}`}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fab fa-instagram"
                    style={{ fontSize: "1.5em", color: "#C13584" }}
                  />
                </a>
              </div>
            </div> */}
        </div>
      </header>
    </div>
  );
}

export default Header;
