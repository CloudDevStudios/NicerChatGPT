import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';
import useStore from '@store/store';

const MergeMessageButton = ({ onConfirm }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const hideSideMenu = useStore((state) => state.hideSideMenu);

  const handleMergeClick = () => {
    setShowConfirm(true);
  };

  const handleCancelClick = () => {
    setShowConfirm(false);
  };

  const handleConfirmClick = () => {
    onConfirm();
    setShowConfirm(false);
  };

  return (
    <>
      <button
        className={`bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
          hideSideMenu ? 'md:mr-4' : 'md:mr-0'
        }`}
        onClick={handleMergeClick}
      >
        <FaLink className="inline mr-2" />
        Merge Message
      </button>
      {showConfirm && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.5)' }}
        >
          <div className="bg-white p-4 rounded shadow">
            <p className="mb-4">Are you sure you want to merge this message with the previous message?</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleConfirmClick}
              >
                Merge
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MergeMessageButton;
