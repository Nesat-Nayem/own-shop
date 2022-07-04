import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import PendingproviderStatusModal from "./PendingproviderStatusModal";
import Swal from "sweetalert2";
import Modal from "./Modal";
import { totalEarning } from "../../../utilities/dataAnalize";
console.log(totalEarning);
// modal details

let pendingstyle ={
  // backgroundColor: 'red',
  color:'red',
  fontWeight:'bold'

}
let approvestyle ={
  // backgroundColor: 'green',
  color:'green',
  fontWeight:'bold'
  

}

const PendingProviders = () => {
  const [provider, setProvider] = useState([""]);
  // console.log(provider)
  useEffect(() => {
    fetch("http://localhost:7070/api/getprovider")
      .then((res) => res.json())
      .then((data) => setProvider(data.reverse()));
    // .then(data=>console.log(data.length))
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [blogId, setBlogId] = useState(null);

  const [userstatusupdate, setUserstatusupdate] = useState("");

  // provider email to get user collection user data
  const [updateprovieremail, setUpdateprovideremail] = useState();

  useEffect(() => {
    fetch(`http://localhost:7070/api/users/email/${updateprovieremail}`)
      .then((res) => res.json())
      .then((data) => setUserstatusupdate(data[0]._id));
  });
  // get email throw id from provider collection

  const [pupdateid, setpupdateid] = useState("");
  // console.log(pupdateid)
  useEffect(() => {
    fetch(`http://localhost:7070/api/getproviderid/${pupdateid}`)
      .then((res) => res.json())
      .then((data) => setUpdateprovideremail(data[0].email));
  });
  // get email throw id from provider collection

  // modal functions

  function openModal(id) {
    // console.log(id)

    setIsOpen(true);
    setBlogId(id);

    setpupdateid(id);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // fast id to get email
  const handleDeleteCustomer = (id) => {
    // setProviderId(id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7070/api/deleteProvider/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data._id) {
              Swal.fire("Deleted!", "Customer has been deleted.", "success");
            }
          });
      }
    });
  };

  // modal
  const [modal, setModal] = useState(false);
  const [tampdata, setTampdata] = useState([]);
  // console.log(tampdata)

  // earning state
  const [earning, setEarning] = useState("");
  console.log("earning", earning);
  const [eremail, seterEmail] = useState("");
  // console.log("outsite email", eremail);

  useEffect(() => {
    fetch(`http://localhost:7070/api/orders/provideremailorder/${eremail}`)
      .then((res) => res.json())
      .then((data) => setEarning(data));
  });

  // earning state

  const getData = (username, photoURL, createdAt, email) => {
    // console.log(email);
    seterEmail(email);

    let tempData = [username, photoURL, createdAt,email];
    // setTampdata(item =>[1, ...tempData])
    setTampdata(tempData);
    return setModal(true);
  };
  // modal

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead sx={{ boxShadow: 2 }}>
            <TableRow>
              <TableCell>Provider Name</TableCell>
              <TableCell>Contract No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Information</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>update</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {provider.map((provider, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                    src={provider?.photoURL}
                  />
                  {provider?.username}
                </TableCell>
                <TableCell>{provider?.phone}</TableCell>
                <TableCell>{provider?.email}</TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      getData(
                        provider?.username,
                        provider?.photoURL,
                        provider.createdAt,
                        provider?.email
                      )
                    }
                  >
                    Details
                  </Button>
                  {modal === true ? (
                    <Modal
                      earning={earning}
                      data={tampdata}
                      hide={() => setModal(false)}
                    ></Modal>
                  ) : (
                    ""
                  )}
                </TableCell>
                {/* modal  */}
                <TableCell style={provider.access === 'Active'?approvestyle:pendingstyle}>{provider?.access}</TableCell>
                <TableCell>
                  <Button onClick={() => openModal(provider?._id)}>
                    updated
                  </Button>

                  <PendingproviderStatusModal
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    userStatusid={userstatusupdate}
                    jobTitle={provider?.username}
                    id={blogId}
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteCustomer(provider?._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PendingProviders;
