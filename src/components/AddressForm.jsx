const AddressForm = ({ addressForm, onCancel, handleChange, addAddress }) => {
  const requiredFields =
    addressForm.name &&
    addressForm.city &&
    addressForm.state &&
    addressForm.address &&
    addressForm.contact &&
    addressForm.contact.length === 10;

  return (
    <div className="address-form-wrapper">
      <h4 className="heading-4">Add Address</h4>
      <form onSubmit={addAddress}>
        <div className="input-group">
          <label htmlFor="name" className="input-label-block">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={addressForm.name}
            onChange={(e) => handleChange(e, "name")}
            className="input-item input-item-block"
          />
          {/* <small style={{color: "red"}}>
              {addressForm.name !== "" ? "Name cannot be empty": ""}
            </small> */}
        </div>
        <div className="input-group">
          <label htmlFor="contact" className="input-label-block">
            Contact Number
          </label>
          <input
            type="text"
            id="contact"
            value={addressForm.contact}
            onChange={(e) => handleChange(e, "contact")}
            className="input-item input-item-block"
          />
          <small style={{ color: "red" }}>
            {addressForm.contact.length !== 10 && addressForm.contact.length
              ? "Contact Number cannot be less than 10 digits"
              : ""}
          </small>
        </div>
        <div className="input-group">
          <label htmlFor="address" className="input-label-block">
            Address
          </label>
          <textarea
            rows="5"
            id="address"
            value={addressForm.address}
            onChange={(e) => handleChange(e, "address")}
            className="input-item input-item-block"
          />
        </div>
        <div className="input-group">
          <label htmlFor="city" className="input-label-block">
            City
          </label>
          <input
            type="text"
            id="city"
            value={addressForm.city}
            onChange={(e) => handleChange(e, "city")}
            className="input-item input-item-block"
          />
        </div>
        <div className="input-group">
          <label htmlFor="state" className="input-label-block">
            State
          </label>
          <input
            type="text"
            id="state"
            value={addressForm.state}
            onChange={(e) => handleChange(e, "state")}
            className="input-item input-item-block"
          />
        </div>
        <div className="flex justify-center flex-gap-2">
          <button className="btn btn-primary" disabled={!requiredFields}>
            Submit
          </button>
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
