import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";

const AddUser = ({ addNewUserHandler, closeModal }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    gender: "",
  });

  const inputHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInput((prevState) => {
      console.log(prevState);
      return { ...prevState, [key]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    addNewUserHandler({
      id: Math.round(Math.random() * 99),
      name: input.name,
      age: input.age,
      address: input.address,
      phone: input.phone,
      gender: input.gender,
    });

    closeModal();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Form.Controller>
        <label htmlFor="name"> Name </label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          value={input.name}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="age"> Age </label>
        <input
          type="text"
          id="age"
          placeholder="Enter age"
          value={input.age}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="address"> Address </label>
        <input
          type="text"
          id="address"
          placeholder="Enter address"
          value={input.address}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="phone"> Phone </label>
        <input
          type="text"
          id="phone"
          placeholder="Enter phone"
          value={input.phone}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="gender"> Gender </label>
        <input
          type="text"
          id="gender"
          placeholder="Enter gender"
          value={input.type}
          onChange={inputHandler}
        />
      </Form.Controller>
      <div style={{ margin: "20px" }}>
        <Button type="submit" style={{ marginRight: "20px" }}>
          Add New Record
        </Button>
        <Button type="reset">Reset</Button>
      </div>
    </form>
  );
};

export default AddUser;
