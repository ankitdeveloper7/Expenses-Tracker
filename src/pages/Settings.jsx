// src/pages/Settings.jsx
import React, { useState } from "react";

const Settings = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);

  const handleToggle = () => {
    setEmailAlerts((prev) => !prev);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Settings</h1>

      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Notifications</h2>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Enable email alerts</span>
          <button
            onClick={handleToggle}
            className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 ${
              emailAlerts ? "bg-green-400" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
                emailAlerts ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {emailAlerts ? "You'll receive email alerts when nearing your budget." : "Email alerts are turned off."}
        </p>
      </div>
    </div>
  );
};

export default Settings;
