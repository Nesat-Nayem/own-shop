import React from 'react';

const Modal = (props) => {
    const {data,hide, earning} = props
    console.log('from modal',earning)
   

  let total = 0;
  if(earning.length > 0){
    earning?.forEach(item => {
      total +=item.price
    });
  
   

  }
  console.log(total)
   
// console.log('total price here',price)


    let modalStyle = {
        display:'block',
        backgroundColor:'rgba(0,0,0,0.8) ' ,
        marginTop:'50px',
       
    }

    let imgStyle ={
        width:'150px',
        height:'150px',
        margin: '0 auto'
        
    }
    return (
        <div className="modal show fade" style={modalStyle}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title"> {data[0]}</h5>
        <button type="button"  className="btn-close" onClick={hide} ></button>
      </div>
      <div className="modal-body">
        <img style={imgStyle}  src={data[1]} className="img-fluid d-flex justify-content-center" />
        {/* <p>{data[2]}</p> */}
        <h6 className='mt-4'>Name: {data[0]}</h6>
        <p>Register: {new Date(data[2])?.toDateString()}</p>
        <p>Total Earning: {total}</p>
        <p>Total Sels: {earning.length} </p>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default Modal;