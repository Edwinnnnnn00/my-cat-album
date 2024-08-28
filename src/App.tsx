// import { useState } from "react";
import "./App.css";
import CatClass from "./components/CatClass";

function App() {
  // const [count, setCount] = useState(0);

  // const CatPic = [];

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <CatClass url="https://cataas.com/cat" />
        <CatClass url="https://cataas.com/cat" />
      </div>

      <div className="my-8">
        <h1 className="text-3xl font-bold">Ooi's Family Cat Album</h1>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <CatClass url="https://cataas.com/cat" />
        <CatClass url="https://cataas.com/cat" />
      </div>
      <p className="read-the-docs mt-4">Developed by: Edwin Ooi Yong Qing</p>
    </>
  );
}

export default App;
