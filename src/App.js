import React, { useEffect } from "react";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import BookingSummary from "./components/BookingSummary/BookingSummary";
import { useAppContext } from "./context/Context";
import i18n from "./translation/i18n";

function App() {
  const { language } = useAppContext();

  useEffect(() => {
    i18n.changeLanguage(language);

    const direction = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="container">
      <LanguageSelector />
      <RegistrationForm />
      <BookingSummary />
    </div>
  );
}

export default App;
