import React, { useState } from "react";

const Tools = ({ onToolChange }) => {
  const [tools, setTools] = useState({
    search: true,
    calculator: false,
    request_get: true,
    fetch: false
  });

  const handleToolChange = (event) => {
    const tool = event.target.name;
    const isChecked = event.target.checked;
    setTools((prevState) => ({ ...prevState, [tool]: isChecked }));
    onToolChange(tool, isChecked);
  };

  return (
    <div>
      <h3>Tools</h3>
      <div>
        <input
          type="checkbox"
          name="search"
          checked={tools.search}
          onChange={handleToolChange}
        />
        <label htmlFor="search">Search</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="calculator"
          checked={tools.calculator}
          onChange={handleToolChange}
        />
        <label htmlFor="calculator">Calculator</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="request_get"
          checked={tools.request_get}
          onChange={handleToolChange}
        />
        <label htmlFor="request_get">Fetch</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="fetch"
          checked={tools.fetch}
          onChange={handleToolChange}
        />
        <label htmlFor="fetch">Request Get</label>
      </div>
    </div>
  );
};

export default Tools;
