"use client";
// import { useRouter } from "next/router";

export const Header = () => {
  // const router = useRouter();

  return (
    <div className="fixed right-0 top-0 w-[80vw] h-20 flex justify-between items-center gap-4 p-2 border-b-[1px] opacity-60 transition-all duration-300">
      <a
        href="/lessons"
        className="w-1/3 h-full flex justify-center items-center rounded-xl bg-[#1F1F1F]/80 cursor-pointer"
      >
        <div className="w-full h-full flex justify-center items-center bg-[#1F1F1F]/80 cursor-pointer">
          Гэрийн даалгавар
        </div>
      </a>
      <a
        href="/lesson/chat"
        className="w-1/3 h-full flex justify-center items-center rounded-xl bg-[#1F1F1F]/80 cursor-pointer"
      >
        <div className="w-full h-full flex justify-center items-center bg-[#1F1F1F]/80 cursor-pointer">
          Чат
        </div>
      </a>
      <a
        href="/lessons/assignments"
        className="w-1/3 h-full flex justify-center items-center rounded-xl bg-[#1F1F1F]/80 cursor-pointer"
      >
        <div className="w-full h-full flex justify-center items-center bg-[#1F1F1F]/80 cursor-pointer">
          Бие даалт
        </div>
      </a>
    </div>
  );
};
//For Honor of Ebo🕊️🥀
