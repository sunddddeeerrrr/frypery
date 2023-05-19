import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PageModel from "../components/PageModel";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Prénom", width: 130 },
  { field: "lastName", headerName: "Nom", width: 130 },
  {
    field: "phone",
    headerName: "Téléphone",
    width: 130,
  },
  {
    field: "products_number",
    headerName: "Produits en ligne",
    width: 130,
  },
  {
    field: "is_verified",
    headerName: "Vérifié",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    phone: "01 02 03 04 05",
    products_number: "0",
    is_verified: "Non",
  },
  {
    id: 2,
    lastName: "Saint",
    firstName: "Franklin",
    phone: "01 02 03 04 05",
    products_number: "7",
    is_verified: "Oui",
  },
];

export default function Customers() {
  return (
    <PageModel
      title={"Liste des clients"}
      content={
        <div>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      }
    />
  );
}
