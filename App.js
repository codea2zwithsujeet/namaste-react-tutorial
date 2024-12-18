import React from "react";
import ReactDOM from "react-dom/client";


//JSX
const Title = () => (<h1 id="heading">Namaste React using JSX 🚀</h1>);

//React Component -
//Class based  component - OLD
//Functional based component - NEW

const HeadingComponent = () => (
  <div id="container">
    {1000}
    <Title />
    <h1>Namaste React from Function component</h1>
  </div> 
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
