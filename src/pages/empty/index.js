import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

const EmptyPage = () => {
  const [value, setValue] = useState();

  return (
    <span>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={(e) => setValue(e)}
      />
    </span>
  );
};

export default EmptyPage;
