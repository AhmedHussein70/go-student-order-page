import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        registration_and_booking: "Registration and Booking",
        login_phone: "Phone Number (Login)",
        contact_phone: "Phone Number (Contact)",
        email: "Email",
        contact_name: "Contact Name",
        address: "Address",
        address_number: "Address Number",
        postal_code: "Postal Code",
        city: "City",
        country: "Country",
        monthly_sessions: "Monthly Sessions",
        "4_sessions": "4 Sessions",
        "8_sessions": "8 Sessions",
        "12_sessions": "12 Sessions",
        payment_method: "Payment Method",
        credit_card: "Credit Card",
        card_holder: "Card Holder Name",
        card_number: "Card Number",
        submit: "Submit",
        formSubmitted: "Form has been submitted!",
      },
    },
    ar: {
      translation: {
        registration_and_booking: "التسجيل والحجز",
        login_phone: "رقم الهاتف (تسجيل الدخول)",
        contact_phone: "رقم الهاتف (الاتصال)",
        email: "البريد الإلكتروني",
        contact_name: "اسم جهة الاتصال",
        address: "العنوان",
        address_number: "رقم العنوان",
        postal_code: "الرمز البريدي",
        city: "المدينة",
        country: "الدولة",
        monthly_sessions: "عدد الجلسات شهرياً",
        "4_sessions": "4 جلسات",
        "8_sessions": "8 جلسات",
        "12_sessions": "12 جلسة",
        payment_method: "طريقة الدفع",
        credit_card: "بطاقة ائتمان",
        card_holder: "اسم حامل البطاقة",
        card_number: "رقم البطاقة",
        submit: "إرسال",
        formSubmitted: "تم إرسال النموذج!",
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
