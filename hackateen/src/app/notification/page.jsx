"use client";

import { FiMoreVertical, FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useData } from "@/providers/dataProvider";

export default function NotificationPage() {
  const [showAccountPopover, setShowAccountPopover] = useState(false);
  const [showPollPopover, setShowPollPopover] = useState(false);
  const [pollOptions, setPollOptions] = useState([""]);
  const { data } = useData();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  // Handle option input change
  const handleOptionChange = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);

    // Add a new empty input when typing in the last field
    if (value.length > 0 && index === pollOptions.length - 1) {
      setPollOptions([...newOptions, ""]);
    }

    // Remove empty options when backspacing
    if (value.length === 0 && index !== pollOptions.length - 1) {
      // Only remove if it's not the last input field
      const filteredOptions = newOptions.filter((_, i) => i !== index);
      setPollOptions(filteredOptions);
    }
  };

  return (
    <div className="ml-[240px] min-h-screen bg-black text-white p-6 relative">
      {/* Account Section */}
      <section className="mb-10">
        <h2 className="text-lg font-medium mb-4">Данс</h2>

        {/* Account Card 1 */}
        {data?.announcements.map(
          (e, i) =>
            e.type == "payment" && (
              <div key={i} className="bg-zinc-900 rounded-md mb-4">
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-normal">{e.name}</h3>
                  </div>

                  <div className="mt-2">
                    <div className="flex gap-1">
                      <span className="text-gray-400 text-sm">
                        {e.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </section>

      {/* Poll Section */}
      <section>
        <h2 className="text-lg font-medium mb-4">Poll</h2>

        <div className="flex w-full gap-4">
          {/* Poll Card 1 */}
          {data?.announcements.map(
            (e, i) =>
              e.type == "poll" && (
                <div key={i} className="bg-zinc-900 rounded-md p-4 w-2/5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-base font-normal">{e.name}</h3>
                  </div>

                  <div className="space-y-3 mb-4">
                    {e.possible_answers.map((e, i) => (
                      <div
                        key={100 + i}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="poll1-yes"
                            name="poll1"
                            className="h-4 w-4 accent-indigo-600"
                          />
                          <label htmlFor="poll1-yes" className="text-sm">
                            {e}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white text-sm">
                    Vote
                  </button>
                </div>
              )
          )}
        </div>
      </section>

      {/* Add Account Popover */}
      {showAccountPopover && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center"
          onClick={() => setShowAccountPopover(false)}
        >
          <div
            className="bg-zinc-900 rounded-lg p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-medium mb-6 text-center">Данс нэмэх</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Мэдээлэл
                </label>
                <input
                  type="text"
                  placeholder="Мэдэхгүй"
                  className="w-full px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Дансны дугаар
                </label>
                <div className="flex gap-2 mb-2">
                  <div className="relative w-1/3">
                    <select className="appearance-none w-full px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-8">
                      <option>Хаан банк</option>
                      <option>Голомт банк</option>
                      <option>Хас банк</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <FiChevronDown className="text-gray-400" />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="534513435"
                    className="w-2/3 px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="relative w-1/3">
                    <select className="appearance-none w-full px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-8">
                      <option>Голомт банк</option>
                      <option>Хаан банк</option>
                      <option>Хас банк</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <FiChevronDown className="text-gray-400" />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="12488384"
                    className="w-2/3 px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
                Нэмэх
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Poll Popover */}
      {showPollPopover && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center"
          onClick={() => setShowPollPopover(false)}
        >
          <div
            className="bg-zinc-900 rounded-lg p-6 max-w-md w-full mx-4 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-medium mb-6 text-center">Poll нэмэх</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Асуулт
                </label>
                <input
                  type="text"
                  placeholder="Angiaraa hamt kino vzeh naizuudaa"
                  className="w-full px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Сонголт
                </label>

                {/* Dynamic Options Input Fields */}
                <div className="space-y-2">
                  {pollOptions.map((option, index) => (
                    <div key={index} className="w-full">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(index, e.target.value)
                        }
                        placeholder={index === 0 ? "Тийм" : "Сонголт нэмэх"}
                        className="w-full px-4 py-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
                Нэмэх
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
