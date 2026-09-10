import cardVilla from "../assets/card-villa.svg";
import cardVilla2 from "../assets/card-villa-2.svg";
import cardApartment from "../assets/card-apartment.svg";
import cardApartment2 from "../assets/card-apartment-2.svg";
import cardPlot from "../assets/card-plot.svg";
import cardPlot2 from "../assets/card-plot-2.svg";
import cardShop from "../assets/card-shop.svg";
import heroHouse from "../assets/hero-house.svg";

export const propertyImages = {
  villa: cardVilla,
  villa2: cardVilla2,
  apartment: cardApartment,
  apartment2: cardApartment2,
  plot: cardPlot,
  plot2: cardPlot2,
  commercial: cardShop,
};

export const owners = [
  { id: "own-1", name: "Rajesh Sharma", role: "owner", phone: "+91 98290 11223", email: "rajesh.sharma@example.com", verified: true, kyc: "verified", avatarColor: "#3146ff" },
  { id: "own-2", name: "Meena Kumpawat", role: "owner", phone: "+91 90000 22334", email: "meena.k@example.com", verified: true, kyc: "verified", avatarColor: "#f59e0b" },
  { id: "own-3", name: "Aditya Realty Group", role: "agent", phone: "+91 88110 44556", email: "contact@adityarealty.com", verified: true, kyc: "pending", avatarColor: "#22c55e" },
  { id: "own-4", name: "Sunita Bansal", role: "owner", phone: "+91 97722 33445", email: "sunita.b@example.com", verified: false, kyc: "not-submitted", avatarColor: "#ef4444" },
];

