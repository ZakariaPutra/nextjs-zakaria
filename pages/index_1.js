
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import react from "react";

export default function Home() {
  const buttonCount = 50;
  const [value, setValue] = useState(0);
  const arrayButton = [9, 8, 100, 7, 42, 665];
  const objectButton = { background: "red", text: "satu", value: 10 };
  const arrayObject = [
    { background: "red", text: "satu", value: 10 },
    { background: "green", text: "dua", value: 20 },
    { background: "blue", text: "tiga", value: 30 },
    { background: "orange", text: "satu", value: 10 },
    { background: "brown", text: "dua", value: 20 },
    { background: "black", text: "tiga", value: 30 },
  ];

  const renderValue = (renderColor, renderText) => {
    return <div style={{ color: renderColor }}>{renderText}</div>;
  };

  return (
    
    <div onClick={() => {
      setValue(4);
    }}>   
      {arrayObject.map((valObject, idxObject) => {
        return (
          <div key={idxObject}>
            <button style={{backgroundColor:  arrayObject.background}}>{renderValue(valObject.background, valObject.text)}</button>
          </div>
        );
      })}

    <div className="text-red-800">Status Lampu: {value}</div>
    </div>
  );
}
