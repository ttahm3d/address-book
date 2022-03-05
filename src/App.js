import { useState, useEffect } from "react";
import uuid from "react-uuid";
import Address from "./components/Address";
import AddressForm from "./components/AddressForm";
import "./styles.css";

const defaultAddress = {
  id: uuid(),
  name: "",
  contact: "",
  address: "",
  city: "",
  state: ""
};

export default function App() {
  const [addresses, setAddresses] = useState([]);
  const [addressForm, setAddressForm] = useState(defaultAddress);
  const [isEditing, setIsEditing] = useState(false);

  const addAddress = (e) => {
    e.preventDefault();
    if (!isEditing) setAddresses([...addresses, addressForm]);
    else {
      const newAddresses = addresses.map((address) => {
        if (address.id === addressForm.id) {
          return { ...addressForm };
        }
        return address;
      });
      setAddresses(newAddresses);
    }
    setAddressForm(defaultAddress);
  };

  const onCancel = () => {
    setAddressForm(defaultAddress);
  };

  const editAddress = (address) => {
    setAddressForm(address);
    setIsEditing(true);
  };

  useEffect(() => {}, [addressForm]);

  const deleteAddress = (id) => {
    setAddresses((addresses) =>
      addresses.filter((address) => address.id !== id)
    );
  };

  const handleChange = (e, fieldName) => {
    setAddressForm((address) => ({
      ...address,
      [fieldName]:
        fieldName === "contact"
          ? e.target.value.trim().replace(/[^0-9]/g, "")
          : e.target.value
    }));
  };

  useEffect(() => {
    const data = localStorage.getItem("addresses");
    if (data) {
      setAddresses(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  return (
    <div className="container">
      <h1>Address Book</h1>
      <div className="wrapper">
        <AddressForm
          addressForm={addressForm}
          addAddress={addAddress}
          handleChange={handleChange}
        />
        <div className="address-cards-wrapper">
          {addresses.map((address) => (
            <Address
              key={address.id}
              address={address}
              deleteAddress={deleteAddress}
              editAddress={editAddress}
              isEditing={isEditing}
              onCancel={onCancel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
