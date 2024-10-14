import React, { useState } from 'react';
import Modal from './Modal';

function Header({ onSearch }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <div className='flex gap-2 items-center justify-center text-orange-600'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003Z" />
        </svg>

        <h1 className="text-2xl font-bold">windbnb</h1>
      </div>

      <div className="flex items-center space-x-4 bg-white shadow-md p-2 rounded-2xl">
        <button onClick={openModal} className="text-red-500 p-2 focus:outline-none flex items-center gap-7">
          <span className="text-gray-600">Whole, Finland</span>
          <span className="text-gray-400">Add guests</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} onSearch={onSearch} />
    </header>
  );
}

export default Header;
