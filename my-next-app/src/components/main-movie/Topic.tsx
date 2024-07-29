import React from "react";
import styles from "./Topic.module.scss";

function Topic() {
  return (
    <div>
      <div className={styles.topic}>
        <h2 className={styles.heading}>Topic</h2>
        <div className={styles.movie}>
          <iframe
            height=" 100%"
            className="container-fluid"
            src="https://www.youtube.com/embed/SlWCguwGbcM?si=6BdBhSsyNptZ_t0b"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Topic;
