import { IconShield, IconUsers, IconHeadset, IconTrendingUp } from "../components/Icons";

const values = [
  { icon: <IconShield />, title: "भरोसा", desc: "हर लिस्टिंग वेरिफाइड और पारदर्शी" },
  { icon: <IconUsers />, title: "पहुंच", desc: "हजारों बायर, सेलर और एजेंट एक प्लेटफॉर्म पर" },
  { icon: <IconHeadset />, title: "सपोर्ट", desc: "24/7 कस्टमर सपोर्ट टीम" },
  { icon: <IconTrendingUp />, title: "ग्रोथ", desc: "तेजी से बढ़ता PropTech प्लेटफॉर्म" },
];

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="wh-inner">
          <h1>About Us</h1>
          <p>PropertyConnect — भारत का Buy • Sell • Rent मार्केटप्लेस</p>
        </div>
      </div>
      <section className="page-section">
        <div className="wh-inner content-page">
          <p>
            PropertyConnect एक भरोसेमंद रियल-एस्टेट मार्केटप्लेस है जो बायर, सेलर/ओनर और एजेंट/डीलर को एक ही प्लेटफॉर्म पर जोड़ता है।
            हमारा लक्ष्य है प्रॉपर्टी खरीदने, बेचने और किराये पर देने की प्रक्रिया को सरल, सुरक्षित और पारदर्शी बनाना।
          </p>
          <h2>हमारा विजन</h2>
          <p>
            हम एक ऐसा इकोसिस्टम बनाना चाहते हैं जहां वेरिफाइड लिस्टिंग, सुरक्षित लेन-देन और सीधी बातचीत के जरिए हर यूजर को सही प्रॉपर्टी
            आसानी से मिल सके — चाहे वह घर हो, दुकान, प्लॉट या कॉमर्शियल स्पेस।
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="wh-inner">
          <div className="features-grid">
            {values.map((v) => (
              <div className="feature" key={v.title}>
                <div className="feature-icon">{v.icon}</div>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
