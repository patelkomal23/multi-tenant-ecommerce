import React, { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    storeName: "Shop Admin",
    email: "admin@shop.com",
    phone: "+91 9876543210",
    address: "Mumbai, India",
    currency: "INR",
    theme: "Light",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <div className="bg-white rounded-xl shadow p-6 max-w-3xl">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Store Name
            </label>

            <input
              type="text"
              name="storeName"
              value={settings.storeName}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Currency
            </label>

            <select
              name="currency"
              value={settings.currency}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Address
            </label>

            <textarea
              rows="3"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Theme
            </label>

            <select
              name="theme"
              value={settings.theme}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>

        </div>

        <div className="mt-8">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>

      </div>

    </div>
  );
}

export default Settings;