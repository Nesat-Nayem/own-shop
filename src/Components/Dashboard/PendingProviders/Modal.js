import { Rating } from "@mui/material";
import React from "react";
import "./Modal.css";
const Modal = (props) => {
  const { data, hide, earning } = props;
  console.log("from modal", earning);

  let total = 0;
  if (earning.length > 0) {
    earning?.forEach((item) => {
      total += item.price;
    });
  }
  console.log(total);

  // console.log('total price here',price)

  let modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8) ",
    marginTop: "50px",
  };

  let imgStyle = {
    width: "150px",
    height: "150px",
    // margin: '0 auto'
  };
  return (
    <div className="modal show fade" style={modalStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> {data[0]}</h5>
            <button type="button" className="btn-close" onClick={hide}></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <img
                  style={imgStyle}
                  src={data[1]}
                  className="img-fluid d-flex justify-content-center"
                />
              </div>
              <div className="col-md-6">
                <h5 className="mt-3">Social Links</h5>
                <div className="socialLinks ">
                  <span>
                    <i className="fab fa-facebook-f"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span>
                    <i className="fab fa-instagram"></i>
                  </span>
                  <span>
                    <i className="fab fa-google"></i>
                  </span>
                </div>
              </div>
            </div>
            {/* <p>{data[2]}</p> */}
            <div className="row">
              <div className="col-md-6">
                <h5 style={{ color: "#C71585" }} className="mt-4">
                  Name: {data[0]}
                </h5>

                <Rating name="simple-controlled" value={4.5} />
                <h6 style={{ color: "#C71585" }}>Email: {data[3]}</h6>
                <h6 style={{ color: "#C71585" }}>Address: 1602 AED 360000 </h6>
              </div>
              <div className="col-md-6 mt-5">
                <h6 style={{ color: "#20B2AA" }}>
                  Register: {new Date(data[2])?.toDateString()}
                </h6>
                <h6 style={{ color: "#20B2AA" }}>Total Earning: {total}</h6>
                <h6 style={{ color: "#20B2AA" }}>
                  Total Sels: {earning.length}{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
