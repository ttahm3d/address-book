import { useState, useEffect } from "react";
import uuid from "react-uuid";
import Address from "./components/Address";
import AddressForm from "./components/AddressForm";
import "./styles.css";

const defaultAddress = {
  id: uuid(),
  name: "",
  contactNumber: "",
  address: "",
  city: "",
  state: ""
};

export default function App() {
  const [addresses, setAddresses] = useState([]);
  const [addressForm, setAddressForm] = useState(defaultAddress);

  const addAddress = (e) => {
    e.preventDefault();
    setAddresses([...addresses, addressForm]);
    setAddressForm(defaultAddress);
  };

  const handleChange = (e, fieldName) => {
    setAddressForm((address) => ({
      ...address,
      [fieldName]: e.target.value
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
      <AddressForm
        addressForm={addressForm}
        addAddress={addAddress}
        handleChange={handleChange}
      />
      <div className="address-cards-wrapper">
        {addresses.map((address) => (
          <Address key={address.id} address={address} />
        ))}
      </div>
    </div>
  );
}
