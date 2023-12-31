import AdminFooter from "./components/navbar/AdminFooter";
import AdminNavbar from "./components/navbar/AdminNavbar";
import AdminLeftSidebar from "./components/sidebar/AdminLeftSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="flex min-h-screen flex-1 flex-col px-6">
        <AdminLeftSidebar />
      </div>
      <div className="flex flex-col w-full mx-w-5xl pr-6">
        <AdminNavbar />
        {children}
        <AdminFooter />
      </div>
    </div>
  );
}
