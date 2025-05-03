"use client";
import { FiCalendar, FiChevronsLeft, FiPlus } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineAnnouncement } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useData } from "@/providers/dataProvider";
import CreateTeam from "./create-team";

const Sidebar = () => {
  const [lessons, setLessons] = useState([]);
  const { data } = useData();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (data) {
      setLessons(data.subjects);
    }
  }, [data]);
  
  return (
    <div className="fixed left-0 top-0 w-[20vw] h-screen bg-black flex flex-col border-r border-zinc-800">
      {/* Header */}
      <div className="w-full h-20 border-b border-zinc-800 flex justify-between items-center px-5">
        <h1 className="text-white text-lg font-semibold">Amjuulay mn</h1>
        <FiChevronsLeft className="text-white h-5 w-5 cursor-pointer" />
      </div>

      {visible && <CreateTeam setVisible={setVisible} />}

      {/* Main Menu */}
      <div className="w-full flex flex-col p-5 gap-5">
        <Link href="/schedule" className="w-full">
          <div className="flex items-center gap-4 text-white/80 hover:text-white">
            <FaRegClock className="h-5 w-5" />
            <span className="text-sm">Хуваарь</span>
          </div>
        </Link>
        
        <Link href="/calendar" className="w-full">
          <div className="flex items-center gap-4 text-white/80 hover:text-white">
            <FiCalendar className="h-5 w-5" />
            <span className="text-sm">Календар</span>
          </div>
        </Link>

        <Link href="/notification" className="w-full">
          <div className="flex items-center gap-4 text-white/80 hover:text-white">
            <MdOutlineAnnouncement className="h-5 w-5" />
            <span className="text-sm">Мэдэгдэл</span>
          </div>
        </Link>

        <Link href="/chat" className="w-full">
          <div className="flex items-center gap-4 text-white/80 hover:text-white">
            <BsChat className="h-5 w-5" />
            <span className="text-sm">Чат</span>
          </div>
        </Link>
      </div>

      {/* Lessons Section */}
      <div className="w-full px-5 py-3 border-t border-zinc-800 mt-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white/60 text-xs uppercase">Хичээлүүд</h2>
<<<<<<< HEAD
=======
          //
          <button>
            <FiPlus className="h-5 w-5" />
          </button>
>>>>>>> 0155208 (header subject geh)
        </div>

        <div className="flex flex-col gap-3">
          {lessons.map((lesson, i) => (
            <Link 
              href={`/subject/${lesson._id || i}`} 
              key={i} 
              className="w-full"
            >
              <div className="flex items-center gap-3 text-white/80 hover:text-white cursor-pointer">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: lesson.color }}
                />
                <span className="text-sm">{lesson.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="mt-auto border-t border-zinc-800 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pinimg.com/236x/68/31/12/68311248ba2f6e0ba94ff6da62eac9f6.jpg"
              alt="User Avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-white/80 text-sm">Angry Pepe</span>
          </div>
          <IoSettingsSharp className="text-white/60 h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
