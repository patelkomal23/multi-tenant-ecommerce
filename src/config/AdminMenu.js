import {
  LayoutDashboard,
  Package,
  FolderTree,
  ShoppingCart,
  Users,
  Star,
  TicketPercent,
  BarChart3,
  CreditCard,
  Truck,
  UserCog,
  Settings,
} from "lucide-react";

export const adminMenu = [
  { title: "Dashboard", path: "/admin/dashboard", Icon: LayoutDashboard },
  { title: "Products", path: "/admin/products", Icon: Package },
  { title: "Categories", path: "/admin/categories", Icon: FolderTree },
  { title: "Orders", path: "/admin/orders", Icon: ShoppingCart },
  { title: "Customers", path: "/admin/customers", Icon: Users },
  { title: "Reviews", path: "/admin/reviews", Icon: Star },
  { title: "Coupons", path: "/admin/coupons", Icon: TicketPercent },
  { title: "Analytics", path: "/admin/analytics", Icon: BarChart3 },
  { title: "Payments", path: "/admin/payments", Icon: CreditCard },
  { title: "Shipping", path: "/admin/shipping", Icon: Truck },
  { title: "Staff", path: "/admin/staff", Icon: UserCog },
  { title: "Settings", path: "/admin/settings", Icon: Settings },
];