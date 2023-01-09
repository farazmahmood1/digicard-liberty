import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePage from "../Main/HomePage";
import UserProfile from "../Profile/UserProfile";

const Decider = () => {
  const [id, setId] = useState("");
  function getLink() {
    const url = `${window.location.href}`;
    const part = url.split("?");
    const path = part[1];
    setId(path !== null ? path : "noID");
  }

  console.log(id);

  useEffect(() => {
    getLink();
  }, []);

  return <>{id == "noID" ? <HomePage /> : <UserProfile id={id} />}</>;
};

export default Decider;
