import React from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import Button from "./Button";
import { redirect } from "react-router-dom";

export default function Sidebar() {
  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      return redirect("/");
    });
  };
  return (
    <div className="w-1/6 flex flex-col justify-between h-[89.2vh] bg-gray-100 shadow-sm text-sm">
      <div className="flex flex-col">
        <a href={`/`} className="hover:bg-gray-200 p-3 my-1">
          Accueil
        </a>
        <a href={`/commands`} className="hover:bg-gray-200 p-3 my-1">
          Commandes
        </a>
        <a href={`/products`} className="hover:bg-gray-200 p-3 my-1">
          Tous les produits
        </a>
        <a href={`/add-product`} className="hover:bg-gray-200 p-3 my-1">
          Ajouter un produit
        </a>
        <a className="hover:bg-gray-200 p-3 my-1">Produits en attente</a>
        <a href={`/customers`} className="hover:bg-gray-200 p-3 my-1">
          Utilisateurs
        </a>
        <a className="hover:bg-gray-200 p-3 my-1">Retour de produits</a>
        <a className="hover:bg-gray-200 p-3 my-1">Statistiques</a>
      </div>
      <div className="flex flex-col p-5">
        {/* <button onClick={handleLogout} className="hover:bg-gray-200 p-3 my-1">Se déconnecter</button> */}
        <Button title={"Déconnexion"} onClick={handleLogout} />
      </div>
    </div>
  );
}
