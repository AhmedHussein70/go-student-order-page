import React from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/Context";

const BookingSummary = () => {
  const { t } = useTranslation();
  const { bookingDetails, setBookingDetails } = useAppContext();

  const handleLessonChange = (e) => {
    const selectedPrice = parseInt(e.target.value, 10);
    setBookingDetails({
      ...bookingDetails,
      price: selectedPrice,
      lessons: selectedPrice / 100,
    });
  };

  return (
    <div className="booking-summary">
      <h2>{t("bookingSummary")}</h2>
      <div className="price-details">
        <p>
          {t("numberOfLessons")}:{" "}
          <span id="lessons">{bookingDetails.lessons}</span>
        </p>
        <p>
          {t("price")}: <span id="price">{bookingDetails.price}</span> EGP
        </p>
        <label htmlFor="lesson-count">{t("selectLessons")}</label>
        <select
          id="lesson-count"
          onChange={handleLessonChange}
          value={bookingDetails.price}>
          <option value="100">1</option>
          <option value="200">2</option>
          <option value="300">3</option>
        </select>
      </div>
      <button>{t("completeBooking")}</button>
    </div>
  );
};

export default BookingSummary;