export const properties = [
  {
    id: "p1",
    title: "3 BHK लग्जरी विला",
    category: "villa",
    type: "sale",
    bhk: 3,
    area: 2400,
    price: 7500000,
    priceLabel: "₹75,00,000",
    location: "जोधपुर, राजस्थान",
    lat: 42, lng: 28,
    verified: true,
    status: "active",
    ownerId: "own-1",
    views: 1284,
    enquiries: 32,
    saves: 58,
    postedOn: "2026-08-02",
    amenities: ["पार्किंग", "गार्डन", "स्विमिंग पूल", "पावर बैकअप"],
    description: "शहर के शांत इलाके में स्थित यह 3 BHK विला आधुनिक सुविधाओं से लैस है। बड़ा गार्डन, कवर्ड पार्किंग और 24x7 सुरक्षा उपलब्ध है।",
  },
  {
    id: "p2",
    title: "2 BHK अपार्टमेंट",
    category: "apartment",
    type: "rent",
    bhk: 2,
    area: 1150,
    price: 18000,
    priceLabel: "₹18,000/माह",
    location: "पुणे, महाराष्ट्र",
    lat: 55, lng: 45,
    verified: true,
    status: "active",
    ownerId: "own-2",
    views: 942,
    enquiries: 21,
    saves: 34,
    postedOn: "2026-08-10",
    amenities: ["लिफ्ट", "पावर बैकअप", "सिक्योरिटी"],
    description: "IT हब के नजदीक, अच्छी तरह हवादार 2 BHK फ्लैट, फैमिली के लिए उपयुक्त।",
  },
  {
    id: "p3",
    title: "100 गज का प्लॉट",
    category: "plot",
    type: "sale",
    bhk: null,
    area: 900,
    price: 2500000,
    priceLabel: "₹25,00,000",
    location: "आगरा, उत्तर प्रदेश",
    lat: 30, lng: 62,
    verified: true,
    status: "pending",
    ownerId: "own-3",
    views: 431,
    enquiries: 9,
    saves: 12,
    postedOn: "2026-08-18",
    amenities: ["कॉर्नर प्लॉट", "चौड़ी सड़क"],
    description: "रेजिडेंशियल जोन में क्लियर टाइटल के साथ प्लॉट, निवेश के लिए बेहतरीन विकल्प।",
  },
  {
    id: "p4",
    title: "कॉमर्शियल शॉप",
    category: "commercial",
    type: "rent",
    bhk: null,
    area: 450,
    price: 35000,
    priceLabel: "₹35,000/माह",
    location: "दिल्ली, नजदीक मेट्रो",
    lat: 68, lng: 33,
    verified: false,
    status: "active",
    ownerId: "own-4",
    views: 610,
    enquiries: 15,
    saves: 8,
    postedOn: "2026-07-28",
    amenities: ["मेन रोड फेसिंग", "हाई फुटफॉल"],
    description: "मेट्रो स्टेशन के पास मेन रोड पर कॉमर्शियल शॉप, रिटेल बिज़नेस के लिए उपयुक्त।",
  },
  {
    id: "p5",
    title: "4 BHK इंडिपेंडेंट विला",
    category: "villa",
    imgKey: "villa2",
    type: "sale",
    bhk: 4,
    area: 3200,
    price: 12500000,
    priceLabel: "₹1,25,00,000",
    location: "गुड़गांव, हरियाणा",
    lat: 20, lng: 70,
    verified: true,
    status: "active",
    ownerId: "own-3",
    views: 2043,
    enquiries: 51,
    saves: 91,
    postedOn: "2026-08-22",
    amenities: ["मॉड्यूलर किचन", "होम थिएटर", "टेरेस गार्डन", "3 कार पार्किंग"],
    description: "प्रीमियम गेटेड सोसाइटी में स्थित यह विला हाई-एंड फिनिश और स्मार्ट होम फीचर्स के साथ आता है।",
  },
  {
    id: "p6",
    title: "1 BHK स्टूडियो अपार्टमेंट",
    category: "apartment",
    imgKey: "apartment2",
    type: "rent",
    bhk: 1,
    area: 600,
    price: 12000,
    priceLabel: "₹12,000/माह",
    location: "जयपुर, राजस्थान",
    lat: 40, lng: 50,
    verified: true,
    status: "rented",
    ownerId: "own-1",
    views: 355,
    enquiries: 7,
    saves: 5,
    postedOn: "2026-06-30",
    amenities: ["फर्निश्ड", "वाई-फाई"],
    description: "बैचलर्स और वर्किंग प्रोफेशनल्स के लिए फुली फर्निश्ड स्टूडियो अपार्टमेंट।",
  },
  {
    id: "p7",
    title: "ओपन इंडस्ट्रियल प्लॉट",
    category: "plot",
    imgKey: "plot2",
    type: "sale",
    bhk: null,
    area: 5000,
    price: 18500000,
    priceLabel: "₹1,85,00,000",
    location: "अहमदाबाद, गुजरात",
    lat: 78, lng: 55,
    verified: false,
    status: "sold",
    ownerId: "own-4",
    views: 512,
    enquiries: 11,
    saves: 6,
    postedOn: "2026-05-14",
    amenities: ["इंडस्ट्रियल जोन", "24x7 पावर"],
    description: "इंडस्ट्रियल जोन में बड़ा प्लॉट, फैक्ट्री या वेयरहाउस के लिए उपयुक्त।",
  },
  {
    id: "p8",
    title: "3 BHK सी-फेसिंग अपार्टमेंट",
    category: "apartment",
    type: "sale",
    bhk: 3,
    area: 1800,
    price: 9800000,
    priceLabel: "₹98,00,000",
    location: "मुंबई, महाराष्ट्र",
    lat: 60, lng: 20,
    verified: true,
    status: "active",
    ownerId: "own-2",
    views: 1876,
    enquiries: 44,
    saves: 73,
    postedOn: "2026-08-27",
    amenities: ["सी व्यू", "क्लबहाउस", "जिम", "स्विमिंग पूल"],
    description: "प्राइम लोकेशन में सी-फेसिंग अपार्टमेंट, प्रीमियम अमेनिटीज़ के साथ।",
  },
];

export const propertyImageFor = (p) => propertyImages[p.imgKey || p.category];

const altVariantKey = { villa: "villa2", villa2: "villa", apartment: "apartment2", apartment2: "apartment", plot: "plot2", plot2: "plot", commercial: "commercial" };

export const propertyGalleryFor = (p) => {
  const key = p.imgKey || p.category;
  const alt = altVariantKey[key];
  const shots = [propertyImages[key]];
  if (alt && propertyImages[alt] && propertyImages[alt] !== propertyImages[key]) shots.push(propertyImages[alt]);
  shots.push(heroHouse);
  return shots;
};

export const currentUser = {
  buyer: { id: "u-buyer-1", name: "Meenu Kumar", email: "meenukumpawat22@gmail.com", phone: "+91 98765 43210", plan: "Buyer Premium", planExpiry: "2026-11-30" },
  seller: { id: "u-seller-1", name: "Rajesh Sharma", email: "rajesh.sharma@example.com", phone: "+91 98290 11223", plan: "Seller Premium", planExpiry: "2026-10-15", kyc: "verified" },
  agent: { id: "u-agent-1", name: "Aditya Realty Group", email: "contact@adityarealty.com", phone: "+91 88110 44556", plan: "Agent/Dealer Plan", planExpiry: "2026-12-01", kyc: "pending" },
  admin: { id: "u-admin-1", name: "Platform Admin", email: "admin@propertyconnect.in" },
};

