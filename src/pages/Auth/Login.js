import { TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "../../components/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../config/firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async(e) => {
    e.preventDefault();
    if (
      email == "" ||
      password == "" ||
      email !== process.env.REACT_APP_ADMIN_EMAIL ||
      password !== process.env.REACT_APP_ADMIN_PASS
    ) {
      toast.error("Une erreur est survenue", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }


    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Vous êtes connecté(e)", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Une erreur est survenue", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-200 w-full flex items-center justify-center">
      <form className="w-full md:w-2/6 self-center bg-white rounded-md shadow-md p-5">
        <h1 className="text-xl font-semibold">Identification recquise</h1>
        <div className="h-[5px] w-20 mt-2 rounded-full bg-gray-400 mb-3"></div>
        <div className="mt-10">
          <TextField
            className="w-full"
            id=""
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mt-3">
          <TextField
            className="w-full"
            id=""
            label="Mot de passe"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Button isLoading={isLoading} title={"LOGIN"} onClick={handleLogin} />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
