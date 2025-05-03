"use client";

import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Calendar({ className }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Month names in Mongolian
  const monthNames = [
    "1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар",
    "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"
  ];

  // Day names in Mongolian (starting from Monday)
  const dayNames = ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"];

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  // Get first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  // Adjust to start from Monday (0 = Monday, 6 = Sunday)
  const firstDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  // Get days in month
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  // Create calendar days
  const days = [];
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(null); // Empty days at the beginning
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
  }

  // Sample events for demonstration
  const events = [
    { date: new Date(2025, 4, 5), title: "Математикийн шалгалт", color: "#C11700" },
    { date: new Date(2025, 4, 10), title: "Монгол хэлний хичээл", color: "#FF5A0E" },
    { date: new Date(2025, 4, 15), title: "Англи хэлний хичээл", color: "#FFCC00" },
    { date: new Date(2025, 4, 20), title: "Биеийн тамирын өдөр", color: "#00AA11" },
  ];

  const getEventsForDate = (date) => {
    return events.filter(
      (event) => 
        date && 
        event.date.getDate() === date.getDate() && 
        event.date.getMonth() === date.getMonth() && 
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const isToday = (date) => {
    const today = new Date();
    return date && 
      date.getDate() === today.getDate() && 
      date.getMonth() === today.getMonth() && 
      date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date) => {
    return date && 
      date.getDate() === selectedDate.getDate() && 
      date.getMonth() === selectedDate.getMonth() && 
      date.getFullYear() === selectedDate.getFullYear();
  };

  return (
    <div className={`ml-[240px] p-6 bg-black text-white ${className}`}>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={goToPreviousMonth}
              className="p-2 rounded-full hover:bg-zinc-800"
            >
              <FiChevronLeft />
            </button>
            <button 
              onClick={goToNextMonth}
              className="p-2 rounded-full hover:bg-zinc-800"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Day names */}
          {dayNames.map((day, index) => (
            <div key={index} className="text-center text-sm py-2 text-zinc-400">
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {days.map((date, index) => (
            <div
              key={index}
              className={`h-24 border border-zinc-800 rounded-md p-1 ${
                !date ? 'bg-transparent' : 'hover:bg-zinc-900 cursor-pointer'
              } ${isToday(date) ? 'border-indigo-500' : ''} ${
                isSelected(date) ? 'bg-zinc-900' : ''
              }`}
              onClick={() => date && handleDateSelect(date)}
            >
              {date && (
                <>
                  <div className="text-right mb-1">
                    <span className={`text-sm ${isToday(date) ? 'bg-indigo-500 text-white rounded-full w-6 h-6 inline-flex justify-center items-center' : ''}`}>
                      {date.getDate()}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {getEventsForDate(date).map((event, i) => (
                      <div
                        key={i}
                        className="text-xs p-1 rounded truncate"
                        style={{ backgroundColor: event.color + '33' }} // Add transparency
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Event list for selected date */}
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">
          {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]}, {selectedDate.getFullYear()}
        </h3>
        {getEventsForDate(selectedDate).length > 0 ? (
          <div className="space-y-2">
            {getEventsForDate(selectedDate).map((event, i) => (
              <div 
                key={i} 
                className="flex items-center p-3 rounded-md bg-zinc-900"
              >
                <div 
                  className="w-3 h-10 rounded-sm mr-3"
                  style={{ backgroundColor: event.color }}
                ></div>
                <div>
                  <p className="font-medium">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-zinc-500">Үйл явдал алга</p>
        )}
      </div>
    </div>
  );
}
