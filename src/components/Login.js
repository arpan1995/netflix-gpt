import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const messsage = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(messsage);
    if (messsage == null) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://scontent.fblr12-1.fna.fbcdn.net/v/t39.30808-6/311740019_4038619006278798_7349840616437357786_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=52f669&_nc_ohc=f_D_oe9NWYYAX_drbZ9&_nc_ht=scontent.fblr12-1.fna&oh=00_AfABEDtMvKg2dBlrCHNIKOuGELXOdzVdMq61D-QURs8__Q&oe=6511A70A"
          }).then(() => {
            navigate('/')
          }).catch((error) => {
            setErrorMessage(error.message)
          });
          navigate("/");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form
        className="absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0  text-white bg-opacity-80"
        onClick={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4  text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-800 rounded-lg "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address or Phone number"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg "
        />
        <br></br>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg "
        />
        <br></br>
        <p className="py-2 text-red-500 text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full text-white rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now..."
            : "Already Registered... Sign In Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
