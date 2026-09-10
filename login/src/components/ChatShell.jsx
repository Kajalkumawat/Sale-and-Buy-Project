import { useState } from "react";
import { properties, propertyImageFor } from "../data/mockData";
import { IconChat } from "./Icons";

export default function ChatShell({ threads }) {
  const [activeId, setActiveId] = useState(threads[0]?.id);
  const [draft, setDraft] = useState("");
  const [localThreads, setLocalThreads] = useState(threads);

  const active = localThreads.find((t) => t.id === activeId);
  const property = active ? properties.find((p) => p.id === active.propertyId) : null;

  const send = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setLocalThreads((prev) =>
      prev.map((t) => (t.id === activeId ? { ...t, messages: [...t.messages, { from: "me", text: draft, time: "अभी" }] } : t))
    );
    setDraft("");
  };

  if (!threads.length) {
    return (
      <div className="empty-state">
        <IconChat />
        <p>अभी कोई चैट नहीं है।</p>
      </div>
    );
  }

  return (
    <div className="chat-shell">
      <div className="chat-list">
        {localThreads.map((t) => {
          const p = properties.find((pp) => pp.id === t.propertyId);
          const last = t.messages[t.messages.length - 1];
          return (
            <div key={t.id} className={`chat-list-item ${activeId === t.id ? "active" : ""}`} onClick={() => setActiveId(t.id)}>
              <img src={propertyImageFor(p)} alt="" style={{ width: 42, height: 42, borderRadius: 10, objectFit: "cover" }} />
              <div style={{ minWidth: 0 }}>
                <strong>{t.withName}</strong>
                <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{last?.text}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-window">
        <div className="chat-window-head">{active?.withName} {property && `— ${property.title}`}</div>
        <div className="chat-messages">
          {active?.messages.map((m, i) => (
            <div key={i} className={`chat-bubble ${m.from === "me" ? "me" : "them"}`}>
              {m.text}
            </div>
          ))}
        </div>
        <form className="chat-input-row" onSubmit={send}>
          <input placeholder="मैसेज लिखें..." value={draft} onChange={(e) => setDraft(e.target.value)} />
          <button className="solid-btn" type="submit">
            भेजें
          </button>
        </form>
      </div>
    </div>
  );
}
