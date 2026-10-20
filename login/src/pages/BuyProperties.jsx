import PropertyListing from "./PropertyListing";
import { useLanguage } from "../context/LanguageContext";

export default function BuyProperties() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  return (
    <PropertyListing
      type="sale"
      title={isHi ? "प्रॉपर्टी खरीदें" : "Buy property"}
      subtitle={isHi ? "अपने बजट और लोकेशन के अनुसार सही प्रॉपर्टी खोजें" : "Find the right property for your budget and location"}
    />
  );
}
