import React from 'react';
import './modal.css';

function Modal({ closeModal, title, addToCard }) {

  return (
    <div className='modal'>
      <div>
        <h3>нужен ли вам этот предмет</h3>
        <button onClick={() => { addToCard(title); closeModal()}}>Да</button>
        <button onClick={closeModal}>Нет</button>
      </div>
    </div>
  );
}

export default Modal;
