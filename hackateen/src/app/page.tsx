"use client";
import Image from "next/image";
import { useState } from "react";
import { CreateTeam } from "./components/create-team";
export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="fixed right-0 bottom-0 w-[80vw] p-4  h-[90vh] flex flex-col justify-between items-start">
      {visible && <CreateTeam setVisible={setVisible} />}
      <p className="text-4xl font-bold block">Hello, Angry Pepe!</p>
      <div className="w-full h-20 flex justify-end items-center">
        <button
          className="w-40 h-16 rounded-2xl bg-blue-500"
          onClick={() => setVisible(true)}
        >
          Start
        </button>
      </div>
    </div>
  );
}
//For Honor of Ebo🕊️🥀
