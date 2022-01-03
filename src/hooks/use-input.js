import { useState } from "react";

const useInput = () => {
  // here I want to manage the value of a given input, the touched state, I want to infer its validity, combined with the touchedState
  // this hook should be flexible => the complete validation logic will be passed to the hook from outside

  const [enteredValue, setEnteredValue] = useState("");

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
};

export default useInput;
