import React from "react";
import Modal from "react-modal";
import styles from "./CharacterModal.module.scss";
import { Character } from "../types";

Modal.setAppElement("#root");

type CharacterModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  character: Character | null;
};

const CharacterModal: React.FC<CharacterModalProps> = ({
  isOpen,
  onRequestClose,
  character,
}) => {
  if (!character) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Character Profile"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "90%", // Adjusted width
          maxWidth: "1200px", // Set a maximum width
          padding: "10px",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div className={`${styles.modalContainer} row`}>
        <div className={`${styles.modalLeft} col-12 col-md-6`}>
          <img
            src={character.image}
            alt={character.name}
            className={styles.modalImage}
          />
        </div>
        <div className={`${styles.modalRight} col-12 col-md-6`}>
          <p className={styles.name}>{character.name}</p>
          <p className={styles.nameF}>{character.nameF}</p>
          <p>XXX: {character.age}</p>
          <p>XXX: {character.height}</p>
          <p>XXX: {character.weight}</p>
          <p>XXX: {character.Favorite}</p>
          <p>XXX: {character.dislike}</p>
          <div className={styles.x}>
            <a href={character.x}>x</a>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-secondary col-7 col-md-2"
          onClick={onRequestClose}
        >
          閉じる
        </button>
      </div>
    </Modal>
  );
};

export default CharacterModal;
