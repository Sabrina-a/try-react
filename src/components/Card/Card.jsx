import React from "react";
import style from "./Card.module.css";
import { Table } from "react-bootstrap";
const Card = ({ name, age, address, phone, type, id, deleteHandler }) => {
  return (
    <Table
      striped
      bordered
      className={style.table}
      style={{ backgroundColor: type === "girl" ? "pink" : "lightblue" }}
    >
      <thead>
        <tr className={style.tableTr}>
          <th> Name</th>
          <th> Age</th>
          <th>Address</th>
          <th>Mobile</th>
          <th>
            <button
              variant="danger"
              className={style.deleteBtn}
              onClick={(e) => {
                deleteHandler(e, id);
              }}
            >
              X
            </button>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className={style.tableTr}>
          <td>{name}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td>{phone}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Card;
