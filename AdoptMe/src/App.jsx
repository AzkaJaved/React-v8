import React from "react";
import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
    </div>
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
{
  /* <Pet name="Luna" animal="Dog" breed="Havanese" />
<Pet animal="Bird" name="Peter" breed="Cockateil" />
<Pet animal="Cat" name="Diank" breed="Mixed" /> */
}
