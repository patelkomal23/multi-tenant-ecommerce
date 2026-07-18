import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { adminMenu } from "../../../config/AdminMenu";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white p-2 rounded-lg"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-white transform transition-transform duration-300
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold text-blue-400">
            ShopAdmin
          </h1>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-5 px-3">
          {adminMenu.map((item) => {
            const Icon = item.Icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-slate-800 text-slate-300"
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default AdminSidebar;