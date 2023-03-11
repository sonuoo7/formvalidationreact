import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    // Check if email is valid
    setEmailValid(/^\S+@\S+\.\S+$/.test(value));
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);

    // Check if password is at least 8 characters long
    setPasswordValid(value.length >= 8);
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);

    // Check if confirm password matches password
    setConfirmPasswordValid(value === password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all inputs are valid
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Form cannot submitted!");
    }
  };

  const emailError = emailValid ? null : "Please enter a valid email address.";

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: emailValid ? "green" : "red" }}
        />
        {emailError && <p>{emailError}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: passwordValid ? "green" : "red" }}
        />
        {!passwordValid && <p>Password must be at least 8 characters.</p>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ borderColor: confirmPasswordValid ? "green" : "red" }}
        />
        {!confirmPasswordValid && <p>Passwords do not match.</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Form;
