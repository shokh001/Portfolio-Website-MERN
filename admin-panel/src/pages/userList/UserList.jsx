import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [load, setLoad] = useState(false);

  const fetchData = () => {
    axios.get('http://localhost:5000/api/user/')
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

  // const handleDelete = async (id) => {
  //   // await axios
  //   //   .delete(`http://localhost:5000/api/portfolio/${id}`)
  //   //   .then(res => {
  //   //     console.log(res.data.message)
  //   //   })
  //   //   .catch(err => console.log(err, 'err'))

  //   // fetchData();
  // };

  useEffect(() => {
    fetchData()
  }, [])

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "username",
      headerName: "Username",
      width: 160,
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "password",
      headerName: "Password",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            {/* <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {
        load? 
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />:
      <div>loading...</div>
      }
    </div>
  );
}
