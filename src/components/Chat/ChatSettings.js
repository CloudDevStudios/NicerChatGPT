import React from 'react';

const ChatSettings = ({ onClose }) => {
  return (
    <div className="chat-settings">
      <h2>Chat Settings</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ChatSettings;
