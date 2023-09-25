import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth, googleAuthProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <GoogleButton onClick={handleSignIn} />
    </div>
  );
};

export default Login;
