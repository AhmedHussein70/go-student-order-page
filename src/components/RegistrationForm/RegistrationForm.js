import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const RegistrationForm = () => {
  const { t } = useTranslation();
  const [countries, setCountries] = useState([]);

  const [formData, setFormData] = useState({
    loginPhone: "",
    contactPhone: "",
    email: "",
    contactName: "",
    address: "",
    addressNr: "",
    postalCode: "",
    city: "",
    country: "",
    monthlySessions: "8 Sessions",
    paymentMethod: "SEPA",
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
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
    console.log("Form Data Submitted:", formData);
    alert(t("formSubmitted"));
  };

  return (
    <div className="registration-form">
      <h1>{t("registration_and_booking")}</h1>
      <form onSubmit={handleSubmit}>
        {}
        <label htmlFor="loginPhone">{t("login_phone")}</label>
        <input
          type="tel"
          id="loginPhone"
          name="loginPhone"
          placeholder={t("login_phone")}
          value={formData.loginPhone}
          onChange={handleChange}
          required
        />

        {}
        <label htmlFor="contactPhone">{t("contact_phone")}</label>
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          placeholder={t("contact_phone")}
          value={formData.contactPhone}
          onChange={handleChange}
          required
        />

        {}
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

        {}
        <label htmlFor="contactName">{t("contact_name")}</label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          placeholder={t("contact_name")}
          value={formData.contactName}
          onChange={handleChange}
          required
        />

        {}
        <label htmlFor="address">{t("address")}</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            id="address"
            name="address"
            placeholder={t("address")}
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="addressNr"
            name="addressNr"
            placeholder={t("address_number")}
            value={formData.addressNr}
            onChange={handleChange}
            required
          />
        </div>

        {}
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder={t("postal_code")}
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="city"
            name="city"
            placeholder={t("city")}
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        {}
        <label htmlFor="country">{t("country")}</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          {countries.length > 0 ? (
            countries.map((country) => (
              <option key={country.cca2} value={country.name.common}>
                {country.name.common}
              </option>
            ))
          ) : (
            <option disabled>{t("loading_countries")}</option>
          )}
        </select>

        {}
        <label htmlFor="monthlySessions">{t("monthly_sessions")}</label>
        <select
          id="monthlySessions"
          name="monthlySessions"
          value={formData.monthlySessions}
          onChange={handleChange}
        >
          <option value="4 Sessions">{t("4_sessions")}</option>
          <option value="8 Sessions">{t("8_sessions")}</option>
          <option value="12 Sessions">{t("12_sessions")}</option>
        </select>

        {}
        <label>{t("payment_method")}</label>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="SEPA"
              checked={formData.paymentMethod === "SEPA"}
              onChange={handleChange}
            />
            SEPA
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="CreditCard"
              checked={formData.paymentMethod === "CreditCard"}
              onChange={handleChange}
            />
            {t("credit_card")}
          </label>
        </div>

        {}
        {formData.paymentMethod === "CreditCard" && (
          <div>
            <label htmlFor="cardHolder">{t("card_holder")}</label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              placeholder={t("card_holder")}
              value={formData.cardHolder}
              onChange={handleChange}
              required
            />
            <label htmlFor="cardNumber">{t("card_number")}</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="cvc"
                name="cvc"
                placeholder="CVC"
                value={formData.cvc}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {}
        <button type="submit">{t("submit")}</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
