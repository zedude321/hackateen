"use client";

import { useState } from "react";
import {
  FiSend,
  FiSearch,
  FiMoreVertical,
  FiPaperclip,
  FiSmile,
} from "react-icons/fi";

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState(0);
  const [message, setMessage] = useState("");

  // Sample data for chats
  const chats = [
    {
      id: 1,
      name: "Математик",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      lastMessage: "Гэрийн даалгавар хийсэн үү?",
      timestamp: "14:30",
      unread: 2,
    },
  ];

  // Sample messages for the active chat
  const messages = [
    {
      id: 1,
      sender: "other",
      text: "Сайн байна уу?",
      timestamp: "14:22",
    },
    {
      id: 2,
      sender: "me",
      text: "Сайн, та сайн уу?",
      timestamp: "14:23",
    },
    {
      id: 3,
      sender: "other",
      text: "Гэрийн даалгавар хийсэн үү?",
      timestamp: "14:24",
    },
    {
      id: 4,
      sender: "other",
      text: "Хуудас 45-аас 50 хүртэл",
      timestamp: "14:24",
    },
    {
      id: 5,
      sender: "me",
      text: "Тийм ээ, би хийсэн",
      timestamp: "14:25",
    },
    {
      id: 6,
      sender: "me",
      text: "Маргааш авчирна",
      timestamp: "14:25",
    },
    {
      id: 7,
      sender: "other",
      text: "За, маш сайн",
      timestamp: "14:30",
    },
    {
      id: 8,
      sender: "other",
      text: "За, маш сайн",
      timestamp: "14:30",
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    // Here you would normally send the message to your backend
    // For now, we'll just clear the input
    setMessage("");
  };

  return (
    <div className="fixed right-0 bottom-0 w-[80vw] h-[92vh] bg-black text-white flex flex-col overflow-y-scroll mt-20">
      <div className="flex-1 flex flex-col h-full relative">
        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  msg.sender === "me"
                    ? "bg-indigo-600 text-white"
                    : "bg-zinc-800 text-white"
                }`}
                key={msg.id}
              >
                <p>{msg.text}</p>
                <p className="text-xs text-right mt-1 opacity-70">
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-20 border-t border-zinc-800 py-2 sticky bottom-1 bg-black">
          <div className="flex items-center bg-zinc-900 rounded-md mx-4 h-12">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="flex-1 bg-transparent border-none px-4 py-3 outline-none text-white h-full"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 text-white h-full"
            >
              <FiSend className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
