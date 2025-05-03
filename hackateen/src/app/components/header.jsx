"use client";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  
  // Only render the header if the path starts with /subject
  if (!pathname || !pathname.startsWith('/subject')) {
    return null;
  }

  return (
    <div className="fixed right-0 top-0 w-[80vw] h-20 flex justify-between items-center gap-4 p-2 border-b-[1px] opacity-60 transition-all duration-300 z-10">
      <a
        href="/lessons"
        className="w-1/3 h-full flex justify-center items-center rounded-xl bg-[#1F1F1F]/80 cursor-pointer hover:bg-[#2a2a2a]/80 transition-colors"
      >
        <div className="w-full h-full flex justify-center items-center">
          Гэрийн даалгавар
        </div>
      </a>
      <a
        href="/lessonchat"
        className="w-1/3 h-full flex justify-center items-center rounded-xl bg-[#1F1F1F]/80 cursor-pointer hover:bg-[#2a2a2a]/80 transition-colors"
      >
        <div className="w-full h-full flex justify-center items-center">
          Чат
        </div>
      </a>
      <a
        href="/assignments"
        className="w-1/3 h-full flex justify-center items-center rounded-xl bg-[#1F1F1F]/80 cursor-pointer hover:bg-[#2a2a2a]/80 transition-colors"
      >
        <div className="w-full h-full flex justify-center items-center">
          Бие даалт
        </div>
      </a>
    </div>
  );
};
//For Honor of Ebo🕊️🥀
