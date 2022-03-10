import { useRef } from "react";
import { useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name : true,
    address: true,
    city: true,
    phoneNumber: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPhoneNumberIsValid = isTenChars(enteredPhoneNumber);

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      phoneNumber: enteredPhoneNumberIsValid
    });

    const isFormValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredAddressIsValid &&
      enteredPhoneNumberIsValid;

    if (!isFormValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      city: enteredCity,
      phoneNumber: enteredPhoneNumber
    });
  };

  const nameControlStyle = `${styles.control} ${formInputsValidity.name ? '' : styles.invalid}`;
  const addressControlStyle = `${styles.control} ${formInputsValidity.address ? '' : styles.invalid}`;
  const cityControlStyle = `${styles.control} ${formInputsValidity.city ? '' : styles.invalid}`;
  const phoneNumberControlStyle = `${styles.control} ${formInputsValidity.phoneNumber ? '' : styles.invalid}`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlStyle}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name"></input>
        {!formInputsValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={addressControlStyle}>
        <label htmlFor="address">Address</label>
        <input ref={addressInputRef} type="text" id="address"></input>
        {!formInputsValidity.address && <p>Please enter a valid address.</p>}
      </div>
      <div className={cityControlStyle}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city"></input>
        {!formInputsValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={phoneNumberControlStyle}>
        <label htmlFor="phoneNumber">Mobile No</label>
        <input ref={phoneNumberInputRef} type="number" id="phoneNumber"></input>
        {!formInputsValidity.phoneNumber && <p>Please enter a valid phone number.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
