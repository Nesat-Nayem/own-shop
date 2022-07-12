import React from 'react';
import { useSelector } from 'react-redux';
import './VendorProfile.css'

const VendorProfile = () => {
    const user = useSelector((state) => state.user.user);
    return (
        <div>
            <h6 className='hcolor' style={{fontWeight:'bold'}}>vendor profile</h6>
            <div className='row mt-5'>
                <div className='col-md-6 col-12 text-center'>
                  <div className='d-flex justify-content-center' >
                  <div  className='text-start cstextstle'>
                    <p>Name :</p>
                    <h6>{user.username}</h6>
                    <p>Email</p>
                    <h6>{user.email}</h6>
                    <p>Role</p>
                    <h6>{user.role}</h6>
                    <p>Location</p>
                    <h6>Dubai, UAE</h6>
                    <p>Phone</p>
                    <h6>{user.phone}</h6>
                    <p>Company Name</p>
                    <h6>Amazon</h6>
                    <p>Company website</p>
                    <h6>www.amazon.com</h6>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-12'>
                  <div className='d-flex justify-content-center'>
                  <img  src={user.photoURL} />
                  </div>
                </div>
            </div>
        </div>
    );
};

export default VendorProfile;