export const shortlistDefault = ["p1", "p5", "p8"];

export const enquiries = [
  { id: "e1", propertyId: "p1", buyerName: "Meenu Kumar", message: "क्या यह प्रॉपर्टी अभी भी उपलब्ध है? मैं इस सप्ताहांत विजिट करना चाहूंगा।", date: "2026-09-05", status: "new" },
  { id: "e2", propertyId: "p5", buyerName: "Anil Verma", message: "बेस्ट प्राइस क्या होगी? होम लोन एलिजिबिलिटी भी बताएं।", date: "2026-09-06", status: "replied" },
  { id: "e3", propertyId: "p2", buyerName: "Priya Nair", message: "क्या पालतू जानवर की अनुमति है?", date: "2026-09-07", status: "new" },
  { id: "e4", propertyId: "p8", buyerName: "Karan Malhotra", message: "साइट विजिट के लिए समय बताएं।", date: "2026-09-08", status: "closed" },
];

export const siteVisits = [
  { id: "sv1", propertyId: "p1", requestedDate: "2026-09-14", slot: "सुबह 11:00 बजे", status: "confirmed" },
  { id: "sv2", propertyId: "p8", requestedDate: "2026-09-16", slot: "शाम 4:00 बजे", status: "pending" },
];

export const chatThreads = [
  {
    id: "c1",
    propertyId: "p1",
    withName: "Rajesh Sharma",
    messages: [
      { from: "them", text: "नमस्ते! प्रॉपर्टी में आपकी रुचि के लिए धन्यवाद।", time: "10:02" },
      { from: "me", text: "क्या इसकी कीमत में थोड़ी नेगोशिएबिलिटी है?", time: "10:05" },
      { from: "them", text: "हां, साइट विजिट के बाद बात कर सकते हैं।", time: "10:07" },
    ],
  },
  {
    id: "c2",
    propertyId: "p8",
    withName: "Meena Kumpawat",
    messages: [
      { from: "them", text: "आपकी एंक्वायरी मिली, धन्यवाद।", time: "09:15" },
      { from: "me", text: "क्लबहाउस मेंटेनेंस चार्ज कितना है?", time: "09:20" },
    ],
  },
];

export const paymentHistory = [
  { id: "pay1", type: "Subscription", label: "Buyer Premium — 90 days", amount: 299, date: "2026-08-02", status: "paid" },
  { id: "pay2", type: "Site Visit Fee", label: "3 BHK लग्जरी विला — Site Visit", amount: 0, date: "2026-09-05", status: "paid" },
  { id: "pay3", type: "Subscription", label: "Buyer Basic — 30 days", amount: 99, date: "2026-05-01", status: "paid" },
];

export const buyerPlans = [
  { id: "buyer-basic", name: "Buyer Basic", price: 99, duration: "30 दिन", features: ["सीमित प्रॉपर्टी व्यू", "5 एंक्वायरी/माह", "बेसिक सपोर्ट"] },
  { id: "buyer-premium", name: "Buyer Premium", price: 299, duration: "90 दिन", features: ["अनलिमिटेड प्रॉपर्टी व्यू", "अनलिमिटेड एंक्वायरी", "प्रायोरिटी सपोर्ट", "वेरिफाइड ओनर कॉन्टैक्ट"], highlight: true },
];

export const sellerPlans = [
  { id: "seller-basic", name: "Seller Basic", price: 199, duration: "1 लिस्टिंग", features: ["1 प्रॉपर्टी लिस्टिंग", "30 दिन विज़िबिलिटी", "बेसिक एनालिटिक्स"] },
  { id: "seller-premium", name: "Seller Premium", price: 499, duration: "3 लिस्टिंग", features: ["3 प्रॉपर्टी लिस्टिंग", "90 दिन विज़िबिलिटी", "फीचर्ड लिस्टिंग बूस्ट", "डिटेल्ड एनालिटिक्स"], highlight: true },
];

export const agentPlans = [
  { id: "agent-monthly", name: "Agent/Dealer Plan", price: 1499, duration: "मासिक", features: ["अनलिमिटेड लिस्टिंग", "क्लाइंट मैनेजमेंट", "प्रायोरिटी लीड्स", "डेडिकेटेड सपोर्ट"], highlight: true },
];

