import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchData = () => {
    axios.get('http://localhost:5000/api/portfolio/')
      .then(res => {
        let id = 0;
        res.data.data.forEach((value) => {
          id++;
          value = Object.assign(value, { id })
        })
        setData(res.data.data)

        setLoad(true);
      })
      .catch(err => console.log(err, 'err'))
  }

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/portfolio/${id}`)
      .then(res => {
        console.log(res.data.message)
      })
      .catch(err => console.log(err, 'err'))

    fetchData();
  };

  useEffect(() => {
    fetchData()
  }, [])


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "portfolio",
      headerName: "Portfolio",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      {
        load ? (
          <>
            <Link className="productAddButton" to="/newproduct">
              Create
            </Link>
            <DataGrid
              rows={data}
              disableSelectionOnClick
              columns={columns}
              pageSize={8}
              checkboxSelection
            />
          </>
        ) :
          <div className="productList">Loading...</div>
      }
    </div>
  );
}
