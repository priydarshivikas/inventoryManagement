import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button, IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import "../../pages/Purchase/PurchaseTable.css";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../Redux/Reducers/usersSlice";
export default function MyReturn() {
  const users = useSelector((state) => state.users);
  // console.log(users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (userIdToDelete) => {
    dispatch(deleteUser(userIdToDelete));
  };
  return (
    <Paper style={{ width: "83vw" }} className="purchase-table-container">
      <TableContainer style={{ width: "83vw" }}>
        <div className="table-button">
          <div align="center">
            <p>Total Purchased Items with Customer Details</p>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => navigate("/create-user")}
            >
              Add Details
            </Button>
          </div>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Id</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Modify</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => navigate(`/createuser/${user.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(user.id)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
