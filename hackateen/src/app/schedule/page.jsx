"use client";

import { useState } from "react";
import { FiEdit, FiCheck, FiPlus, FiTrash2 } from "react-icons/fi";

export default function SchedulePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    days: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан"],
    timeSlots: [
      { start: "08:20", end: "09:00" },
      { start: "09:00", end: "09:40" },
      { start: "08:20", end: "09:00" },
      { start: "09:00", end: "09:40" },
      { start: "08:20", end: "09:00" },
      { start: "09:00", end: "09:40" },
      { start: "08:20", end: "09:00" },
      { start: "09:00", end: "09:40" },
      { start: "08:20", end: "09:00" },
    ],
    subjects: [
      // 2D array: [timeSlotIndex][dayIndex]
      [
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
      ],
      [
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
      ],
      [
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
      ],
      [
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
      ],
      [
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
      ],
      [
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
      ],
      [
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
      ],
      [
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "Математик", color: "#C11700" },
        { name: "", color: "" },
        { name: "Математик", color: "#C11700" },
      ],
      [
        { name: "", color: "" },
        { name: "", color: "" },
        { name: "Математик", color: "#C11700" },
        { name: "", color: "" },
        { name: "", color: "" },
      ],
    ],
  });

  const subjectColors = {
    "Математик": "#C11700",
    "Монгол хэл": "#FF5A0E",
    "Монгол бичиг": "#FFF500",
    "Хими": "#418403",
    "Нийгэм": "#0164B5",
    "Газарзүй": "#23005E",
    "Түүх": "#5A040B",
    "Англи хэл": "#450100"
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleSubjectChange = (timeIndex, dayIndex, value) => {
    const newData = { ...scheduleData };
    newData.subjects[timeIndex][dayIndex] = { 
      name: value, 
      color: subjectColors[value] || "#C11700" 
    };
    setScheduleData(newData);
  };

  // Handle day name change
  const handleDayChange = (index, value) => {
    const newData = { ...scheduleData };
    newData.days[index] = value;
    setScheduleData(newData);
  };

  // Handle time slot change
  const handleTimeChange = (index, field, value) => {
    const newData = { ...scheduleData };
    newData.timeSlots[index][field] = value;
    setScheduleData(newData);
  };

  // Add a new day
  const handleAddDay = () => {
    const newData = { ...scheduleData };
    newData.days.push("Нэмэлт өдөр оруулах");
    
    // Add a new column to each time slot
    newData.subjects.forEach((row) => {
      row.push({ name: "", color: "" });
    });
    
    setScheduleData(newData);
  };

  // Remove a day
  const handleRemoveDay = (index) => {
    if (scheduleData.days.length <= 1) return; // Don't remove the last day
    
    const newData = { ...scheduleData };
    newData.days.splice(index, 1);
    
    // Remove the corresponding column from each time slot
    newData.subjects.forEach((row) => {
      row.splice(index, 1);
    });
    
    setScheduleData(newData);
  };

  // Add a new time slot
  const handleAddTimeSlot = () => {
    const newData = { ...scheduleData };
    newData.timeSlots.push({ start: "00:00", end: "00:00" });
    
    // Add a new row of empty subjects
    const newRow = scheduleData.days.map(() => ({ name: "", color: "" }));
    newData.subjects.push(newRow);
    
    setScheduleData(newData);
  };

  // Remove a time slot
  const handleRemoveTimeSlot = (index) => {
    if (scheduleData.timeSlots.length <= 1) return; // Don't remove the last time slot
    
    const newData = { ...scheduleData };
    newData.timeSlots.splice(index, 1);
    newData.subjects.splice(index, 1);
    
    setScheduleData(newData);
  };

  return (
    <div className="ml-[240px] min-h-screen bg-black text-white mt-24">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-medium">Хуваарь</h1>
          <button 
            onClick={isEditing ? handleSaveClick : handleEditClick} 
            className="p-2 rounded-full hover:bg-zinc-800"
          >
            {isEditing ? (
              <FiCheck className="text-green-500 w-5 h-5" />
            ) : (
              <FiEdit className="text-white w-5 h-5" />
            )}
          </button>
        </div>
        
        <div className="border border-zinc-800 rounded-lg overflow-hidden">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900">
                <th className="py-4 px-4 border-b border-r border-zinc-800 text-left">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Хуваарь</span>
                  </div>
                  {isEditing && (
                    <button 
                      onClick={handleAddTimeSlot}
                      className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded text-xs flex items-center"
                    >
                      <FiPlus size={12} className="mr-1" /> Цаг нэмэх
                    </button>
                  )}
                </th>
                {scheduleData.days.map((day, index) => (
                  <th key={index} className="py-4 px-6 border-b border-r border-zinc-800 text-center">
                    {isEditing ? (
                      <div className="flex flex-col items-center gap-2">
                        <input
                          type="text"
                          value={day}
                          onChange={(e) => handleDayChange(index, e.target.value)}
                          className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm text-center"
                        />
                        <button 
                          onClick={() => handleRemoveDay(index)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <FiTrash2 size={14} />
                        </button>
                      </div>
                    ) : (
                      day
                    )}
                  </th>
                ))}
                {isEditing && (
                  <th className="py-4 px-2 border-b border-zinc-800 text-center">
                    <button 
                      onClick={handleAddDay}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white p-1 rounded-full"
                    >
                      <FiPlus size={18} />
                    </button>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {scheduleData.timeSlots.map((timeSlot, timeIndex) => (
                <tr key={timeIndex} className="border-b border-zinc-800">
                  <td className="py-3 px-4 border-r border-zinc-800 text-gray-400">
                    {isEditing ? (
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="time"
                            value={timeSlot.start}
                            onChange={(e) => handleTimeChange(timeIndex, 'start', e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm"
                          />
                          <span>-</span>
                          <input
                            type="time"
                            value={timeSlot.end}
                            onChange={(e) => handleTimeChange(timeIndex, 'end', e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm"
                          />
                        </div>
                        <button 
                          onClick={() => handleRemoveTimeSlot(timeIndex)}
                          className="text-red-500 hover:text-red-400 text-xs flex items-center justify-center"
                        >
                          <FiTrash2 size={12} className="mr-1" /> Устгах
                        </button>
                      </div>
                    ) : (
                      <>
                        {timeSlot.start}
                        <br />
                        {timeSlot.end}
                      </>
                    )}
                  </td>
                  {scheduleData.days.map((_, dayIndex) => {
                    const subject = scheduleData.subjects[timeIndex][dayIndex];
                    return (
                      <td key={dayIndex} className="py-3 px-2 border-r border-zinc-800 text-center">
                        {isEditing ? (
                          <select 
                            value={subject.name}
                            onChange={(e) => handleSubjectChange(timeIndex, dayIndex, e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm"
                          >
                            <option value="">-</option>
                            {Object.keys(subjectColors).map(subject => (
                              <option key={subject} value={subject}>{subject}</option>
                            ))}
                          </select>
                        ) : (
                          subject.name && (
                            <div className="flex items-center justify-center gap-2">
                              <div 
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: subject.color }}
                              />
                              <span>{subject.name}</span>
                            </div>
                          )
                        )}
                      </td>
                    );
                  })}
                  {isEditing && <td></td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
