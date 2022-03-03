import React from "react";

const Address = ({ address }) => {
  return (
    <div className="card card-border">
      <div className="address">
        <div className="address__name">{address.name}</div>
        <div className="address__contact">{address.contact}</div>
        <div className="address__address">{address.address}</div>
        <div className="address__city">{address.city}</div>
        <div className="address__state">{address.state}</div>
      </div>
    </div>
  );
};

export default Address;
