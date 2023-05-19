import React from "react";
import { Oval } from "react-loader-spinner";

export default function Button({ title, onClick, outline, isLoading }) {
  return (
    <button
    disabled={isLoading}
      className={
        "text-white text-md text-center rounded-md shadow-sm bg-gray-800 py-2 px-10 font-semibold"
      }
      onClick={onClick}
    >
      {isLoading ? (
        <Oval
          height={20}
          width={20}
          color="#fff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#f1f1f1"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        title
      )}
    </button>
  );
}
