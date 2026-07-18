import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 lg:ml-64 p-6 pt-20 lg:pt-6 bg-slate-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;