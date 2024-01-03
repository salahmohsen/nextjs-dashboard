import Navbar from "@/app//ui/dashboard/navbar/navbar";
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className=" flex p-5 min-w-72 bg-bgSoft shadow-sm">
        <Sidebar />
      </div>
      <div className="flex-1 p-10 ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
