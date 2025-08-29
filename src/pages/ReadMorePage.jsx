import React from "react";
import ReadMoreCard from "../components/ReadMoreCard/ReadMoreCard";
import Navbar from "../components/NavBar/NavBar";

export default function ReadMorePage( {id} ) {
    return (
        <div className="w-full h-screen bg-gradient-to-br from-green-300 via-blue-300 to-green-500">
          <Navbar />
          <ReadMoreCard id={id}/>
        </div>
    )
}