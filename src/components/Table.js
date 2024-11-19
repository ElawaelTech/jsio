import DataTable from "react-data-table-component";
import { useState } from "react";
function Table() {
  const [data, setData] = useState(rows);
  // Handle Search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue: Boolean;
    let personIDValue: Boolean;
    let fullNameValue: Boolean;
    let heightValue: Boolean;
    let eyeColorValue: Boolean;

    const newRows = rows.filter((row) => {
      personIDValue = row.personID
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      fullNameValue = row.fullName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      heightValue = row.height
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      eyeColorValue = row.eyeColor
        .toLowerCase()
        .includes(e.target.value.toLowerCase());

      if (personIDValue) {
        searchValue = personIDValue;
      } else if (fullNameValue) {
        searchValue = fullNameValue;
      } else if (heightValue) {
        searchValue = heightValue;
      } else {
        searchValue = eyeColorValue;
      }

      return searchValue;
    });

    setData(newRows);
  };
  const columns = [
    {
      name: "ID",
      selector: (row) => row.personID,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: "Height",
      selector: (row) => row.height,
      sortable: true,
    },
    {
      name: "Eye Color",
      selector: (row) => row.eyeColor,
      sortable: true,
    },
  ];

  const rows = [
    {
      personID: 1,
      fullName: "Kate Shein",
      height: "1.79m",
      eyeColor: "blue",
    },
    //....remaining objects for the 2nd to 14th person
    {
      personID: 15,
      fullName: "Isabella Thompson",
      height: "1.79m",
      eyeColor: "blue",
    },
  ];
  /*
  const newRows = rows.filter((row) => {
    personIDValue = row.personID
      .toString()
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
    fullNameValue = row.fullName
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
    heightValue = row.height
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
    eyeColorValue = row.eyeColor
      .toLowerCase()
      .includes(e.target.value.toLowerCase());

    if (personIDValue) {
      searchValue = personIDValue;
    } else if (fullNameValue) {
      searchValue = fullNameValue;
    } else if (heightValue) {
      searchValue = heightValue;
    } else {
      searchValue = eyeColorValue;
    }

    return searchValue;
  });
  */
  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <input
          type="search"
          className="form-control-sm border ps-3"
          placeholder="Search"
          onChange={handleSearch}
        />

        <DataTable
          columns={columns}
          data={rows}
          fixedHeader
          title="React-Data-Table-Component Tutorial"
          pagination
          selectableRows
        />
      </div>
    </>
  );
}
export default Table;
