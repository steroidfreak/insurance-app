import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your virtual insurance agent for Singapore. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are an insurance adviser helping people in Singapore. Provide general information, remind users to consult a licensed professional for personalised advice, and comply with local regulations.",
            },
            ...newMessages,
          ],
        }),
      });
      const data = await response.json();
      const assistantMessage = data?.choices?.[0]?.message?.content?.trim();
      if (assistantMessage) {
        setMessages([...newMessages, { role: "assistant", content: assistantMessage }]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, I couldn't reach the advisory service." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 pt-20 px-4">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-semibold text-slate-900 mb-4">Ask our agent</h1>
        <div className="h-96 overflow-y-auto rounded-xl2 bg-white shadow-card p-4">
          {messages.map((m, i) => (
            <div key={i} className={`mb-3 ${m.role === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block px-3 py-2 rounded-lg text-sm ${{
                  user: "bg-brand-500 text-white",
                  assistant: "bg-slate-100 text-slate-900",
                }[m.role]}`}
              >
                {m.content}
              </span>
            </div>
          ))}
          {loading && (
            <div className="text-left mb-3">
              <span className="inline-block px-3 py-2 rounded-lg text-sm bg-slate-100 text-slate-900">
                Thinking...
              </span>
            </div>
          )}
        </div>
        <div className="mt-4 flex gap-2">
          <input
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Ask about insurance in Singapore"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />
          <button
            onClick={sendMessage}
            className="rounded-lg bg-brand-500 px-4 py-2 text-white hover:bg-brand-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
