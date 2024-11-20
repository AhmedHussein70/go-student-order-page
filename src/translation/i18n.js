import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        registration_and_booking: "Registration and Booking",
        full_name: "Full Name",
        email: "Email",
        phone_number: "Phone Number",
        country: "Country",
        submit: "Submit",
        bookingSummary: "Booking Summary",
        numberOfLessons: "Number of lessons",
        price: "Price",
        selectLessons: "Select number of lessons",
        completeBooking: "Complete Booking",
      },
    },
    ar: {
      translation: {
        registration_and_booking: "التسجيل وحجز الحصة",
        full_name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone_number: "رقم الهاتف",
        country: "الدولة",
        submit: "إرسال",
        bookingSummary: "ملخص الحجز",
        numberOfLessons: "عدد الحصص",
        price: "السعر",
        selectLessons: "اختر عدد الحصص",
        completeBooking: "إتمام الحجز",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export const languages = {
  en: { dir: "ltr" },
  ar: { dir: "rtl" },
};
export default i18n;
