import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/Context";
import "./BookingSummary.css";
const BookingSummary = () => {
  const { t } = useTranslation();
  const { bookingDetails, setBookingDetails } = useAppContext();

  const [discount, setDiscount] = useState(4);
  const [setupFee, setSetupFee] = useState(0);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleLessonChange = (e) => {
    const selectedPrice = parseInt(e.target.value, 10);
    const sessionsPerMonth = selectedPrice / 100;
    const total = selectedPrice * sessionsPerMonth;
    const discountedTotal = total * (1 - discount / 100);

    setBookingDetails({
      ...bookingDetails,
      price: selectedPrice,
      sessions: sessionsPerMonth,
      total,
      discountedTotal,
    });
  };

  return (
    <div className="booking-summary">
      <h2>{t("orderOverview")}</h2>

      {}
      <div className="duration-options">
        <button>6 {t("months")}</button>
        <button>9 {t("months")}</button>
        <button>12 {t("months")}</button>
        {}
      </div>

      {}
      <div className="price-details">
        <p>
          {t("numberOfSessionsPM")}: <span>{bookingDetails.sessions || 8}</span>
        </p>
        <p>
          {t("regularPrice")}: <span>{bookingDetails.price || 29.6}€</span>
        </p>
        <p>
          {t("yourPrice")}:{" "}
          <span>{(bookingDetails.price || 28.4).toFixed(2)}€</span>
        </p>
        <p>
          {t("discount")}: <span>{discount}%</span> -{" "}
          <span>
            {(-((bookingDetails.price || 28.4) * discount) / 100).toFixed(2)}€
          </span>
        </p>
        <p>
          {t("setupFee")}: <span>{setupFee.toFixed(2)}€</span>
        </p>
        <p>
          {t("totalPM")}:{" "}
          <span>{(bookingDetails.discountedTotal || 227.2).toFixed(2)}€</span>
        </p>
      </div>

      {}
      <label htmlFor="lesson-count">{t("selectLessons")}</label>
      <select
        id="lesson-count"
        onChange={handleLessonChange}
        value={bookingDetails.price}>
        <option value="100">1</option>
        <option value="200">2</option>
        <option value="300">3</option>
      </select>

      {}
      <div className="terms">
        <input
          type="checkbox"
          id="terms"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />
        <label htmlFor="terms">
          {t("acceptTerms")} & {t("rightOfWithdrawal")}
        </label>
      </div>

      {}
      <button disabled={!acceptTerms}>{t("orderNow")}</button>
    </div>
  );
};

export default BookingSummary;
