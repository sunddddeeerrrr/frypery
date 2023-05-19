import Header from "./Header";
import Sidebar from "./Sidebar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function PageModel({ title, content }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full flex flex-row">
        <Sidebar />
        <div className="w-5/6 p-3">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="h-[5px] w-20 mt-2 rounded-full bg-gray-400"></div>
          <div className="w-full mt-10">{content}</div>
        </div>
      </main>
     
    </div>
  );

  return content;
}
