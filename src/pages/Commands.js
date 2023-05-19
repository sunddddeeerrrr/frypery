import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PageModel from "../components/PageModel";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nom", width: 130 },
  { field: "phone", headerName: "Téléphone", width: 130 },
  { field: "address", headerName: "Adresse de livraison", width: 300 },
  { field: "total", headerName: "Total", width: 130 },
  { field: "is_delivery", headerName: "Livré", width: 130 },
  { field: "is_paied", headerName: "Payé", width: 130 },

];

const rows = [
  {
    id: 1,
    name: "Jon Snow",
    phone: "01 02 03 04 05",
    address: "Cocody Angré Tapis rouge L239",
    total: "15.000 FCFA",
    is_delivery: "Non",
    is_paied: "Non",
  },

  {
    id: 2,
    name: "Franklin Saint",
    phone: "01 02 03 04 05",
    address: "Cocody Angré Tapis rouge L239",
    total: "1.000 FCFA",
    is_delivery: "Oui",
    is_paied: "Oui",
  },
];

export default function Commands() {
  return (
    <PageModel
      title={"Liste des commandes"}
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
