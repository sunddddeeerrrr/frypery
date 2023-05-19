import React, { useCallback, useMemo } from "react";
import PageModel from "../components/PageModel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDropzone } from "react-dropzone";
import Button from "../components/Button";

export default function AddProduct() {
  const cat = [{ label: "Homme" }, { label: "Femme" }, { label: "Mixte" }];

  const subcat = [
    { label: "subcat_1" },
    { label: "subcat_2" },
    { label: "subcat_3" },
    { label: "subcat_4" },
  ];

  const size = [
    { label: "XS" },
    { label: "M" },
    { label: "L" },
    { label: "XL" },
    { label: "XXL" },
    { label: "XXXL" },
    { label: "38" },
    { label: "40" },
    { label: "41" },
    { label: "42" },
    { label: "43" },
    { label: "44" },
  ];

  const state = [
    { label: "Neuf avec étiquettes" },
    { label: "Neuf sans étiquettes" },
    { label: "Très bon état" },
    { label: "Assez bon état" },
  ];

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const baseStyle = {
    flex: 1,
    minHeight: 200,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const focusedStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  function StyledDropzone(props) {
    const {
      getRootProps,
      getInputProps,
      isFocused,
      isDragAccept,
      isDragReject,
    } = useDropzone({ accept: { "image/*": [] } });

    const style = useMemo(
      () => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
      }),
      [isFocused, isDragAccept, isDragReject]
    );

    return (
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Télecharger les photos / vidéos</p> <br />
          <p>10 fichiers max et 5MB max par fichiers</p>
        </div>
      </div>
    );
  }

  return (
    <PageModel
      title={"Ajouter un produit"}
      content={
        <>
          <div className="flex flex-col w-5/12">
            <div className=" mb-3 flex flex-row gap-5">
              <Autocomplete
                className="w-full"
                disablePortal
                options={cat}
                renderInput={(params) => (
                  <TextField {...params} label="Catégorie" />
                )}
              />
              <Autocomplete
                className="w-full"
                disablePortal
                options={subcat}
                renderInput={(params) => (
                  <TextField {...params} label="Sous-catégorie" />
                )}
              />
            </div>

            <div className="flex flex-row gap-5">
              <TextField
                className="w-full"
                id=""
                label="Nom"
                variant="outlined"
              />
              <TextField
                className="w-full"
                id=""
                label="Prix"
                variant="outlined"
              />
            </div>

            <div className="mt-3 mb-5 flex flex-row gap-5">
              <Autocomplete
                className="w-full"
                disablePortal
                options={size}
                renderInput={(params) => (
                  <TextField {...params} label="Taille" />
                )}
              />
              <Autocomplete
                className="w-full"
                disablePortal
                options={state}
                renderInput={(params) => <TextField {...params} label="État" />}
              />
            </div>
            <StyledDropzone />

            <div className="mt-10 flex items-center justify-center">
              <Button title={"Ajouter"} />
            </div>
          </div>
        </>
      }
    />
  );
}
