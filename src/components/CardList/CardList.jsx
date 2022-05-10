import React from "react";
import Card from "../Card/Card";

export default function CardList({ list, deleteHandler }) {
  console.log(list);
  const cards = list.map(({ id, ...otherProps }) => (
    <Card key={id} {...otherProps} id={id} deleteHandler={deleteHandler} />
  ));

  return <div>{cards}</div>;
}
