import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




function First()
{
    return (
        <>
        <h2>Welcome to the First Page.</h2>
        <h3>160124737168</h3>
        </> 
        );
}
function Home() {
  return (
        <>
        <h2>Welcome to the Home Page.</h2>
        <h3>160124737168</h3>
        </> 
        );
}


function About() {
  return (
        <>
        <h2>Welcome to the About Page.</h2>
        <h3>160124737168</h3>
        </> 
        );
}


export {First, Home, About};
