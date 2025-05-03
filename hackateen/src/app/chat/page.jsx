"use client";

import { useEffect, useState } from "react";
import {
  FiSend,
  FiSearch,
  FiMoreVertical,
  FiPaperclip,
  FiSmile,
} from "react-icons/fi";
import { useData } from "@/providers/dataProvider";
import { useAuth } from "@/providers/authProvider";
import { sendChat } from "../../api/chat";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const { data } = useData();
  const { user } = useAuth();
  const [cData, setCData] = useState(null);

  useEffect(() => {
    if (data) {
      setCData(data.chat);
    }
  }, [data]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const newMessage = {
      class: user.classes[0],
      sender: user._id,
      message: message,
    };

    const m = await sendChat(newMessage);

    setCData((prev) => [...prev, m.data]);

    setMessage("");
  };

  if (!cData || !user) return null;

  return (
    <div className="fixed bottom-0 right-0 w-[80vw] h-[92vh] bg-black text-white flex flex-col overflow-hidden ">
      <div className="flex-1 flex flex-col h-full relative">
        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          {cData.map((msg, i) => (
            <div key={i} className={`flex justify-start`}>
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 bg-zinc-800 text-white`}
              >
                <p>{msg.message}</p>
                <p className="text-xs text-left mt-1 opacity-70">
                  {new Date(msg.timestamp).getHours()} : {new Date(msg.timestamp).getMinutes()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-800 py-2 sticky bottom-1 bg-black">
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
