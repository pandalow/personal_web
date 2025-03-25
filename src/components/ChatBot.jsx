import React, { useState } from "react";

function Chatbot() {
  const [input, setInput] = useState(""); // 用户输入
  const [messages, setMessages] = useState([]); // 聊天记录
  const [loading, setLoading] = useState(false); // 加载状态

  // get response from backend
  const getResponse = async (userMessage) => {
    try {
      const response = await fetch("https://rag-resume-bot.onrender.com/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });
  
      if (!response.ok) {
        throw new Error("Server error");
      }
  
      const data = await response.json();  
      return data.answer || "I'm not sure how to respond to that.";
    } catch (error) {
      console.error("Fetch error:", error);
      return "Oops! Something went wrong.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
  
    try {
      const aiText = await getResponse(input);
      const aiMessage = { sender: "ai", text: aiText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "ai", text: "Failed to get response." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="nes-container with-title is-centered flex flex-col w-full h-full p-6 bg-white shadow-md rounded-lg">
    <h2 className="title text-lg font-bold">Talk to My Agent</h2>
  
    {/* 聊天记录区域 */}
    <div className="flex-grow overflow-y-auto p-4 border border-gray-300 bg-gray-100 rounded-lg mb-4 shadow-sm">
      {messages.length === 0 ? (
        <p className="text-gray-500 text-sm text-center flex items-center justify-center gap-2">
          <i className="nes-octocat animate"></i>
          Ask me anything about My Resume!
        </p>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}
          >
            <p
              className={`px-4 py-2 rounded-lg max-w-[70%] text-sm shadow ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))
      )}
    </div>
  
    {/* 输入框 & 发送按钮 - 固定底部不被挤压 */}
    <div className="flex items-center gap-3 flex-shrink-0">
      <textarea
        placeholder="Type your message..."
        className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 transition"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
      />
      <button
        className="nes-btn is-success px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed transition transform hover:scale-105 active:scale-95"
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Send"}
      </button>
    </div>
  </section>
  );
}

export default Chatbot;
