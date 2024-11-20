import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/Context";
import { useTranslation } from "react-i18next";

const RegistrationForm = () => {
  const { language, bookingDetails, setBookingDetails } = useAppContext();
  const [countries, setCountries] = useState([]);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(t("formSubmitted"));
  };

  return (
    <div className="registration-form">
      <h1>{t("registration_and_booking")}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{t("full_name")}</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t("full_name")}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">{t("email")}</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t("email")}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">{t("phone_number")}</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder={t("phone_number")}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="country">{t("country")}</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required>
          {countries.length > 0 ? (
            countries.map((country) => (
              <option key={country.cca2} value={country.cca2}>
                {country.name.common}
              </option>
            ))
          ) : (
            <option disabled>Loading countries...</option>
          )}
        </select>
        <button type="submit">{t("submit")}</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
