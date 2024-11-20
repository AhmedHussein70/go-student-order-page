// src/components/LanguageSelector.js
import React from "react";
import egyptFlag from "../../images/egypt-flag.png";
import ukFlag from "../../images/uk-flag.png"
import { useAppContext } from "../../context/Context";

const LanguageSelector = () => {
  const { setLanguage } = useAppContext();

  return (
    <div className="language-selector">
      <button onClick={() => setLanguage("ar")}>
        <img src={egyptFlag} alt="Arabic" />
      </button>
      <button onClick={() => setLanguage("en")}>
        <img src={ukFlag} alt="English" />
      </button>
    </div>
  );
};

export default LanguageSelector;
