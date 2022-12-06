import React from 'react';

function PasswordField() {
  const passwordInputId = React.useId();
  const passwordHintId = React.useId();
  return (
    <>
      <label htmlFor={passwordInputId}>Password:</label>
      <input
        id={passwordInputId}
        type="password"
        aria-describedby={passwordHintId}
      />
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
}

export default App;
