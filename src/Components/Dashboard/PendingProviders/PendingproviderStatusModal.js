import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import cogoToast from "cogo-toast";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PendingproviderStatusModal    = ({ modalIsOpen, closeModal, jobTitle, id,userStatusid }) => {
// console.log('from provider collection',id)
// console.log('from user collection',userStatusid)

// get pending provider details by id 

// const [penprovider,setPenprovider] = useState('')
// console.log(penprovider)
// useEffect(()=>{
//   fetch(`http://localhost:7070/api/getproviderid/${id}`)
//   .then(res => res.json())
//   .then(data => setPenprovider(data[0].email))
// })







  const { register, handleSubmit } = useForm();








  const onSubmit = (data) => {
    const updatedUser = {
        access: data.status,
    };
    fetch(`http://localhost:7070/api/updateprovider/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // Swal.fire("Updated!", "Provider status updated successfully.", "success");
          // cogoToast.success("User role updated successfully");
          // closeModal();
        } else {
          cogoToast.error("something went wrong");
          closeModal();
        }
      });

    fetch(`http://localhost:7070/api/users/update/${userStatusid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire("Updated!", "Provider status updated successfully.", "success");
          // cogoToast.success("User role updated successfully");
          closeModal();
        } else {
          cogoToast.error("something went wrong");
          closeModal();
        }
      });
  };

  // const newid = id

  // console.log('id on click',newid)
  
// get email throw id 
// const [providerEmail,setProviderEmail] = useState([])
// useEffect(()=>{
//   fetch(`http://localhost:7070/api/getproviderid/${newid}`)
//   .then(res => res.json())
//   .then(data => console.log(data))
// })

// get email throw id 


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Jo Update Modal"
    >
      <button onClick={closeModal}>X</button>
      <div>
        <h1 className="text-center ">{jobTitle}</h1>
        <h6 className="text-center py-5 text-green-600">Update Provider Status</h6>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
        <select
          className="w-full  text-black border px-3 py-2 my-5 rounded focus:outline-none flex justify-center"
          {...register("status", { required: true })}
        >
          update role
          <option value="InActive">InActive</option>
          <option value="Active">Active</option>
        </select>

        <div className="text-center">
          <input style={{padding:'5px 10px'}}
            className=""
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </Modal>
  );
};

export default PendingproviderStatusModal;