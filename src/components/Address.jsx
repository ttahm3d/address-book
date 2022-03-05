import React from "react";
import { BsTrash, BsPen } from "react-icons/bs";

const Address = ({ address, deleteAddress, editAddress }) => {
  return (
    <div className="card card-border">
      <div className="address">
        <div className="address__name">{address.name}</div>
        <div className="address__contact">{address.contact}</div>
        <div className="address__address">{address.address}</div>
        <div className="address__city">{address.city}</div>
        <div className="address__state">{address.state}</div>
      </div>
      <div className="icons flex flex-gap-1">
        <button className="btn">
          <BsPen onClick={() => editAddress(address)} />
        </button>
        <button className="btn">
          <BsTrash onClick={() => deleteAddress(address.id)} />
        </button>
      </div>
    </div>
  );
};

export default Address;
