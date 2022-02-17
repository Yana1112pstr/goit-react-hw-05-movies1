import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonGoBack() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
}

export default ButtonGoBack;
