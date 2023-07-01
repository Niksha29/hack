import React, { useEffect, useState } from "react";
import './main.css';
import qr_code from './qr_code.png';

export default function Main() {

  const [lastWords, setLastWords] = useState("Username");

  useEffect(() => {
    const interval = setInterval(() => {
      const words = ["Username", "Password", "Identity"];
      const randomIndex = Math.floor(Math.random() * words.length);
      const newLastWords = words[randomIndex];
      setLastWords(newLastWords);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="box box-1">Secure you {lastWords}</div>
      <div className="box box-2">
        <img src={qr_code} alt="QR_CODE" />
      </div>
    </div>
  );
}
