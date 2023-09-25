import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./homeStyle.css";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  function handleJoinVideoCall() {
    navigate(`/videocall`);
  }

  function handleJoinToDo() {
    navigate(`/todolist`);
  }

  const handelLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{`Hallo ${user.displayName}, hier eine Auswahl an Apps`}</h1>
      <hr />
      <h2>{user && user.email}</h2>
      {user && <img src={user.photoURL} alt="Profil Bild" />}
      <hr />
      <div class="card-holder">
        <div class="card bg-videoCall" onClick={handleJoinVideoCall}>
          Video Call App
        </div>
      </div>
      <div class="card-holder">
        <div class="card bg-toDo" onClick={handleJoinToDo}>
          To Do App
        </div>
      </div>
      <button onClick={handelLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Home;
