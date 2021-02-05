import { useState } from "react";

const useForm = (initialFields) => {
  const INITIAL = initialFields;
  const [fields, setField] = useState(INITIAL);

  function setFieldValue(fieldName, fieldValue = "") {
    console.log({ [fieldName]: fieldValue });
    setField({ ...fields, [fieldName]: fieldValue });
  }

  function resetFields() {
    setField(INITIAL);
  }

  return [fields, setFieldValue, resetFields];
};

export default useForm;