export const boostPackages = [
  { id: "boost-7", name: "7-दिन बूस्ट", price: 149, desc: "सर्च रिजल्ट के टॉप पर 7 दिन के लिए फीचर करें" },
  { id: "boost-15", name: "15-दिन बूस्ट", price: 249, desc: "होमपेज + सर्च दोनों में 15 दिन फीचर करें", highlight: true },
  { id: "boost-30", name: "30-दिन बूस्ट", price: 449, desc: "अधिकतम विज़िबिलिटी — 30 दिन तक टॉप पोजीशन" },
];

// ---------------- Admin data ----------------

export const adminStats = {
  totalUsers: 4820,
  buyers: 3960,
  sellers: 740,
  agents: 120,
  activeListings: 612,
  soldRented: 248,
  revenue: 486200,
  pendingKyc: 18,
  pendingListings: 9,
  complaints: 5,
};

export const revenueTrend = [
  { month: "अप्रैल", value: 32000 },
  { month: "मई", value: 41000 },
  { month: "जून", value: 38000 },
  { month: "जुलाई", value: 52000 },
  { month: "अगस्त", value: 61000 },
  { month: "सितंबर", value: 48200 },
];

export const adminUsers = [
  { id: "u1", name: "Meenu Kumar", role: "Buyer", email: "meenukumpawat22@gmail.com", status: "active", joined: "2026-04-12" },
  { id: "u2", name: "Rajesh Sharma", role: "Seller", email: "rajesh.sharma@example.com", status: "active", joined: "2026-02-08" },
  { id: "u3", name: "Aditya Realty Group", role: "Agent", email: "contact@adityarealty.com", status: "active", joined: "2026-01-20" },
  { id: "u4", name: "Sunita Bansal", role: "Seller", email: "sunita.b@example.com", status: "suspended", joined: "2026-03-02" },
  { id: "u5", name: "Anil Verma", role: "Buyer", email: "anil.verma@example.com", status: "active", joined: "2026-06-19" },
];

export const kycQueue = [
  { id: "k1", name: "Aditya Realty Group", role: "Agent", docType: "GST + PAN", submittedOn: "2026-09-01", status: "pending" },
  { id: "k2", name: "Sunita Bansal", role: "Seller", docType: "Aadhaar", submittedOn: "2026-08-28", status: "pending" },
  { id: "k3", name: "Karan Malhotra", role: "Seller", docType: "PAN", submittedOn: "2026-08-25", status: "rejected" },
];

export const pendingListings = properties.filter((p) => p.status === "pending");

export const complaints = [
  { id: "cm1", propertyId: "p4", reason: "गलत कीमत दर्शाई गई है", reportedBy: "Priya Nair", date: "2026-09-03", status: "open" },
  { id: "cm2", propertyId: "p7", reason: "डुप्लीकेट लिस्टिंग लगती है", reportedBy: "Karan Malhotra", date: "2026-09-01", status: "resolved" },
];

export const coupons = [
  { id: "cp1", code: "WELCOME50", desc: "पहली सब्सक्रिप्शन पर 50% छूट", validTill: "2026-10-31", status: "active" },
  { id: "cp2", code: "SELLER100", desc: "सेलर प्रीमियम पर ₹100 फ्लैट छूट", validTill: "2026-09-30", status: "active" },
  { id: "cp3", code: "FESTIVE25", desc: "फेस्टिव सेल — 25% छूट", validTill: "2026-08-15", status: "expired" },
];

export const banners = [
  { id: "b1", title: "फेस्टिव सेल — सब्सक्रिप्शन पर 30% तक छूट", position: "होमपेज टॉप", status: "active" },
  { id: "b2", title: "नए सेलर्स के लिए पहली लिस्टिंग फ्री", position: "सेलर डैशबोर्ड", status: "active" },
];

export const featuredListingIds = ["p1", "p5", "p8"];

export const cmsPages = [
  { id: "about", title: "About Us", updatedOn: "2026-07-10" },
  { id: "contact", title: "Contact Us", updatedOn: "2026-07-10" },
  { id: "terms", title: "Terms & Conditions", updatedOn: "2026-06-15" },
  { id: "privacy", title: "Privacy Policy", updatedOn: "2026-06-15" },
  { id: "help", title: "Help & Support", updatedOn: "2026-07-02" },
];

export const formatINR = (n) => `₹${n.toLocaleString("en-IN")}`;
