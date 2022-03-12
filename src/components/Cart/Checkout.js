import { useRef } from "react";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
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
      phoneNumber: enteredPhoneNumberIsValid,
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
      phoneNumber: enteredPhoneNumber,
    });
  };

  const nameControlStyle = `${styles.control} ${
    formInputsValidity.name ? "" : styles.invalid
  }`;
  const addressControlStyle = `${styles.control} ${
    formInputsValidity.address ? "" : styles.invalid
  }`;
  const cityControlStyle = `${styles.control} ${
    formInputsValidity.city ? "" : styles.invalid
  }`;
  const phoneNumberControlStyle = `${styles.control} ${
    formInputsValidity.phoneNumber ? "" : styles.invalid
  }`;

  return (
    <Fragment>
      <h1 className={styles.h1}>User Details</h1>
      <form className={styles.form} onSubmit={confirmHandler}>
        <div className={nameControlStyle}>
          <label htmlFor="name">Your Name</label>
          <input ref={nameInputRef} type="text" id="name"></input>
          {!formInputsValidity.name && <span className={styles.validation}>Please enter a valid name.</span>}
        </div>
        <div className={addressControlStyle}>
          <label htmlFor="address">Address</label>
          <input ref={addressInputRef} type="text" id="address"></input>
          {!formInputsValidity.address && <span className={styles.validation}>Please enter a valid address.</span>}
        </div>
        <div className={cityControlStyle}>
          <label htmlFor="city">City</label>
          <input ref={cityInputRef} type="text" id="city"></input>
          {!formInputsValidity.city && <span className={styles.validation}>Please enter a valid city.</span>}
        </div>
        <div className={phoneNumberControlStyle}>
          <label htmlFor="phoneNumber">Mobile No</label>
          <input
            ref={phoneNumberInputRef}
            type="number"
            id="phoneNumber"
          ></input>
          {!formInputsValidity.phoneNumber && (
            <span className={styles.validation}>Please enter a valid phone number.</span>
          )}
        </div>
        <div className={styles.actions}>
          <button type="button" onClick={props.onBack}>
            Back
          </button>
          <button className={styles.submit}>Pay {props.totalAmount}</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Checkout;
