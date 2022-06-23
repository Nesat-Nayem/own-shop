import React from "react";
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

const PendingproviderStatusModal    = ({ modalIsOpen, closeModal, jobTitle, id }) => {
console.log(id)
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
          Swal.fire("Updated!", "Provider status updated successfully.", "success");
          // cogoToast.success("User role updated successfully");
          closeModal();
        } else {
          cogoToast.error("something went wrong");
          closeModal();
        }
      });
  };

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