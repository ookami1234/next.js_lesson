// Profile.tsx
import React, { useState } from "react";
import styles from "./profile.module.scss";
import CharacterModal from "../CharacterModal/CharacterModal";
import { Character } from "../types";

const characters: Character[] = [
  {
    name: "兎",
    nameF: "（うさぎ）",
    image: "/image/うさぎ.png",
    age: "24歳",
    height: "173cm",
    weight: "65kg",
    personality: "謹厳実直",
    Favorite: "ドラクエ BLEACH",
    dislike: "a",
    x: "https://x.com/Mr_PaintRabbit",
  },
  {
    name: "大狼",
    nameF: "（おおかみ）",
    image: "/image/おおかみ.png",
    age: "24歳",
    height: "176cm",
    weight: "70kg",
    personality: "傍若無人",
    Favorite: "お笑い FPS 酒  煙草",
    dislike: "2Dゲーム",
    x: "https://x.com/Xx_ookamii_xX",
  },
  {
    name: "熊",
    nameF: "（くま）",
    image: "/image/くま.png",
    age: "24歳",
    height: "195cm",
    weight: "90kg",
    personality: "温厚篤実",
    Favorite: "2Dアクション",
    dislike: "FPS",
    x: "https://x.com/Xx_ookamii_xX",
  },
];

const Profile: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const openModal = (character: Character) => {
    setSelectedCharacter(character);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
    setModalIsOpen(false);
  };

  return (
    <div className={styles.profile}>
      <h2 className={styles.heading}>Members</h2>
      <div className={`${styles.members} row container-fluid`}>
        {characters.map((character) => (
          <div
            key={character.name}
            className={`${styles.member} col-12 col-md-4`}
          >
            <img
              className={styles.cImage}
              src={character.image}
              alt={character.name}
            />
            <p className={styles.cName}>{character.name}</p>
            <p className={styles.cNameF}>{character.nameF}</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => openModal(character)}
            >
              プロフィール
            </button>
          </div>
        ))}
      </div>
      <CharacterModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        character={selectedCharacter}
      />
    </div>
  );
};

export default Profile;
