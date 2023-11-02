import * as React from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./PurchaseTable.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BasicTable() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [pg, setpg] = React.useState(0);
  const [rpg, setrpg] = React.useState(6);
  function handleChangePage(newpage) {
    setpg(newpage);
  }

  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users/");
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };
  return (
    <Paper style={{ width: "83vw" }} className="purchase-table-container">
      <TableContainer
        style={{ width: "83vw" }}
      >
        <div className="table-button">
          <div align="center">
            <p>Total Purchased Items with Customer Details</p>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => navigate("/customer-form")}
            >
              Add Details
            </Button>
          </div>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell align="right">Modify</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(pg * rpg, pg * rpg + rpg).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => navigate(`/customer-form/edit/${user.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteUser(user.id)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12, 18]}
        component="div"
        count={users.length}
        rowsPerPage={rpg}
        page={pg}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
