import ChatShell from "../../components/ChatShell";
import { chatThreads } from "../../data/mockData";

export default function Enquiries() {
  return (
    <div>
      <h1>एंक्वायरी / चैट</h1>
      <p className="page-lead">प्रॉपर्टी ओनर्स के साथ आपकी बातचीत</p>
      <ChatShell threads={chatThreads} />
    </div>
  );
}
