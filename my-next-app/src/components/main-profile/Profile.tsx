// Profile.tsx
import React, { useState } from "react";
import styles from "./profile.module.scss";
import CharacterModal from "../CharacterModal/CharacterModal";
import { Character } from "../types";

const characters: Character[] = [
  {
    name: "X",
    nameF: "（XX）",
    image: "/image/profileImage.png",
    age: "XXX",
    height: "XXX",
    weight: "XXX",
    personality: "XXX",
    Favorite: "XXX",
    dislike: "X",
    x: "",
  },
  {
    name: "X",
    nameF: "（XX）",
    image: "/image/profileImage2.png",
    age: "XXX",
    height: "XXX",
    weight: "XXX",
    personality: "XXX",
    Favorite: "XXX",
    dislike: "X",
    x: "",
  },
  {
    name: "X",
    nameF: "（XX）",
    image: "/image/profileImage3.png",
    age: "XXX",
    height: "XXX",
    weight: "XXX",
    personality: "XXX",
    Favorite: "XXX",
    dislike: "X",
    x: "",
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
      <h2 className={styles.heading}>HEADING</h2>
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
