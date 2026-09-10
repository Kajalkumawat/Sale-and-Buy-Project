import ChatShell from "../../components/ChatShell";
import { chatThreads } from "../../data/mockData";

export default function ChatPage() {
  return (
    <div>
      <h1>चैट</h1>
      <p className="page-lead">बायर्स के साथ सीधी बातचीत</p>
      <ChatShell threads={chatThreads} />
    </div>
  );
}
