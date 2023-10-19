import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import useAuth from "./useAuth./useAuth";
import Navbar from "./Navbar";

function NewsDetails(props) {
    const {loading } = useAuth()
    const {id} = useParams()
    if(loading) {
        return <h1 className="text-5xl text-center mt-10">Loading Data...</h1>
    }
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
      <div className="sizing mt-10">
        <p>there is the detail news of id : {id} </p>
      </div>
    </>
  );
}

export default NewsDetails;
