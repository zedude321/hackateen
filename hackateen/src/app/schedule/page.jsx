"use client";

import { useEffect, useState } from "react";
import { useData } from "@/providers/dataProvider";

export default function SchedulePage() {
  const { data } = useData();
  const [sData, setSData] = useState(null);

  useEffect(() => {
    if (data) {
      setSData({
        ...data.schedule,
        subjects: data.schedule.subjects.map((e) => ({
          ...e,
          subject: data.subjects.find((subject) => subject._id === e.subject),
        })),
      });
      console.log({
        ...data.schedule,
        subjects: data.schedule.subjects.map((e) => ({
          ...e,
          subject: data.subjects.find((subject) => subject._id === e.subject),
        })),
      });
    }
  }, [data]);

  if (!sData) return null;

  return (
    <div className="ml-[240px] min-h-screen bg-black text-white mt-24">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-medium">Хуваарь</h1>
        </div>

        <div className="border border-zinc-800 rounded-lg overflow-hidden">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900">
                <th className="py-4 px-4 border-b border-r border-zinc-800 text-left">
                  <div className="flex items-center gap-2">
                    <span>Хуваарь</span>
                  </div>
                </th>
                {sData.days_of_week.map((day, index) => (
                  <th
                    key={index}
                    className="py-4 px-6 border-b border-r border-zinc-800 text-center"
                  >
                    {day.day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sData.times.map((timeSlot, timeIndex) => (
                <tr key={timeIndex} className="border-b border-zinc-800">
                  <td className="py-3 px-4 border-r border-zinc-800 text-gray-400">
                    <>
                      {timeSlot.start_time}
                      <br />
                      {timeSlot.end_time}
                    </>
                  </td>
                  {sData.days_of_week.map((day, dayIndex) => {
                    const subject = sData.subjects.find(
                      (e) => e.day === day.order && e.time === timeSlot.order
                    );
                    return (
                      <td
                        key={dayIndex}
                        className="py-3 px-2 border-r border-zinc-800 text-center"
                      >
                        {subject && (
                          <div className="flex items-center justify-center gap-2">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: subject?.subject?.color,
                              }}
                            />
                            <span>{subject?.subject?.name}</span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
