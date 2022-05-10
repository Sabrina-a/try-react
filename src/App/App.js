import React, { useState, useRef } from "react";
import CardList from "../components/CardList/CardList";
import Filter from "../components/Filter/Filter";
import Modal from "../components/Modal/Modal";
import Button from "../components/Layout/Button";
import AddUser from "../components/AddUser/AddUser";
import "./App.css";
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const inputEl = useRef(null);
  const [state, setState] = useState([
    {
      id: 1,
      name: "ali",
      age: 20,
      address: "cairo",
      phone: "01010101010",
      gender: "male",
    },
    {
      id: 2,
      name: "alaa",
      age: 20,
      address: "cairo",
      phone: "01010101014",
      gender: "female",
    },
    {
      id: 3,
      name: "ahmed",
      age: 21,
      address: "zag",
      phone: "01010101011",
      gender: "male",
    },
    {
      id: 4,
      name: "laila",
      age: 21,
      address: "zag",
      phone: "01010101015",
      type: "female",
    },
    {
      id: 5,
      name: "omar",
      age: 22,
      address: "alex",
      phone: "01010101012",
      gender: "male",
    },
    {
      id: 6,
      name: "salma",
      age: 22,
      address: "alex",
      phone: "01010101016",
      gender: "female",
    },
    {
      id: 7,
      name: "amir",
      age: 20,
      address: "giza",
      phone: "01010101013",
      gender: "male",
    },
    {
      id: 8,
      name: "maha",
      age: 20,
      address: "giza",
      phone: "01010101017",
      gender: "female",
    },
  ]);

  const [cardToggle, setCardToggle] = useState(false);
  const [filter, setFilter] = useState("");
  // const girls = [
  //   { name: "alaa", age: 20, address: "cairo", mobile: "01010101014" },
  //   { name: "laila", age: 21, address: "zag", mobile: "01010101015" },
  //   { name: "salma", age: 22, address: "alex", mobile: "01010101016" },
  //   { name: "maha", age: 20, address: "giza", mobile: "01010101017" },
  // ];

  const deleteHandler = (e, clickedIndex) => {
    // const deleteOperation = state.filter((el, index) => index !== clickedIndex);
    // console.log(deleteOperation);
    // setState(deleteOperation);
    setState((prevState) => {
      return prevState.filter((el) => el.id !== clickedIndex);
    });
    console.log(state);
  };
  const toggleHandler = () => {
    console.log("clicked");
    setCardToggle(!cardToggle);
  };

  const testHandler = () => {
    console.log(inputEl);
  };
  const focusHandler = () => {
    inputEl.current.focus();
  };

  //callback to pass data from parent(app) to the child(filter)
  const filterNames = (name) => {
    setFilter(name);
  };

  const namesHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    } else {
      return state;
    }
  };

  const addNewUserHandler = (data) => {
    console.log(data);
    setState((prevState) => setState([...prevState, data]));
  };

  return (
    <>
      <div>
        <h1>List Of Data</h1>
        <Button onClick={toggleHandler}>
          {cardToggle ? "Hide Names" : "Show Names"}
        </Button>

        {/* <button
        style={{ marginBottom: "20px" }}
        onClick={() => {
          setShowModal(true);
        }}
      >
        New Record
      </button> */}
        <Button
          onClick={() => {
            setShowModal(true);
          }}
        >
          New Record
        </Button>

        <div className={cardToggle ? "show" : "hide"}>
          <div style={{ marginBottom: "20px" }}>
            {/* {useRef} */}
            <input
              type="text"
              placeholder="for test ref"
              ref={inputEl}
              onChange={testHandler}
            />

            <button onClick={focusHandler}>Click me</button>
          </div>
          <Filter filteration={filterNames} />
          <CardList list={namesHandler()} deleteHandler={deleteHandler} />
        </div>
        {/* <h1>hi girls</h1>
      <Card list={girls} types="girl" /> */}
      </div>

      <Modal
        show={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
      >
        <AddUser
          addNewUserHandler={addNewUserHandler}
          closeModal={() => {
            setShowModal(false);
          }}
        />
      </Modal>
    </>
  );
};

export default App;
