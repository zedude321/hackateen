"use client";
import { useState } from "react";
import CreateTeam from "./components/create-team";

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="fixed right-0 top-0 w-[80vw] h-screen overflow-y-auto">
      {visible && <CreateTeam setVisible={setVisible} />}
      
      <div className="p-12 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">Amjuulay.mn-д<br/>Тавтай морил!</h1>
        
        <p className="text-white/70 mb-5 text-lg">
          Хэрэгтэй бүхэн хичээл, яагаад мэргэжил хийж чадахгүй байгаан биш би?
        </p>
        
        <p className="text-white/70 mb-5 text-lg">
          Манай сайт та бүхний хийх ёстой ажил, багийн хурал, даалгавар,
          бие даалтаа хийхэд тань их хялбар, олгоцжуулсан
          төлөвлөгөө гаргаж, туслана.
        </p>
        
        <div className="mt-8">&nbsp;</div>
      </div>
      
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setVisible(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
        >
          Анги үүсэх
        </button>
      </div>
    </div>
  );
}
//For Honor of Ebo🕊️🥀
