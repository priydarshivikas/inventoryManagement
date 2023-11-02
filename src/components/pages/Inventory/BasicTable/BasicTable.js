import React, { useEffect, useState } from "react";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import "./InventoryTable.css";

const BasicTable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [pg, setpg] = useState(0);
  const [rpg, setrpg] = useState(9);

  function handleChangePage(newpage) {
    setpg(newpage);
  }

  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phone: "",
    email: "",
    username: "",
  });
  const [formDataList, setFormDataList] = useState([]);

  function formhandleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data?.users?.map((user) => ({
          firstName: user.firstName,
          phone: user.phone,
          gender: user.gender,
          email: user.email,
          username: user.username,
        }));
        setUsers(mappedData);
        setFilteredUsers(mappedData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedGender(selectedValue);
    if (selectedValue === "") {
      setFilteredUsers(users);
    } else {
      const filteredData = users.filter(
        (user) => user.gender === selectedValue
      );
      setFilteredUsers(filteredData);
    }
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const formSubmission = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormDataList([...formDataList, formData]);
    setFormData({ name: "", gender: "", phone: "", email: "", username: "" });
    handleCloseForm();
  };


  return (
    <Paper style={{ width: "83vw" }} className="purchase-table-container">
      <TableContainer style={{ width: "83vw" }}>
        <Box className="inventory-table-header">
          <div className="inventory-table-heading">
            <p>Inventory Customer Records</p>
          </div>
          <div className="inventory-table-headerContent">
            <FormControl style={{ width: "100px", height: "50px" }}>
              <InputLabel>Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedGender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{ width: "100px", height: "53px" }}
              variant="contained"
              onClick={handleOpenForm}
            >
              + Add
            </Button>
          </div>
        </Box>
        <Dialog open={isFormOpen} onClose={handleCloseForm}>
          <form onSubmit={formSubmission}>
            <DialogTitle>Add User</DialogTitle>
            <DialogContent>
              <TextField
                name="name"
                value={formData.name}
                onChange={formhandleChange}
                label="Name"
                sx={{ m: 0.5 }}
                fullWidth
              />
              <TextField
                name="gender"
                value={formData.gender}
                onChange={formhandleChange}
                label="Gender"
                sx={{ m: 0.5 }}
                fullWidth
              />
              <TextField
                name="phone"
                value={formData.phone}
                onChange={formhandleChange}
                label="Phone"
                sx={{ m: 0.5 }}
                fullWidth
              />
              <TextField
                name="email"
                value={formData.email}
                onChange={formhandleChange}
                label="Email"
                sx={{ m: 0.5 }}
                fullWidth
              />
              <TextField
                name="username"
                value={formData.username}
                onChange={formhandleChange}
                label="User Name"
                sx={{ m: 0.5 }}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseForm} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Add Data
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>User Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers
              .slice(pg * rpg, pg * rpg + rpg)
              .map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.username}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[9, 18, 27]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rpg}
        page={pg}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default BasicTable;
