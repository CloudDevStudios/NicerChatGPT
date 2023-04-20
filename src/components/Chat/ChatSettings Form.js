import React, { useState } from 'react';

const ChatSettingsForm = ({ chatbot, onClose }) => {
  const [model, setModel] = useState(chatbot.model);
  const [temperature, setTemperature] = useState(chatbot.temperature);
  const [tools, setTools] = useState(chatbot.tools);

  const handleSubmit = (event) => {
    event.preventDefault();
    chatbot.setModel(model);
    chatbot.setTemperature(temperature);
    chatbot.setTools(tools);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Chat Settings</h2>
      <div>
        <label htmlFor="model">Model:</label>
        <select id="model" value={model} onChange={(event) => setModel(event.target.value)}>
          <option value="davinci">Davinci</option>
          <option value="curie">Curie</option>
        </select>
      </div>
      <div>
        <label htmlFor="temperature">Temperature:</label>
        <input type="number" id="temperature" value={temperature} onChange={(event) => setTemperature(event.target.value)} />
      </div>
      <div>
        <label htmlFor="tools">Tools:</label>
        <input type="text" id="tools" value={tools} onChange={(event) => setTools(event.target.value.split(','))} />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default ChatSettingsForm;
