import PropertyListing from "./PropertyListing";
import { useLanguage } from "../context/LanguageContext";

export default function RentProperties() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  return (
    <PropertyListing
      type="rent"
      title={isHi ? "प्रॉपर्टी किराये पर" : "Rent property"}
      subtitle={isHi ? "वेरिफाइड किराये की प्रॉपर्टी — फ्लैट, विला और कॉमर्शियल स्पेस" : "Verified rental properties — flats, villas and commercial spaces"}
    />
  );
}
