import React, { useEffect, useState } from "react";
import StdForm from "./StdForm";
import MainForm from "./MainForm";

function Form() {
  const [mainFormData, setMainFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [stdFormDetail, setStdFormDetail] = useState([]);

  const handleMainFormOnChange = (e) => {
    const { name, value } = e.target;
    setMainFormData({ ...mainFormData, [name]: value });
  };

  const handleStdFormOnChange = (e, index) => {
    const { name, value } = e.target;

    setStdFormDetail((prevState) =>
      prevState.map((formData, i) => {
        if (i === index) {
          return {
            ...formData,
            [name]: value,
          };
        }

        return formData;
      })
    );
  };

  const removeForm = (index) => {
    const values = [...stdFormDetail]
    values.splice(index, 1)
    setStdFormDetail(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["firstName", "lastName", "email", "phoneNumber"];
    const emptyFields = requiredFields.filter((field) => !mainFormData[field]);

    if (emptyFields.length > 0) {
      alert("Please filled all required fields.");
      return;
    } else {
      alert("Form submitted Successfully");
    }

    console.log(mainFormData);
    console.log(stdFormDetail);

    // setStep((prevStep) => prevStep + 1);
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    console.log("I am adding");
    setStdFormDetail([
      ...stdFormDetail,
      {
        id: crypto.randomUUID(),
        degree: "",
        university: "",
        grade: "",
        age: "",
      },
    ]);
  };

  useEffect(() => {
    console.log(stdFormDetail);
  }, [stdFormDetail]);

  // const stdArray =()=>{

  // }

  return (
    <>
      <MainForm
        formData={mainFormData}
        handleSubmit={handleSubmit}
        handleAddForm={handleAddForm}
        handleUpdate={handleMainFormOnChange}
      />

      {stdFormDetail.map((stdData, index) => (
        <StdForm
          key={stdData.id}
          index={index}
          formData={stdData}
          handleUpdate={handleStdFormOnChange}
          handleAddForm={handleAddForm}
          handleSubmit={handleSubmit}
          removeForm={removeForm}
        />
      ))}
    </>
  );
}

export default Form;
