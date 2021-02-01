import { useState } from "react";

const useForm = (initialFields) => {
  const [fields, setField] = useState(initialFields);

  function setFieldValue(fieldName, fieldValue = "") {
    console.log({ [fieldName]: fieldValue });
    setField({ ...fields, [fieldName]: fieldValue });
  }

  return [fields, setFieldValue];
};

export default useForm;
