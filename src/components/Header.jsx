import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageState, setPageState] = useState("Sign In");
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Profile');
      } else {
        setPageState('Sign In');
      }
    });
  })

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-70">
      <header className="flex justify-between items-center px-3 max-w-7xl mx-auto">
        <div>
          <img
            src="https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3684270/38ebcc65d2cfc908c50432f31cbb089b/preview.png?t=1685979383526"
            alt="logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-red-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "!text-black !border-b-red-500"
                }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/explore") && "!text-black !border-b-red-500"
                }`}
              onClick={() => navigate("/explore")}
            >
              Explore
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/login") || pathMatchRoute("/account")) && "!text-black !border-b-red-500"
                }`}
              onClick={() => navigate("/account")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
