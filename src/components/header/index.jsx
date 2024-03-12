import { Outlet, useNavigate } from "react-router-dom";
import "./index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Header() {
  const navegate = useNavigate();
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <h1 onClick={() => navegate("/")}>Todo App</h1>
            <button onClick={() => navegate("/add")}>Add</button>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </header>
      <Outlet />
    </>
  );
}

export default Header;
