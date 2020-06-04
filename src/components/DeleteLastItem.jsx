import React, { Component } from "react";

const DeleteLastItem = (props) => {
  const handleDeleteLastItem = (event) => {
    props.deleteLastItem();
  };
  return (
    <button onClick={handleDeleteLastItem} disabled={props.noItemsFound}>
      Delete Last Item
    </button>
  );
};

export default DeleteLastItem;
