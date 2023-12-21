import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import "./card.css";

function Cards({ title, description, price, thumbnail, addToCard }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className='mainCard'>
    <div className='cards' onClick={openModal}>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{price}</span>
      <p>{thumbnail}</p>

    </div>
    {modal && <Modal closeModal={closeModal} title={title} addToCard={addToCard} />}

    </div>
  );
}

export default Cards;
