import React from "react";
import PageModel from "../components/PageModel";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AllProducts() {
  const productsArr = [
    {
      id: 1,
      name: "product_1",
      imgUrl: "",
      categoryId: "catId_1",
      subCategoryId: "subCatId_1",
      price: "15.000 FCFA",
    },
    {
      id: 2,
      name: "product_1",
      imgUrl: "",
      categoryId: "catId_1",
      subCategoryId: "subCatId_1",
      price: "15.000 FCFA",
    },
    {
      id: 3,
      name: "product_1",
      imgUrl: "",
      categoryId: "catId_1",
      subCategoryId: "subCatId_1",
      price: "15.000 FCFA",
    },
    {
      id: 4,
      name: "product_1",
      imgUrl: "",
      categoryId: "catId_1",
      subCategoryId: "subCatId_1",
      price: "15.000 FCFA",
    },
    {
      id: 5,
      name: "product_1",
      imgUrl: "",
      categoryId: "catId_1",
      subCategoryId: "subCatId_1",
      price: "15.000 FCFA",
    },
    {
      id: 6,
      name: "product_1",
      imgUrl: "",
      categoryId: "catId_1",
      subCategoryId: "subCatId_1",
      price: "15.000 FCFA",
    },
  ];

  return (
    <div>
      <PageModel
        title={"Liste des produits"}
        content={
          <div className="flex flex-wrap gap-5">
            {productsArr.map((item, i) => (
              <div className="relative w-[23%] rounded-md shadow-md">
                <img
                  className="w-full h-10/12"
                  src="https://placehold.co/600x400"
                />
                <div className="p-3 flex flex-col">
                  <span className="italic text-xs text-gray-300">
                    {item.categoryId} {">"} {item.categoryId}
                  </span>
                  <h4 className="font-semibold text-md">{item.name}</h4>
                  <span>{item.price}</span>
                </div>
                <div className="absolute top-1 right-1">
                  <button className="mb-1 w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100">
                    <CreateIcon fontSize="5" className="text-gray-500" />
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100">
                    <DeleteIcon fontSize="5" className="text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}
