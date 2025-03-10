import React, { useState } from "react";

function Chatbot() {
  const [input, setInput] = useState(""); // 用户输入
  const [messages, setMessages] = useState([]); // 聊天记录
  const [loading, setLoading] = useState(false); // 加载状态

  // Mock AI 响应
  const mockAIResponse = (userMessage) => {
    const responses = {
      hello: "Hi there! How can I assist you today?",
      "how are you": "I'm just a bot, but thanks for asking! 😊",
      "what's your name": "I'm your friendly chatbot assistant!",
      bye: "Goodbye! Have a great day! 👋",
    };
    return (
      responses[userMessage.toLowerCase()] ||
      "I'm not sure how to respond to that. Can you try asking something else?"
    );
  };

  // 发送消息
  const handleSend = () => {
    if (!input.trim()) return;

    // 添加用户消息
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // 清空输入框
    setLoading(true);

    // 模拟 AI 响应延迟
    setTimeout(() => {
      const aiMessage = { sender: "ai", text: mockAIResponse(input) };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="nes-container with-title is-centered h- flex flex-col flex-grow w-full h-full p-6 bg-white shadow-md rounded-lg">
      <h2 className="title text-lg font-bold">Chatbot</h2>

      {/* 聊天记录 */}
      <div className="flex-grow overflow-y-auto p-4 border border-gray-300 bg-gray-100 rounded-lg mb-4 shadow-sm">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-sm text-center">Start the conversation...</p>
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

      {/* 输入框 & 发送按钮 */}
      <div className="flex items-center gap-3">
        <textarea
          placeholder="Type your message..."
          className="nes-textarea w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 transition"
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
