// import { useAuth } from "hooks/useAuth";
// import { useDispatch } from "react-redux";
// import { removeUser } from "./store/slices/userSlice";
import { tokenContext } from "context/tokenContext";
import { useContext, useEffect, useState } from "react";
import { IsAuth } from "./IsAuth";
import { LoginPage } from "./LoginPage";

const HomePage = () => {
  // const dispatch = useDispatch();
  // const { isAuth, email } = useAuth();

  const [showFormal, setShowFormal] = useState(false);

  const hideFormal = () => {
    setShowFormal(!showFormal);
  };
  const { token, setToken } = useContext(tokenContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    setToken(token)

  }, [])

  const [valData, setValData] = useState("");

  useEffect(() => {

    fetch("http://localhost:8000/isAuth/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access_token": token.access_token,
      },
    }).then((response) => {
      return response.json();
    })
      .then((data) => {
        // console.log(data.validate);
        setValData(data.validate)
      });
    // console.log(token)
  })

  useEffect(() => {
    if (token) {
      localStorage.setItem("loginUp", JSON.stringify(!showFormal))
      setShowFormal(localStorage.getItem("loginUp"))
    }
  }, [])
  
  return token && valData ? (
    <IsAuth />
  ) : (
    <div className="body" style={{ position: "relative" }}>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
            </ul>


            <div className="text-end">


              <button type="button" className="btn btn-warning" onClick={hideFormal}>Sign-up</button>

            </div>



          </div>
        </div>
      </header >
      {showFormal ? (
        < LoginPage />
      ) : null}

      {/* < LoginPage /> */}

      <div className="content">

      </div>
    </div >


  );
};

export { HomePage };