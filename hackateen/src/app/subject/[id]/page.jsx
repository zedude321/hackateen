"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useData } from "@/providers/dataProvider";
import {
  FiArrowLeft,
  FiBook,
  FiCalendar,
  FiMessageSquare,
} from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";

export default function SubjectDetail() {
  const params = useParams();
  const { id } = params;
  const { data } = useData();
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      const foundSubject = data.subjects.find((s) => s._id && s._id === id);

      if (foundSubject) {
        setSubject({
          ...foundSubject,
          homework: foundSubject.homework || [],
          assignments: foundSubject.assignments || [],
          chat: foundSubject.chat || [],
          class: foundSubject.class || { _id: "mock-class-id", name: "11A" },
        });
      }
      setLoading(false);
    }
  }, [data, id]);

  if (loading) {
    return (
      <div className="fixed right-0 bottom-0 w-[80vw] p-8 h-[90vh] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-indigo-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (!subject) {
    return (
      <div className="fixed right-0 bottom-0 w-[80vw] p-8 h-[90vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Хичээл олдсонгүй</h1>
        <Link
          href="/"
          className="text-indigo-500 hover:underline flex items-center"
        >
          <FiArrowLeft className="mr-2" /> Буцах
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed right-0 top-20 w-[80vw] p-8 h-screen overflow-y-auto">
      {/* Header with back navigation */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-indigo-500 hover:text-indigo-600 flex items-center w-fit"
        >
          <FiArrowLeft className="mr-2" /> Буцах
        </Link>
        <div className="mt-4 flex items-center">
          <div
            className="h-5 w-5 rounded-full mr-3"
            style={{ backgroundColor: subject.color || "#000000" }}
          />
          <h1 className="text-3xl font-bold">{subject.name}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Class information */}
        <div className="bg-zinc-900 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <IoSchoolOutline className="text-zinc-400 mr-2" size={20} />
            <h2 className="text-xl font-semibold">Анги</h2>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <p className="text-white/80">{subject.class?.name || "11A"}</p>
            <p className="text-sm text-zinc-500">
              ID: {subject.class?._id || "mock-class-id"}
            </p>
          </div>
        </div>

        {/* Homework */}
        <div className="bg-zinc-900 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <FiBook className="text-zinc-400 mr-2" size={20} />
            <h2 className="text-xl font-semibold">Гэрийн даалгавар</h2>
          </div>
          {subject.homework && subject.homework.length > 0 ? (
            <ul className="space-y-2">
              {subject.homework.map((hw, index) => (
                <li key={index} className="bg-zinc-800 p-4 rounded-lg">
                  <p className="text-white/80">Даалгавар {index + 1}</p>
                  <p className="text-sm text-zinc-500">ID: {hw}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-zinc-800 p-4 rounded-lg text-zinc-500">
              Одоогоор гэрийн даалгавар байхгүй байна
            </div>
          )}
        </div>

        {/* Assignments */}
        <div className="bg-zinc-900 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <FaTasks className="text-zinc-400 mr-2" size={20} />
            <h2 className="text-xl font-semibold">Даалгаврууд</h2>
          </div>
          {subject.assignments && subject.assignments.length > 0 ? (
            <ul className="space-y-2">
              {subject.assignments.map((assignment, index) => (
                <li key={index} className="bg-zinc-800 p-4 rounded-lg">
                  <p className="text-white/80">Даалгавар {index + 1}</p>
                  <p className="text-sm text-zinc-500">ID: {assignment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-zinc-800 p-4 rounded-lg text-zinc-500">
              Одоогоор даалгавар байхгүй байна
            </div>
          )}
        </div>

        {/* Chat */}
        <div className="bg-zinc-900 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <FiMessageSquare className="text-zinc-400 mr-2" size={20} />
            <h2 className="text-xl font-semibold">Чат</h2>
          </div>
          {subject.chat && subject.chat.length > 0 ? (
            <ul className="space-y-2">
              {subject.chat.map((chat, index) => (
                <li key={index} className="bg-zinc-800 p-4 rounded-lg">
                  <p className="text-white/80">Чат {index + 1}</p>
                  <p className="text-sm text-zinc-500">ID: {chat}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-zinc-800 p-4 rounded-lg text-zinc-500">
              Одоогоор чат байхгүй байна
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
